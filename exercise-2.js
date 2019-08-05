//input "hello world!"

//output

// "!dlrow olleh"
var balikHello = hello.split('');
var hello = "";

function balikString(hello) {
    for (var b = balikHello.length-1; b >= 0; b--){
        hello = hello + balikHello[b];
}
    return hello;
}

console.log(balikString('hello world!'));