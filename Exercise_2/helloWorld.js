console.log('hello world')


function SayHello(){
console.log('Hello again')

}

SayHello()

function sum(a, b) {
    let result = a+b;
    return result;
}

console.log(sum(88, 44))

console.log(sum(123, 456))

SayHello()

var Sentiment = require('sentiment');

function analyzeSentence(sentence) {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(sentence);
    return result.score;
}

console.log('Your score is' + analyzeSentence('I love chocos')); 

function lolliPop (a, b) {
    let result = a*b;
    return result
}
console.log(2,3);

function monitorCount(rows, columns) {
    return rows * columns;
    }
    const numOfMonitors = monitorCount(5, 4);
    console.log(numOfMonitors)

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
greeting('Zoro')