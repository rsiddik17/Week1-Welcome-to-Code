let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if(tanggal < 1 || tanggal > 31) {
    console.log("Tanggal tidak valid, masukkan angka antara 1- 31.");
} else if(bulan < 1 || bulan > 12) {
    console.log("Bulan tidak valid, masukkan angka antara 1 - 12."); 
} else if(tahun < 1900 || tahun > 2200) {
    console.log("Tahun tidak valid, masukkan angka antara 1900 - 2200.");
} else {
    switch(bulan) {
        case 1:
            bulan = "januari";
            break;
        case 2:
            bulan = "februari";
            break;
        case 3:
            bulan = "maret";
            break;
        case 4:
            bulan = "april";
            break;
        case 5:
            bulan = "mei";
            break;
        case 6:
            bulan = "juni";
            break;
        case 7:
            bulan = "juli";
            break;
        case 8:
            bulan = "agustus";
            break;
        case 9:
            bulan = "september";
            break;
        case 10:
            bulan = "oktober";
            break;
        case 11:
            bulan = "november";
            break;
        case 12:
            bulan = "desember";
            break;
        default:
            bulan = "bulan tidak valid";
    }
    console.log(`${tanggal} ${bulan} ${tahun}`);
}