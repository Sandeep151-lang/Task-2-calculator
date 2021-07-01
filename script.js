
function getclick(i) {
    var x = i;

    if (x === 'c') {
        document.getElementById('screen').value = " ";
    } else if (x === '=') {
        document.getElementById('screen').value = eval(document.getElementById('screen').value)
    } else {
        document.getElementById('screen').value += i;
    }
}
