const code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('button');
const color = document.querySelector('.color');

function makeHex() {
    return Math.floor(Math.random() * code.length);
}

button.addEventListener('click', () => {
    let hexColor = '#';
    for (i = 0; i< 6; i++) {
        hexColor += code[makeHex()];
        makeHex();
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});