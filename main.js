const range = document.getElementById('range');
const number = document.getElementById('number');
const color = document.getElementById('color');

function changeNumber() {
    num = +number.value;
    if (typeof (num) === 'number' && (num >= 0) && (num <= 100)) {
        range.value = num;
        color.style.height = num + 'px';
    } else {
        number.value = 0;
        range.value = 0;
        color.style.height = 0 + 'px';
    }
}


function changeRange() {
    number.value = range.value;
    color.style.height = range.value + 'px';
}