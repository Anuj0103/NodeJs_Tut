const fs = require("fs");

if (fs.existsSync("your-files-here")){
 console.log("already-there");
}
else {
 
fs.mkdir("your-files-here", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("directory created");
  }
});
}


fs.rename("./lib/notes.md", "./notes.md", function (err) {
 if (err) {
  throw err;
 }
 console.log("rename has been successful");
})