/* This is our code file for the Sticky Notes functionality. 

For context, the functionality we have involves vanilla JS and DOM manipulation
so it's more organized to have the codes separate from the once we have for Vue.js 

This also uses Bootsrap CSS for utilities */

const notesContainer = document.getElementById('sticky-notes');
const addNoteBtn = document.getElementById('add-note');
const LOCAL_STORAGE_KEY_NOTES = 'stickyNotesData';


function saveNotesToStorage() {
    const notes = Array.from(notesContainer.querySelectorAll('textarea')).map(ta => ta.value);   //Saves all notes currently in the DOM to browser's local storage
    localStorage.setItem(LOCAL_STORAGE_KEY_NOTES, JSON.stringify(notes));
}

function createNoteElement(text = '') {
    const textarea = document.createElement('textarea'); //Creates the DOM element and binds events
    textarea.className = 'note form-control mt-3'; 
    textarea.rows = '4';
    textarea.placeholder = 'Empty sticky note / Double click to delete a note';
    textarea.value = text; 


    textarea.addEventListener('input', saveNotesToStorage); //Event binding happens here 
    
    textarea.addEventListener('dblclick', () => {
        if (confirm('Are you sure you want to delete this sticky note?')) {         // Double to delete functionality
            textarea.remove(); 
            saveNotesToStorage(); 
        }
    });

    notesContainer.appendChild(textarea); //add another note container 
}

function loadNotes() {
    const placeholder = notesContainer.querySelector('textarea:not([data-note])');
    if (placeholder) {
        placeholder.remove();
    }
    
    const savedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOTES)) || [];
    
    if (savedNotes.length === 0) {                          //This is for default mode of the functionality, if no notes were saved, it loads a blank one 
        createNoteElement();
    } else {
        savedNotes.forEach(noteText => createNoteElement(noteText));
    }
}



// Event listeners here

addNoteBtn.addEventListener('click', () => {
    createNoteElement();
    saveNotesToStorage(); 
});

loadNotes();