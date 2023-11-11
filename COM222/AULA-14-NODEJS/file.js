const fs = require('fs');

if(fs.existsSync('myDirectory')){
    console.log('This directory already exists.');
} else {
    fs.makeDir('myDirectory');
    console.log('Creating directory...');
}
