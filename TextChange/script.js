var btn = document.querySelector('button');
var text = document.querySelector('p');

btn.addEventListener('click', function () {
    text.textContent = "You just saw the demo of how the text content has changed."
    console.log('clicked')
});