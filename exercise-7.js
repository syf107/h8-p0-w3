function hitungJumlahKata(kalimat) {
    var panjangKalimat = kalimat.split(" ");
    return panjangKalimat.length;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('     eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  for(var i = 0; i < arr.length; i++){
    if (i <= 0) {
        hasil = hasil + arr[i];
        j++;
    } 
    else if (i > 0) {
        hasil = hasil + (arr[i] -= arr[j]);
        j++;
    } 
    console.log(hasil);
}  
}