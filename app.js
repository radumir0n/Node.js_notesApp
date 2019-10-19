const yargs = require("yargs");
const notes = require("./notes");

//Create ADD command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

//Create REMOVE command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove note",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.removeNote(argv.title);
  }
});

//Create LIST command
yargs.command({
  command: "list",
  describe: "List a note",
  handler: () => {
    notes.listTitles();
  }
});

//Create READ command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Remove note",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.readNote(argv.title);
  }
});

yargs.parse();
