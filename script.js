const body = document.body;
const divContainer = document.createElement('div');
divContainer.innerText = "Hello World";
body.append(divContainer);

let boxSize = 100 / 256;

// Number of boxes
for(let i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.className = "block";
    div.innerText = "hello";
    divContainer.appendChild(div);
    div.style.border = "thin solid black";
}
// CSS aquivalent in DOM
body.style.margin = 0;
divContainer.style.display = "grid";
divContainer.style.height = "100vh";
divContainer