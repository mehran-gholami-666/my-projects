let $ = document
let contextMenuElem = $.querySelector('.context-menu')

$.body.addEventListener('click', function () {
    contextMenuElem.style.left = 0
    contextMenuElem.style.top = 0
    contextMenuElem.style.display = 'none'
})

$.body.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    console.log(event.pageX)
    console.log(event.pageY)
    contextMenuElem.style.left = event.pageX + 'px'
    contextMenuElem.style.top = event.pageY + 'px'
    contextMenuElem.style.display = 'flex'
})