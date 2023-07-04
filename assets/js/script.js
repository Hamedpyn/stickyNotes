// ! DOM Selectors

// addBtn [ plus icon ]
let addBtn = document.querySelector('#drop-menu'),
    // all colors
    colors = document.querySelectorAll('.color'),
    // note-list
    noteList = document.querySelector('#note-list'),
    // all notes
    note = document.querySelector('.note'),
    // body
    body = document.body,
    //  theme button
    themeBtn = document.querySelector('#theme')
// icon's id [ sun - moon ]
changingMode = document.querySelector('#changingMode');


// ? Events
addBtn.addEventListener('click', dropMenu)
document.addEventListener('DOMContentLoaded', () => {
    lightAndDarkMode()
    addNewNotes()
})

// * function
// * showing the colors by clicking on addBtn
// * rotating the addBtn [plus icon]
function dropMenu() {
    colors.forEach(item => {
        // if the colors doesn't have the show class
        if (!(item.classList.contains('show'))) {
            // add the class
            item.classList.add('show')
        }
        else {
            // if it has the class , remove it
            item.classList.remove('show')
        }
    })
    // if addBtn doesn't have the class
    if (!(addBtn.classList.contains('rotate'))) {
        // add the class
        addBtn.classList.add('rotate')
    }
    else {
        // if it has the class , remove it
        addBtn.classList.remove('rotate')
    }
}

// * function
// * adding new notes by clicking on each color
function addNewNotes() {
    colors.forEach(item => {
        item.addEventListener('click', () => {
            let newNote = document.createElement('div')
            newNote.classList.add('note')
            // getting bgc from the colors and setting it as the note color
            let getColor = item.getAttribute('background-color')
            newNote.setAttribute('style', `background:${getColor}`)
            // note's html
            newNote.innerHTML = `
            <textarea class='text' placeholder="Write Here!"></textarea>
            <div id="icons">
            <i class="bx bx-save save"></i>
            <i class="bx bx-trash delete"></i>
            </div>`
            // pushing notes into the note-list
            noteList.appendChild(newNote)
            saveAndDelAlert()
        })
    })
}

// * function
// * removing a note after clicking on deleteBtn
// * showing del alert after removing a note
// * showing save alert after clicking on saveBtn
function saveAndDelAlert() {
    let deleteBtn = document.querySelectorAll('.delete')
    deleteBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.note').remove()
            delAlert()
        })
    })
    let saveBtn = document.querySelectorAll('.save')
    saveBtn.forEach(item => {
        item.addEventListener('click', () => {
            saveAlert()
        })
    })
}

// * function
// * showing a text alert and hiding after 2s
// * class="hideEl" : 'display:none' 
function delAlert() {
    // delete alert variable
    let deleteAlert = document.querySelector("#del-alert");
    // if it has the class
    if (deleteAlert.classList.contains("hideEl")) {
        // remove it => display:block
        deleteAlert.classList.remove("hideEl");
        // after 2s add the class
        setTimeout(function () {
            deleteAlert.classList.add("hideEl");
        }, 600);
    }
}

// * function
// * showing a text alert and hiding after 2s
// * class="hideEl" : 'display:none' 
function saveAlert() {
    // save alert variable
    let saveAlert = document.querySelector('#save-alert')
    // if it has the class
    if (saveAlert.classList.contains("hideEl")) {
        // remove it => display:block
        saveAlert.classList.remove("hideEl")
        // after 2s add the class
        setTimeout(function () {
            saveAlert.classList.add("hideEl")
        }, 600);
    }
}

// * changing mode by clicking on themeBtn [ Moon - Sun ]
function lightAndDarkMode() {
    themeBtn.addEventListener('click', () => {
        // if body has the dark mode remove it if it doesn't have it add the dark mode
        body.classList.toggle('dark-mode')
        // if it has the dark mode class
        if (body.classList.contains('dark-mode')) {
            // turn it to light mode
            changingMode.classList.add('bxs-sun')
            // set local storage in application as dark mode
            localStorage.setItem('theme', 'darkMode')
            // if it hasn't the dark mode
        } else {
            // turn it to dark mode
            changingMode.classList.remove('bxs-sun')
            // set local storage in application as light mode
            localStorage.setItem('theme', 'lightMode')
        }
    })
}

// * saving the theme with local storage
// when the page has been load
this.addEventListener('load', () => {
    // get theme from the local storage
    let savingTheMode = localStorage.getItem('theme')
    // if theme was dark mode
    if (savingTheMode === 'darkMode') {
        // add dark mode class to the body
        body.classList.add('dark-mode')
        // add sun icon to the changing mode
        changingMode.classList.add('bxs-sun')
    }
})

// ~>    MADE BY @HAMEDPYN    <~