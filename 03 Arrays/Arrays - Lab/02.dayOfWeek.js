function dayOfWeek(day) {

    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (day < 1 || day > 7) {
        console.log("Invalid day!")
    } else {
        console.log(daysOfTheWeek[day - 1])
    }
}