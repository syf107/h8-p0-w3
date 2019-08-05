function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var hasilBagi = 0;
    var hasil = 0;
    for (var i = arr.length-1; i > 0; i--){
        hasilBagi= arr[1]/arr[0];
        hasil = arr[i] /= arr[i-1];
        if (hasilBagi !== hasil){
            return false;
        } 
}
    return true;
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
