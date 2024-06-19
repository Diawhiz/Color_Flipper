// Select the first <body> element in the document
const body = document.getElementsByTagName("body")[0];

/**
 * Changes the background color of the body and sets the border color of an element with the given name
 * @param {string} name - The name of the color to set as the background and the id of the element to change the border color
 */
function bgcolor(name) {
    // Set the background color of the body to the specified color
    body.style.backgroundColor = name;

    // Check if an element with the id equal to name exists and set its border color to white
    const element = document.getElementById(name);
    //if (element === element) {
    //    element.style.borderColor = name;
    //} else {
        //element.style.borderColor = name;  
    //}
}

/**
 * Generates a random color and sets it as the background color of the body
 */
function random() {
    // Generate random values for red, green, and blue components of the color
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);

    // Construct an RGB color string from the generated values
    const color = `rgb(${red}, ${blue}, ${green})`;

    // Set the background color of the body to the randomly generated color
    body.style.backgroundColor = color;
}
