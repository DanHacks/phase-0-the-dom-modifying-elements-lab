// Remove the <main> element
const main = document.getElementById('main');
if (main) {
    main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = 'Elvis Mbugua is the champion'; // Replace "Elvis Mbugua" with your name

// Append the new <h1> to the document body (if required by the test)
document.body.appendChild(newHeader);
