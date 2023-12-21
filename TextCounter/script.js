var textarea = document.querySelector('textarea');
var span = document.querySelector('span');

textarea.addEventListener('input', function(){
    span.textContent = textarea.value.length
})