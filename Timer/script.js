var start = document.querySelector('#start')
var stop = document.querySelector('#stop')
var timer = document.querySelector('h3')

var time = 0;
var interval;

start.addEventListener('click', function () {
    console.log('hi');
    interval = setInterval(function () {
        time++
        timer.textContent = time
    }, 1000)
})

stop.addEventListener('click', function () {
    clearInterval(interval);
})