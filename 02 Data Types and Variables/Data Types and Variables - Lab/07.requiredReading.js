function requiredReading(numOfPages, pagesPerHr, days){
    let totalTime = numOfPages / pagesPerHr;
    let requiredHrs = totalTime / days;

    console.log(requiredHrs)

}