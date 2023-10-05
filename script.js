// Count the puffs
let root = document.getElementById('cigarette');

root.onclick = function() { 
let elem = document.getElementById('count');
    elem.innerHTML = +elem.innerText + 1;
};