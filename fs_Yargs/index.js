var fs = require('fs')
const yargs = require('yargs/yargs')
const prompt = require('prompt');
const argv = yargs(process.argv).argv

var filenames = fs.readFileSync('filenames.txt').toString().split("\n");
for(i in filenames) {
    console.log(filenames[i]);
}

var newfile = argv.filename
prompt.start();

if(filenames.includes(newfile)){
    checkfile()
}
else{
    createflie()
}


function checkfile(){
    console.log('Enter unused filename: ');
    prompt.get(['filename'], function (err, result) {
    if (err) { return onErr(err); }
    newfile=result.filename
    if(filenames.includes(newfile)){
        checkfile()
    }
    else{
        createflie()
    }
    
});
}


function createflie(){
    fs.writeFile(newfile, 'You are awesome', function (err) {
        if (err) throw err;
        console.log('New file Created...');
      });
    filenames.push(newfile)
    var file = fs.createWriteStream('filenames.txt');
    file.on('error', function(err) { 
        console.log('Error')
    });
    filenames.forEach(function(data) { file.write(data + '\n'); });
    file.end();
}