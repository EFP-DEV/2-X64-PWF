/*
let start;
let stop;

start = 1;
stop = 5;

while(start <= stop){
    document.write('Nombre : ' + start + '<br>');
    start = start + 1;
}


let start;
let stop;

start = 5;
stop = 1;

while (start >= stop) {
  document.write(start + '<br>');
  start = start - 1;
}

document.write('Blast off!');



let message = 'Hello!';
let count = 3;

while(count > 0){
    document.write(message);
    count = count - 1;
}



let response;
let valid = 'ok';

response = prompt("Type 'ok' to continue:");

while(response != valid){
    response = prompt("Type 'ok' to continue:");
}
document.write('Thanks!');
*/

/*
// exo 6: add to 10
Total is: 0
Total is: 2
Total is: 4
Total is: 6
Total is: 8
Done: 10
let total = 0;
let max = 10;
let step = 2;

while(total < max){
    document.write('Total is: ' + total + '<br>');
    total = total + step;
}
document.write('Done: ' + total);


let start = 2;
let stop = 10;

while(start <= stop){
    document.write('even: ' + start);
    start = start + 2;
}

let question = "Say something (type 'stop' to quit)";
let stop_text = 'stop';
let response;

response = prompt(question);
document.write('You said: ' + response);

while (response != stop_text) {
  response = prompt(question);
  document.write('You said: ' + response + '<br>');
}

document.write('Bye');




let step = 3;

while(step > 0){
    html('Step ' + step + ' remaining...', 'div');
    step = step - 1;
}

p('All steps done!');



function p(content){
    html(content, 'p');
    // document.write('<p>' + content + '</p>');
}

function html(text_content, tag) {
  document.write('<' + tag + '>' + text_content + '</' + tag + '>');
}


let start = 0;
let stop = 100;
let step = 10;

while(start <= stop){
    document.write('<p>Progress: ' + start + '%</p>');
    start = start + step;
}



let secret = Math.floor(Math.random() * 10);
console.log(secret);
let answer;

answer = prompt('Guess the number (1-10)');

while(answer != secret){
    if(answer < secret){
        console.log('too small.');
    }
    else{
        console.log('too big.');

    }
    answer = prompt('Guess the number (1-10)');
}

document.write('Success');
*/

let count = 5;
while(count > 0){
    roll = Math.floor(Math.random() * 9) + 1;
    console.log('Roll ' + roll);
    count = count - 1;
}
