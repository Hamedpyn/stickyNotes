let addBtn = document.querySelector('#drop-menu'),
    colors = document.querySelectorAll('.color'),
    noteList = document.querySelector('#note-list'),
    note = document.querySelector('.note')

addBtn.addEventListener('click', dropMenu)

function dropMenu() {
    colors.forEach(item => {
        if (!(item.classList.contains('show'))) {
            item.classList.add('show')
        }
        else {
            item.classList.remove('show')
        }
    })
    if (!(addBtn.classList.contains('rotate'))) {
        addBtn.classList.add('rotate')
    }
    else {
        addBtn.classList.remove('rotate')
    }
}

function saveAndDelAlert() {
    console.log(deleteBtn);
    deleteBtn.addEventListener('click', item => {
        item.forEach(() => {
            newNote.remove()
            delAlert()
        })
    })
    saveBtn.addEventListener('click', item => {
        item.forEach(() => {
            saveAlert()
        })
    })
}

function addNewNotes() {
    colors.forEach(item => {
        item.addEventListener('click', () => {
            let getColor = item.getAttribute('backgroundcolor')
            note = document.createElement('div')
            note.classList.add('note')
            note.setAttribute('style', `background:${getColor}`)
            note.innerHTML = `
            <textarea placeholder="Write Here!"></textarea>
            <div id="icons">
            <i class="bx bx-save save"></i>
            <i class="bx bx-trash delete"></i>
            </div>`
            noteList.appendChild(note)
        })
    })

}
addNewNotes()






























function delAlert() {
    let deleteAlert = document.querySelector("#del-alert");
    if (deleteAlert.classList.contains("hideEl")) {
        deleteAlert.classList.remove("hideEl");
        setTimeout(function () {
            deleteAlert.classList.add("hideEl");
        }, 2000);
    }
}

function saveAlert() {
    let saveAlert = document.querySelector('#save-alert')
    if (saveAlert.classList.contains("hideEl")) {
        saveAlert.classList.remove("hideEl");
        setTimeout(function () {
            saveAlert.classList.add("hideEl")
        }, 2000);
    }
}