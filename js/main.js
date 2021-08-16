
$(function() {

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});



const formElement = document.querySelector('#form');
const textareaContentElement = document.querySelector('#textareaContent');
const inputPhoneElement = document.querySelector('#inputPhone');
const modalMessageElement = document.querySelector('#modalMessage');
const buttonCancelElement = document.querySelector('#buttonCancel');
const buttonCloselElement = document.querySelector('.btn-close');



function handleSubmit(event){
    event.preventDefault();

    textareaContentElement.value = '';
    inputPhoneElement.value = '';

    modalMessageElement.classList.remove('d_none');

}

function handleWrite(){
    modalMessageElement.classList.add('d_none');
}

formElement.addEventListener('submit', handleSubmit); 
textareaContentElement.addEventListener('keydown', handleWrite);
buttonCancelElement.addEventListener('click', handleWrite);
buttonCloselElement.addEventListener('click', handleWrite);

