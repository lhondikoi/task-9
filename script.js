let itemsPerPage = 3
let currentPage = 1

let rows = Array.from(document.querySelectorAll('tr')).slice(1)

function changePage(n) {
    if (currentPage + n < 1 || currentPage + n > Math.ceil(rows.length / itemsPerPage)) {
        return
    }
    currentPage += n
    paginate(currentPage, itemsPerPage, rows)
}

function paginate(currentPage, itemsPerPage, contentArray) {
    let pages = Math.ceil(contentArray.length / itemsPerPage)
    let startIndex = (currentPage - 1) * pages
    let endIndex = startIndex + pages - 1 < contentArray.length ? startIndex + pages - 1 : contentArray.length - 1

    for (let i=0; i<contentArray.length; i++) {
        if (i < startIndex || i > endIndex) {
            contentArray[i].classList.add('hidden')
        } else {
            contentArray[i].classList.remove('hidden')
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
        paginate(currentPage, itemsPerPage, rows)
        let pages = Math.ceil(rows.length / itemsPerPage)
        let pageButtonsContainer = document.querySelector('#page-buttons')
        for (let i=1; i <= pages; i++) {
            let pageButton = document.createElement('span')
            pageButton.innerText = i
            pageButton.classList.add('page-button')
            pageButtonsContainer.appendChild(pageButton)
        }
        let pageButtons = document.querySelectorAll('.page-button')
        
        pageButtons.forEach((button) => {
            button.addEventListener('click', () => {
                currentPage = parseInt(button.innerText)
                paginate(currentPage, itemsPerPage, rows)
            })
        })
    })