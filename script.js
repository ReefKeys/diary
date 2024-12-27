let notes = [];
let currentEditIndex = -1;

function renderNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    notes.forEach((note, index) => {
        const noteItem = document.createElement('li');
        noteItem.innerHTML = `
            <strong>${note.title}</strong><br />
            <p>${note.content}</p>
            <button onclick="deleteNote(${index})">Hapus</button>
            <button onclick="editNote(${index})">Edit</button>
        `;
        noteList.appendChild(noteItem);
    });
}

function addNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    if (currentEditIndex === -1) {
        notes.push({ title, content });
    } else {
        notes[currentEditIndex] = { title, content };
        currentEditIndex = -1; 
    }

    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';

    renderNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

function editNote(index) {
    const note = notes[index];
    document.getElementById('noteTitle').value = note.title;
    document.getElementById('noteContent').value = note.content;

    currentEditIndex = index;
}
