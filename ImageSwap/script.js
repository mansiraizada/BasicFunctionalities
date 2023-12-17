var btn = document.querySelector('button')
var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var reloadbtn = document.querySelector('#reload')

var src1 = img1.src;
var src2 = img2.src;

btn.addEventListener('click', function () {
    img1.src = src2;
    img2.src = src1;
    reloadbtn.style.display = "initial"
})

reloadbtn.addEventListener('click', function () {
    img1.src = src1;
    img2.src = src2;
    reloadbtn.style.display = "none"
})
