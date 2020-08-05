# NOTE- TAKER

> ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## NOTE- TAKER

- For users that need to keep track of a lot of information.

- Able to take persistent notes allows users to have written information available when needed.

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [GitHub Informationl](#github-information)
- [Questions](#questions)
- [Credits](#credits)

# Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

# Installation

No installations; the Deployed version can be found:
https://polar-brook-21393.herokuapp.com/

# Usage

- AS A user, I want to be able to write and save notes

- I WANT to be able to delete notes I've written before

- SO THAT I can organize my thoughts and keep track of tasks I need to complete

- For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

The application has a db.json file on the backend that will be used to store and retrieve notes using the fs module.

\*API routes:

GET /api/notes - reads the db.json file and return all saved notes as JSON.

POST /api/notes - receives a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - receives a query parameter containing the id of a note to delete. there is also a unique id when a note is saved. Read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

# Contributors

askBCS Learning Assistants 6 different

- @Zach Rickards- Instructor- helped me finish the missing pieces
- Tim Nagorski [TA] helped with get post methods
- Carl Vega[TA] helped with code issues
- BCS Hot Resturant class activity
- Summer Healey [class mate] helped with heroku, and get post method

## https://github.com/kobac44

<img src="https://avatars0.githubusercontent.com/kobac44" width="200px">

## Credits

https://www.npmjs.com/package/express

https://www.npmjs.com/

[Heroku](https://signup.heroku.com/)

## Testing

- Screenshot

<img src="./public\assets\sss NoteTaker.jpg" width="500px">
