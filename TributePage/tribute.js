
const quotationElement = document.querySelector('.quotation');
quotationElement.addEventListener('animationend', () => {
    quotationElement.style.transform = 'translateY(-20px)';
    quotationElement.style.textShadow = '0 0 20px rgba(255, 255, 255, 1)';

});
