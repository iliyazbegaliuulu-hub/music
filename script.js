
// new Audio= js ке аудиону чакырып иштетсе болот
// play= аудиону иштетет
// pause= аудиону токтот
// onended= аудио бүткөндө бир функцияны аткарат
// volume = үндүн бийиктиги 
 
let music= new Audio ('2.mp3')

let btn = document.getElementById('play')
btn.addEventListener('click', function(){
    music.play()
})

let btm = document.getElementById('pause')
btm.addEventListener('click', function()
{
    music.pause()
} )



let music1 = new Audio ('3.mp3')

let btn1 = document.getElementById('play1')
btn1.addEventListener('click', function(){
    music1.play()
})

let btm1 = document.getElementById('pause1')
btm1.addEventListener('click', function()
{
    music1.pause()
} )



let music2 = new Audio ('4.mp3')

let btn2 = document.getElementById('play2')
btn2.addEventListener('click', function(){
    music2.play()
})

let btm2 = document.getElementById('pause2')
btm2.addEventListener('click', function()
{
    music2.pause()
} )