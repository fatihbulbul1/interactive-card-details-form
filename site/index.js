const container = document.querySelector('.container')
const num = document.getElementById('num')
const nme = document.getElementById('name')
const mm = document.getElementById('mm')
const yy = document.getElementById('yy')
const cvv = document.getElementById('cvv')
const cnf = document.getElementById('confirm')
const errtexts = document.querySelectorAll('.errtext')
const inputs = document.querySelectorAll('.inpts')
const numcard = document.querySelector('#numcard')
const namecard = document.querySelector('#namecard')
const expcard = document.querySelector('#expcard')
const cvvcard = document.querySelector('#cvvcard')
let passes = 0
let n = document.createElement('div')
n.style.display.fle
listenAdder(num,numcard)
listenAdder(nme,namecard)
listenAdder(cvv,cvvcard)
mm.addEventListener('input', () =>{
    expcard.innerHTML = mm.value+'/'
})
yy.addEventListener('input', () =>{
    expcard.innerHTML = mm.value+'/'+yy.value
})

function listenAdder(element,type) {
    element.addEventListener('input', () =>{
        type.innerHTML = element.value
    
    })
}
cnf.addEventListener('click',allcheck)
function namecheck() {
    let nametxt = nme.value
    let problem = false
    let spaceCount = 0
    if(nametxt == ''){
        errtexts[0].innerHTML = 'Can\'t be blank'
        inputs[0].style.border = '1px solid red'
        problem = true
    }
    else{
        errtexts[0].innerHTML = ' '
        inputs[0].style.border = '1px solid rgb(208, 208, 208);'
    }
    for(let i = 0;i<nametxt.length;i++){
        if(nametxt[i] == ' '){
            spaceCount++
        }
        if(parseInt(nametxt[i]) / 1 == parseInt(nametxt[i])){
            errtexts[0].innerHTML = 'Invalid name'
            inputs[0].style.border = '1px solid red'
            problem = true
            break
        }
        else{
            errtexts[0].innerHTML = ' '
            inputs[0].style.border = '1px solid rgb(208, 208, 208);'
        }
    }
    if(!problem && spaceCount == 0){
        errtexts[0].innerHTML = 'Name is incomplete'
        inputs[0].style.border = '1px solid red'
        problem = true
    }
    if(!problem){
        passes++
    }
}
function numcheck() {
    let numtxt = num.value
    let problem = false
    if(numtxt.length != 19){
        errtexts[1].innerHTML = 'Can\'t be blank or more/less than 16 digits'
        inputs[1].style.border = '1px solid red'
        problem = true
        return
    }
    if(!(numtxt[4] == ' ' && numtxt[9] == ' ' && numtxt[14] == ' ')){
        errtexts[1].innerHTML = 'Wrong card format, must seperated by 3 spaces'
        inputs[1].style.border = '1px solid red'
        problem = true
        return
    }
    for(let i = 0;i<numtxt.length;i++){
        if(parseInt(numtxt[i]) / 1 != parseInt(numtxt[i]) && numtxt[i] != ' '){
            errtexts[1].innerHTML = 'Wrong format, numbers only'
            inputs[1].style.border = '1px solid red'
            problem = true
            break
        }
        else{
            errtexts[1].innerHTML = ' '
            inputs[1].style.border = '1px solid rgb(208, 208, 208);'
        }
    }
    if (!problem){
        passes++
    }
}
function mmcheck() {
    let mmtxt = mm.value
    if(mmtxt.length > 2){
        errtexts[2].innerHTML = 'Can\'t be blank'
        inputs[2].style.border = '1px solid red'
        return
    }
    else{
        errtexts[2].innerHTML = ' '
        inputs[2].style.border = '1px solid rgb(208, 208, 208);'
    }
    if(mmtxt < 13 && mmtxt > 0){
        errtexts[2].innerHTML = ' '
        inputs[2].style.border = '1px solid rgb(208, 208, 208);'
        passes++
    }
    else{
        errtexts[2].innerHTML = 'Invalid month'
        inputs[2].style.border = '1px solid red'
    }
}
function yycheck() {
    let yytxt = yy.value
    if(yytxt.length > 2){
        errtexts[3].innerHTML = 'Invalid year'
        inputs[3].style.border = '1px solid red'
        return
    }
    if((yytxt < 33 && yytxt > 22) || (yytxt == 22 && mm.value >= 9)){
        errtexts[3].innerHTML = ' '
        inputs[3].style.border = '1px solid rgb(208, 208, 208);'
        passes++
    }
    else{
        errtexts[3].innerHTML = 'Card expired'
        inputs[3].style.border = '1px solid red'
    }
}
function cvvcheck() {
    let cvvtxt = cvv.value
    if(cvvtxt <= 999 && cvvtxt >= 100){
        errtexts[4].innerHTML = ' '
        inputs[4].style.border = '1px solid rgb(208, 208, 208);'
        passes++
    }
    else{
        errtexts[4].innerHTML = 'Invalid CVV'
        inputs[4].style.border = '1px solid red'
    }
}
function apply() {
    numcard.innerHTML = num.value 
    namecard.innerHTML = nme.value
    expcard.innerHTML = mm.value+'/'+yy.value
    cvvcard.innerHTML = cvv.value
}
function thankYou() {
    let tick = document.createElement('div')
    tick.id = 'tick'
    tick.innerHTML = '✓'

    let divinside = document.createElement('div')

    let ty = document.createElement('h2')
    ty.innerHTML = 'THANK YOU!'
    ty.id = 'ty'

    let text = document.createElement('p')
    text.innerHTML = 'We\'ve added your card details'
    text.id = 'text-end'

    let btn = document.createElement('input')
    btn.id = 'confirm'
    btn.type = 'button'
    btn.value = 'Continue'
    container.style.display = 'flex'
    container.style.flexDirection = 'column'
    container.style.alignItems = 'center'
    container.style.justifyContent = 'center'
    container.style.gap = '40px'
    container.appendChild(tick)
    divinside.appendChild(ty)
    divinside.appendChild(text)
    container.appendChild(divinside)
    container.appendChild(btn)
}
function allcheck() {
    passes = 0
    namecheck()
    numcheck()
    mmcheck()
    yycheck()
    cvvcheck()

    if(passes == 5){
        container.innerHTML = ''
        thankYou()
    }
}