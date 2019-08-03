function palindrome(kata) {
    var balik = ''

    for(var ak = kata.length; ak > 0; ak--){
        balik = balik += kata[ak-1];
    } 
    if (kata === balik) {
        return true;
    } else {
        return false;
    }
}

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false