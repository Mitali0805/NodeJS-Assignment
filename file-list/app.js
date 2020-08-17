var fs = require('fs');
var f ="./"

fs.readdir(f,function(err,files){
    if(err) throw err;

    files.forEach(function(file){
        if(fs.statSync(file).isDirectory())  //fs.statSync ->asynchronously return info about file
        console.log("Folder:"+file);

        else{
            console.log("File:"+file)
        }

    });
});
