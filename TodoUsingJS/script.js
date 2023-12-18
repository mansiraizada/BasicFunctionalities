var inp = document.querySelector("input");
var additem = document.querySelector("#add");
var remove = document.querySelector("#remove");
var list = document.querySelector("ul");

var li; 
 
additem.addEventListener("click", function () {
    if (inp.value.trim() === '') {
       
    }
    else {
        console.log(inp.value)
        li = document.createElement('li');
        li.textContent = inp.value;
        list.appendChild(li)
        inp.value = "";
        // list.innerHTML += `<li>${inp.value}</li>` 
    }
});

remove.addEventListener('click', function () {
    if (list.childElementCount === 0) {
        alert('The List is Empty!')
    } else {
        list.removeChild(li);
    }
})