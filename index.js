const body = document.getElementsByTagName("body")[0];

function bgcolor(name) {
    body.style.backgroundColor = name;

    if(name == name) {
        document.getElementById(name).style.borderColor = "#fff";
        console.log('name');
    }
}

function random() {
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${blue}, ${green})`;

    body.style.backgroundColor = color;
}