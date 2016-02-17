var fs = require('fs');

var startDir = process.argv[2];
var out = process.argv[3];

var imports = "";
var map = {};

function camelCase(name) {
    return name.split('-').map(function(part){return part[0].toUpperCase() + part.substr(1)}).join('');
}

function toMap(item) {
    var root = map;

    imports += "    var " + item.name + " = require('../" + item.file.substr(0, item.file.length - 3) + "');\n";

    for (var i=0; i<item.ns.length-1;i++) {
        root[item.ns[i]] = root[item.ns[i]] || {};
        root = root[item.ns[i]];
    }
    root[item.name] = item.name;
}

function printMap() {
    var mapJs = JSON.stringify(map);

    mapJs.match(/"\w+":"\w+"/g).forEach(function(match){
        var withQuotes = match.split(':')[0];
        var withoutQuotes = withQuotes.substr(1, withQuotes.length - 2);
        mapJs = mapJs.replace(match, withQuotes + ':' + withoutQuotes);
    });

    var js = 'define(function(require) {\n\n';
    js += imports;
    js += '\n    return ' + mapJs + '\n';
    js += '\n});';


    fs.writeFile(out, js, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

function readdir(dir, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) {
            var ns = dir.split('/').splice(1);
            ns[ns.length - 1] = camelCase(ns[ns.length - 1].split('.')[0]);

            toMap({
                name: ns[ns.length - 1],
                ns: ns,
                file: dir
            });
            callback([]);
        }
        else {
            files = files.map(function(file) {
                return dir + '/' + file;
            });
            callback(files);
        }
    });
}

var COUNTER = 0;

function readNext(dirs) {
    COUNTER += dirs.length;
    dirs.forEach(function(dir){
        readdir(dir, function(subdirs){
            COUNTER--;
            if (subdirs.length) {
                readNext(subdirs, readNext);
            }
            else if (!COUNTER) {
                printMap();
            }
        });
    });
}

readNext([startDir]);