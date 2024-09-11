alert('Hello, welcome to my website! :)');
const switcher = document.querySelector('button');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    const classname = document.body.className;
    if(classname == "light") {
        switcher.innerHTML = "Change to Dark";
    }
    else {
        switcher.innerHTML = "Change to Light";
    }
});