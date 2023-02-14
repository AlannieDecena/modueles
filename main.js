document.getElementById("demo").className = "red";

console.log('console message')

function helloWorld(){
    alert('Hello World!');
    console.info(document.getElementById('helloWorldButton'))
    document.getElementById("helloWorldButton").style.backgroundColor = 'black';
    document.getElementById("helloWorldButton").style.color = 'white';
}

function changeParagraph() {
document.getElementById('demo').innerHTML = 'New  <strong>paragraph</strong> text'
}
