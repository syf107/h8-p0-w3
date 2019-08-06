function tentukanDeretAritmatika(arr) {
    var aritAwal = arr[1] - arr[0];
    var aritAngka = 0;
    for (i = arr.length-1; i > 0; i--){
        aritAngka = aritAngka + (arr[i]-arr[i-1]);
        if (aritAwal !== aritAngka) {
            return false;
        }
    aritAngka = 0;   
    }
    return true;
}

  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 14]));
  console.log(tentukanDeretAritmatika([2, 5, 6, 12, 15]));
  
