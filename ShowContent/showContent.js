var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
// myReadStream.on('data',function(chunk){

//     console.log("new chunk received:")
//     console.log(chunk);
// });

fs.readFile('readMe.txt',function(err,data){

    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});