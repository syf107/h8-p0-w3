//input "hello world!"

//output

// "!dlrow olleh"

function balikString(hello) {
    var balikHello = hello.split('');
    var hello = "";
    for (var b = balikHello.length-1; b >= 0; b--){
        hello = hello + balikHello[b];
}
    return hello;
}

console.log(balikString('hello world!'));