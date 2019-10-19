const fs = require("fs");
const chalk = require("chalk");

const readNote = title => {
  const notes = loadNotes();

  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.green(`Title: ${note.title}`));
    console.log(`Body: ${note.body}`);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const listTitles = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log(chalk.green.inverse("Your notes:"));
    notes.forEach(note => {
      console.log(note.title);
    });
  } else {
    console.log(chalk.red.inverse("You have no notes"));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const selectedTitle = notes.filter(note => {
    return note.title !== title;
  });

  if (notes.length > selectedTitle.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(selectedTitle);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicate = notes.find(note => {
    return note.title === title;
  });

  if (duplicate) {
    console.log(chalk.red.inverse("Title taken!"));
  } else {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Registered."));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listTitles: listTitles,
  readNote: readNote
};
