function flightSchedule(dataFly) {
    let flyInfo = {}
    let firstList = dataFly.shift()
    let secondList = dataFly.shift()
    let thirtList = dataFly.shift()
    firstList.forEach(flyLine => {
        [flyNumber, destination] = flyLine.split(" ");
        flyInfo[flyNumber] = {
            Destination: destination,
            Status: "Ready to fly"
        }
    })
    secondList.forEach(secondInfo => {
        [flyNumber, Status] = secondInfo.split(" ")
        if (flyInfo[flyNumber] !== undefined) {
            flyInfo[flyNumber].Status = Status
        }
    })
    for (let fly in flyInfo) {
        if (flyInfo[fly].Status == thirtList) {
            console.log(flyInfo[fly])
        }
    };
}
