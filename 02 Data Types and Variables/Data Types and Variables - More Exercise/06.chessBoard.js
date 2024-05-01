function chessBoard(size) {
    let isBlack = true;

    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>'); 

        for (let cols = 1; cols <= size; cols++) {
            if (isBlack) {
                isBlack = false;
                console.log('    <span class="black"></span>'); 
            } else {
                isBlack = true;
                console.log('    <span class="white"></span>');
            }
        }

        if (size % 2 === 0) {
            if (isBlack) {
                isBlack = false;
            } else {
                isBlack = true;
            }
        }
        console.log('  </div>'); 
    }
    console.log('</div>');
}