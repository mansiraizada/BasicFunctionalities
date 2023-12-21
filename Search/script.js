var data = [
    {
        name: 'Mansi',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RBdoArNzCWmJG93TCgxCOp69KzzPCwS94g&usqp=CAU"
    },
    {
        name: 'Prateek',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIQS9f7SlxbyUVA18PeoZ5iaJWijqyITZYw&usqp=CAU"
    },
    {
        name: "Cat",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RBdoArNzCWmJG93TCgxCOp69KzzPCwS94g&usqp=CAU"
    },
    {
        name: "Dog",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RBdoArNzCWmJG93TCgxCOp69KzzPCwS94g&usqp=CAU"
    },
    {
        name: "Manvi",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIQS9f7SlxbyUVA18PeoZ5iaJWijqyITZYw&usqp=CAU"
    },
    {
        name: "Malti",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIQS9f7SlxbyUVA18PeoZ5iaJWijqyITZYw&usqp=CAU"
    }
];

var profile = document.querySelector('#container');
var inp = document.querySelector('input');
var sepProfile = "";

data.forEach(function(el){
    sepProfile += `
    <div id="profile">
    <img src=${el.src} alt=""/>
    <h4>${el.name}</h4>
    </div>`
});

profile.innerHTML = sepProfile;

inp.addEventListener('input', function(){
    let newProfile = inp.value;
    let newUser = data.filter(function(el){
        return el.name.startsWith(newProfile);
    })

    var newSepProfile = "";
    newUser.forEach(function(el){
        newSepProfile += `
        <div id="profile">
        <img src=${el.src} alt=""/>
        <h4>${el.name}</h4>
        </div>`
    });

    profile.innerHTML = newSepProfile;
})
