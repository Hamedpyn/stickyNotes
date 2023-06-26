let addBtn = document.querySelector('#drop-menu'),
    colors = document.querySelectorAll('.color')

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
    let deleteBtn = document.querySelector('#icons').children[1]

    deleteBtn.addEventListener('click', item => {
        let note = document.querySelector('.note')
        note.remove()

        delAlert()
    })
    let saveBtn = document.querySelector('#icons').children[0]
    saveBtn.addEventListener('click', item => {
        saveAlert()
    })
}
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

saveAndDelAlert()