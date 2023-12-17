// var username = document.querySelector('#username');
// var password = document.querySelector('#password');
// var btn = document.querySelector('button');

// btn.addEventListener('submit', function (e) {
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     try {
//         if (typeof (username.value) === 'string' && password.value.length > 6 && password.value.length < 10) {
//             console.log('Valid')
//         } else throw Error('Invalid form fields')
//     } catch(err) {
//         alert(err);
//     }
// })

var inps = document.querySelectorAll('input');
var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formValid = false;

    for (let i = 0; i < inps.length; i++){
        if (inps[i].value.trim() === '') {    
            formValid = false;
            alert('Invalid form details');
            break;
        }
        formValid = true;
    }

    if (formValid) {
        alert('Form submitted');
        for (let i = 0; i < inps.length; i++){
            inps[i].value = '';
        }
    }
})