import fs from 'fs'
import chalk from "chalk";

const getNotes = () => {
  return 'your notes...'
}

const addNotes = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    console.log('New note added!')
    saveNotes(notes)
  } else {
    console.log(title + ' is already used')
  }
}

const removeNote = title => {
  const notes = loadNotes()
  const noteIndex = notes.findIndex(note => note.title === title)

  if (noteIndex >= 0) {
    notes.splice(noteIndex, 1)
    console.log(title + ' deleted')
    saveNotes(notes)
  } else {
    console.log("No note with this title")
  }
}

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(note => console.log(note.title))
}

const readNote = title => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)
  if (note) {
    console.log(note.title)
    console.log(note.body)
  } else {
    console.log(chalk.red('note not found'))
  }
}


const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('./notes.json')
    const dataJSON = dataBuffer.toString()

    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

export {addNotes, removeNote, listNotes, readNote}


