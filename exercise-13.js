function targetTerdekat(arr) {
    var arrX = [];
    var arrO = [];
    var hasil = [];

    if(arr.indexOf('x') === -1){
        return hasil = 0;
    }
    for( var m = 0; m < arr.length; m++){
        if (arr[m] === 'o'){
            arrO.push(m);
        } else if ( arr[m] === 'x'){
            arrX.push(m);
        }
    }
    
    for(var p = 0; p < arrX.length; p++){
        if (arrX[p] > arrO[0]) {
            hasil[p] = arrX[p] - arrO[0];
        } else {
            hasil[p] = arrO[0] - arrX[p];
        }
}
    return (hasil.sort()[0]);
    
}
    
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'])); // 1
