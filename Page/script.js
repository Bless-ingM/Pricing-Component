const toggle = document.querySelector('#toggle')
const come = document.querySelector('#come')

toggle.addEventListener('change', e =>{
    come.classList.toggle('show-monthly')
    
})