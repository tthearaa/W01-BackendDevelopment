import fs from 'fs'

const filepath = "./hello.txt";

fs.writeFileSync(filepath, "Hello, Node.js Beginner!");

const content = fs.readFileSync(filepath, "utf8")

console.log("File Content:", content);

// Async Versions

const AsyncFile = "./hellopart2.txt"

fs.writeFile(AsyncFile, "Today is a Thursday!",(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
fs.writeFile(AsyncFile, "I am learning Backend Development using Node.js!",(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
//No content shown because it runs asynchrously, which means that it reads and write in parrallel
fs.readFile(AsyncFile, "utf-8",  (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:",data );
})
