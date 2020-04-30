import chalk from "chalk";
import yargs from "yargs"
import {addNotes, removeNote, listNotes, readNote} from './notes.js'

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    addNotes(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'remove note ',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler() {
    console.log(chalk.green("list of the notes"))
    listNotes()
  }
})

yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'read a note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    readNote(argv.title)
  }
})

yargs.parse()
