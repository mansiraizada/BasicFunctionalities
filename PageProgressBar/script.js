var progress = document.querySelector('#progress');
var pageHeight = document.body.scrollHeight - window.innerHeight;

console.log(window)
var height = (window.scrollY/pageHeight)*100;


progress.style.width = height + "%";