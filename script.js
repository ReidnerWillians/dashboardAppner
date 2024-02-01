var menuItem = document.querySelectorAll('.item__menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn__exp')
var menuSide = document.querySelector('.menu__lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})