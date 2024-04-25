function solve(people, typeOfpeople, dayOfWeek) {
    let price = 0;

    switch (dayOfWeek) {
        case "Friday":
            switch (typeOfpeople) {
                case "Students":
                    price = 8.45;
                    break;
                case "Business":
                    price = 10.9;
                    break;
                case "Regular":
                    price = 15.0;
                    break;
            }
        break;
        case "Saturday":
            switch (typeOfpeople) {
                case "Students":
                    price = 9.8;
                    break;
                case "Business":
                    price = 15.6;
                    break;
                case "Regular":
                    price = 20.0;
                    break;
            }
        break;
        case "Sunday":
            switch (typeOfpeople) {
                case "Students":
                    price = 10.46;
                    break;
                case "Business":
                    price = 16;
                    break;
                case "Regular":
                    price = 22.5;
                    break;
            }
        break;
    }

    let totalPrice = people * price;

    if (typeOfpeople === "Students" && people >= 30) {
        totalPrice = totalPrice * 0.85;
    } else if (typeOfpeople === "Business" && people >= 100) {
        totalPrice = totalPrice - 10 * price;
    } else if (typeOfpeople === "Regular" && people >= 10 && people <= 20) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}