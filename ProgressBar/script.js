var btn = document.querySelector('button')
var progress = document.querySelector('#progress')

var progressBar;

btn.addEventListener('click', function () {
    progressBar = 0;
    btn.textContent = 'Downloading...'
    
    let bar = setInterval(function () {
        if (progressBar === 100) {
            btn.textContent = 'Downloaded'
            clearInterval(bar);
        }
        progress.style.width = progressBar + '%';
        progressBar++;
    }, 50)
})