//initialing all elements
let click = document.querySelector('#btn');
function getcolor(){
    // let randomnum = Math.floor(Math.random() * 16777215);
    // let randomcolor = '#'+ randomnum.toString(16);
    let randomnum = Math.floor(Math.random() * 100000);
    let randomcolor = '#'+ randomnum.toString(16);
    document.body.style.backgroundColor = randomcolor;
    document.querySelector('#color-code').innerText = randomcolor;
}
 click.addEventListener(
    'click',
    getcolor
 );

 