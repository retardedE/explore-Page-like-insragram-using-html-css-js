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