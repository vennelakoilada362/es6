"use strict"

let name = 'vennela';

function makeUppercase(word){
    return word.toUpperCase();
}

let template =
`<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>This is a simple template in JS</p>`;

document.getElementById('template').innerHTML = template;