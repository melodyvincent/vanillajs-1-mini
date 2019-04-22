let count = 0
const element = document.getElementById('counter')

function increase (){
    count++
   element.innterText = count
}
function decrease(){
    count--
    element.innterText = count
}

function reset(){
    count = 0 
    element.innterHTML = `<mark>${count}</mark>`

}

function selectTheme(theme) {
    document.body.className = theme
    // document.getElementsByTagName('body')[0].className = theme
    document.getElementsByTagName = ('main')[0].className = theme

    const buttons = document.getElementsByTagName('button')

    for (let i= 0; i < buttons.length; i++){
        button[i].className = theme
        
    }
}