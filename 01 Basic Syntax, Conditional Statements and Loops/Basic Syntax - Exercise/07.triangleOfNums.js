function triangleOfNumbers(n) {
    for (let ver = 1; ver <= n; ver++) {
        let buff = "";
        for (let hor = 0; hor < ver; hor++) {
            buff += ver + " ";
        }
        console.log(buff)
    }
}