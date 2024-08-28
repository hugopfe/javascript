var contents = document.querySelectorAll('#container > div')

var contentScrollHeight = 0

window.onscroll = () => {
    for (let i = 0; i <= contents.length-1; i++) {
        if (contents[i].className != 'hide') {
            contentScrollHeight += contents[i].scrollHeight
        }
        
    }
}