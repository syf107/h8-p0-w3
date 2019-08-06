function targetTerdekat(arr) {
    var arrX = [];
    var arrO = [];
    var hasil = 0;

    for( var m = 0; m < arr.length; m++){
        if (arr[m] === 'o'){
            arrO.push(m);
        } else if ( arr[m] === 'x'){
            arrX.push(m);
        }
    }
    
    if (arrX[0] > arrO[0]) {
        hasil = arrX[0] - arrO[0];
    } else if (arrX[0] < arrO[0]){
        hasil = arrO[0] - arrX[arrX.length-1];
    } else {
        hasil = 0;
    }
    return hasil;
}
    
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2