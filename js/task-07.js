const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const ref = function () {
    spanRef.style.fontSize = inputRef.value + "px";
}
ref();

inputRef.addEventListener('input', () => { 
    ref();
})