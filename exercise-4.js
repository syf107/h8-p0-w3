var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
    var tanggal = input[3].split("/");
    var tanggal2 =[Number(tanggal[0]), Number(tanggal[1]), Number(tanggal[2])];
    
    switch(Number(tanggal[1])){
        case 1:
            console.log('Januari');
            break;
        case 2:
            console.log('Februari');
            break;
        case 3:
            console.log('Maret');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('Mei');
            break;
        case 6:
            console.log('Juni');
            break;
        case 7:
            console.log('Juli');
            break;
        case 8:
            console.log('Agustus');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('Oktober');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('Desember');
            break;
        default:
            console.log("Bukan bulan 1-12");
            break;
        }
    
        tanggal2.sort();
        console.log(tanggal2);
        var tanggal3 =tanggal.join("-");
        console.log(tanggal3);
        var input1 = input[1].substr(0, 15);
        console.log(input1);

}


dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */