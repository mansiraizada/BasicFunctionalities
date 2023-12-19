var tab = document.querySelectorAll(".item")
var content = document.querySelectorAll('h3')

tab.forEach(function (el, i) {
    el.addEventListener('click', function () {
        hideAll();
        content[i].style.display = "block";
    })      
})

function hideAll() {
    content.forEach(function (el) {
        el.style.display = "none";
    }) 
}

hideAll();
