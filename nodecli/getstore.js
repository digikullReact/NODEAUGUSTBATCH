const fs=require("fs");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
/*
fs.readFile("./store.txt",(err,data)=>{
    console.log(data.toString());
})
*/
console.log(argv);

if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!')
  } else {
    console.log('Retreat from the xupptumblers!')
  }