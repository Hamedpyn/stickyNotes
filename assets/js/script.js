const addBtn = document.querySelector('#drop-menu')
let colors = document.querySelectorAll('.color')

addBtn.addEventListener('click', dropMenu)

function dropMenu() {
    colors.forEach(item => {
        if (!(item.classList.contains('hide'))) {
            item.classList.add('hide')
        }
        else {
            item.classList.remove('hide')
        }
    })
    if (!(addBtn.classList.contains('rotate'))) {
        addBtn.classList.add('rotate')
    }
    else {
        addBtn.classList.remove('rotate')
    }

}