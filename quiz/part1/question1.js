let nama = 'sidik';
let peran = 'Ksatria';

if(peran == '') {
    console.log('Pilih Peranmu untuk memulai game');
} else if(peran == 'Ksatria') {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if(peran == 'Tabib') {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if(peran == 'Penyihir') {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada');
}