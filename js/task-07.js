const inputChange = document.querySelector('input#font-size-control')
const textSize = document.querySelector('span#text')

inputChange.addEventListener('change', element => {
    textSize.style.fontSize = `${element.target.value }px`
})