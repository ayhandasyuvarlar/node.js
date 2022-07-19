let fs = require("fs"); // include the fs module 

let readStream = fs.createReadStream("./docs/testTwo.txt", {   
  encoding: "utf-8",
});
let writeStream = fs.createWriteStream("./docs/testThere.txt"); // create file 
let writeStreamTwo = fs.createWriteStream("./docs/testFour.txt"); // create file
readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.pipe(writeStream) // texts in textTwo file textThere file transfer process
readStream.pipe(writeStreamTwo) //texts in textTwo file textFour file transfer process