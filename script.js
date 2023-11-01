'use strict'
const inputEl=document.querySelector('#InputExplore')
const closeEl=document.querySelector('.close')
const userSearchBar=document.querySelector('.userSearchBar')
inputEl.addEventListener('click', ()=>{
    userSearchBar.classList.remove('nonActive')
    closeEl.classList.remove('nonActive')
    document.body.style.overflow='hidden'
})
closeEl.addEventListener('click', ()=>{
    userSearchBar.classList.add('nonActive')
    closeEl.classList.add('nonActive')
    document.body.style.overflow='auto'
})
const postBox=document.querySelectorAll('.postBox')
const clickedPost=document.querySelectorAll('.clickedPost')
const closePost=document.querySelectorAll('.closePost')
let isOpen=false
let arrayBoxes= Array.from(postBox)
let arrayBoxesClicked= Array.from(clickedPost)
let arrayClosePost= Array.from(closePost)
for(let i=0; i<arrayBoxes.length;i++){
    arrayBoxes[i].addEventListener('click', ()=>{
        arrayBoxesClicked[i].classList.remove('nonActive')
    })
}