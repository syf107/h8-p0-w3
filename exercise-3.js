var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){        
        var baris = 0;

        for(var data = 0; data <= input.length-1; data++ ){
            while (baris < input[0].length-1){
                console.log("No. ID: " + input[data][baris]);
                baris++;
                console.log("Nama Lengkap: " + input[data][baris]);
                baris++;
                console.log("TTL: " + input[data][baris] + " " +input[data][baris+1]);
                baris+= 2;
                console.log("Hobi: " + input[data][baris]);
            }
            console.log('');
            baris= 0; 
        }
    }   



(dataHandling(input));