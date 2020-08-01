// const util = require("util");
// const fs = require("fs");
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// class Notes {
//   read() {
//     return readFileAsync("db/db.json", "utf8");
//   }
//   write(note) {
//     return writeFileAsync("db/db.json", JSON.stringify(note));
//   }
//   getNotes() {
//     return this.read().then((notesArray) => {
//       let parsedNotes;
//       try {
//         parsedNotes = [].concat(JSON.parse(notesArray));
//       } catch (error) {
//         parsedNotes = [];
//       }
//       return parsedNotes;
//     });
//   }
// }
// module.exports = new Notes();
