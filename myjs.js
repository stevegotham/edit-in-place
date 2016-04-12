var username = document.getElementById('username');
var realName = document.getElementById('name');
var occupation = document.getElementById('occupation');
var bio = document.getElementById('bio');
var f_username = document.getElementById('f-username');
var f_realName = document.getElementById('f-name');
var f_occupation = document.getElementById('f-occupation');
var f_bio = document.getElementById('f-bio');

var toggle = function (el) {
    if (el.className == "hide") {
        el.className = "show";
    }
    else {
        el.className = "hide"
    }
}

var exit = function(key, el) {
    if (key === 13) {
        el.blur();
    }
}



// ===== user name ===== \\
username.addEventListener('click', function() {
    toggle(f_username);
    toggle(username);
    f_username.focus();
});
f_username.addEventListener('blur', function() {
    username.innerHTML = f_username.value;
    toggle(f_username);
    toggle(username);
})
// ===== name ===== \\
realName.addEventListener('click', function() {
    toggle(f_realName);
    toggle(realName);
    f_realName.focus();
});
f_realName.addEventListener('blur', function() {
    realName.innerHTML = f_realName.value;
    toggle(f_realName);
    toggle(realName);
})
// ===== occupation ===== \\
occupation.addEventListener('click', function() {
    toggle(f_occupation);
    toggle(occupation);
    f_occupation.focus();
});
f_occupation.addEventListener('blur', function() {
    occupation.innerHTML = f_occupation.value;
    toggle(f_occupation);
    toggle(occupation);
})

// ===== bio ===== \\
bio.addEventListener('click', function() {
    toggle(bio);
    toggle(f_bio);
    f_bio.focus();
});
f_bio.addEventListener('blur', function() {
    toggle(bio);
    toggle(f_bio);
    bio.innerHTML = f_bio.value;
    console.log(f_bio.value);
})
f_bio.addEventListener('keydown', exit());
