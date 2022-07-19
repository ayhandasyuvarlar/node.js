let os = require("os");

//console.log(os.platform(), os.homedir());

let fs = require("fs");
//console.log(fs);

/*fs.readFile('./docs/test.txt','UTF-8', (err,data) => {
    if(err) throw err
    console.log(data)
})*/

/*fs.writeFile("./docs/testTwo.txt", "Hello world", (err) => {
  if (err) throw err;
  console.log("article succesful");
});*/


// create folder and delete folder process

/*if(!fs.existsSync("./assets")){
fs.mkdir("./assets", (err) => {
    if (err){
      console.log(err.code)
    };
    console.log("folder create successful");
  });}else{
    fs.rmdir("./assets",(err) =>{
        if(err)throw err
        console.log('delete folder succesful')
    })
  }*/


  //  delete file  process  and  file is  create ,write  article
  
if(!fs.existsSync('./docs/textTwo.js')){
    fs.writeFile("./docs/testTwo.txt", "Hello world", (err) => {
        if (err) throw err;
        console.log("article succesful");
      })
}else{
    fs.unlink('./docs/testTwo.txt', (err) => { 
        if(err) throw err
        console.log('file delete successful')
    })
}