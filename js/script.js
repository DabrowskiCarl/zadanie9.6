const list = document.getElementById('list');
const add = document.getElementById('addElem');
add.addEventListener('click', function() {
    const element = document.createElement('li');
    const num = list.getElementsByTagName('li');
    element.innerHTML = ('item ' + num.length);
    list.appendChild(element);
});

