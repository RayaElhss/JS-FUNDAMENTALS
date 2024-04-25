function englishName(num) {

    let absNum = Math.abs(num);
    let lastNum = num % 10;
    let englishName = "";


    if (lastNum == '1') {
        englishName = 'one';
    } else if (lastNum == '2') {
        englishName = 'two';
    } else if (lastNum == '3') {
        englishName = 'three';
    } else if (lastNum == '4') {
        englishName = 'four';
    } else if (lastNum == '5') {
        englishName = 'five';
    } else if (lastNum == '6') {
        englishName = 'six';
    } else if (lastNum == '7') {
        englishName = 'seven';
    } else if (lastNum == '8') {
        englishName = 'eight';
    } else if (lastNum == '9') {
        englishName = 'nine';
    } else {
        englishName = 'zero';
    }

    console.log(englishName);
}