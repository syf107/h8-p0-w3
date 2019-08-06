function groupAnimals(animals) {
    var arrayBinatang = [];
    var a = 0;
    animals.sort();

    for(var m = 0; m < animals.length; m++){
   
        if (arrayBinatang.length === 0){
        arrayBinatang.push([animals[m]]);
   
        } else if (arrayBinatang[a][0][0] === animals[m][0]){
            arrayBinatang[a].push(animals[m]);
        
        } else {
            arrayBinatang.push([animals[m]]);
            a++;

        }
}
    return arrayBinatang;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]