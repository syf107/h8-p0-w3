function pasanganTerbesar(num) {
    var angkaTerbesar = [];
    var number = num.toString();

    for (var i = 0; i < number.length; i++){
        for (var j = 1; j < number.length; j++){
            var nomor = Number(number[i]+number[j])            
            angkaTerbesar.push(nomor);
            i++;
        }        

    }

    var urutan = angkaTerbesar.sort(function(value1, value2){ return value2 - value1});
    return angkaTerbesar[0];
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99