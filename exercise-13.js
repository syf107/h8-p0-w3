function targetTerdekat(arr) {
    var spasiO = 0;
    var j = 0;
    

    for (var i = 0; i < arr.length; i++){
        if (arr[i] == ' ' && arr[i-j] == 'o') {
            spasiO = spasiO + 1;
            j++;
        } else if (arr[i] == ' ') {
            spasiO+= 1;
        } else if (arr[i] == 'x'){
            break;
        }

    }
    return spasiO;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2