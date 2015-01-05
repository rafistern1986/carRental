$(document).ready(function () {
    var usersBookingOrderUntilNow = JSON.parse(localStorage.getItem("bookingDetails"));
    if (usersBookingOrderUntilNow[0].cameFromHomePage) {
        $("#status").hide();
        $("#statusIfClientCameFromHomePage").show();
    }

    var bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

    var rentalDays = parseInt(bookingDetails[0].rentalDays);
    var carPrice = parseInt(bookingDetails[0].carPrice);
    var totalCarPrice = parseInt(bookingDetails[0].totalCarPrice);
    var baseRate = rentalDays * carPrice;
    var allKmPrice = totalCarPrice - baseRate;
    allKmPrice = parseInt(allKmPrice);


    $("#choosenCarImg").attr("src", bookingDetails[0].carImg);
    $("#choosenPUlocation").text(bookingDetails[0].picUpLocation);
    $("#choosenPUdateAndTime").text(bookingDetails[0].pickUpDate + " " + bookingDetails[0].pickUpHour);
    $("#choosenReLocation").text(bookingDetails[0].returnLocation);
    $("#choosenReDateAndTime").text(bookingDetails[0].returnDate + " " + bookingDetails[0].returnHour);
    $("#choosenCar").text(bookingDetails[0].carOrderd);
    $("#gear").text(bookingDetails[0].gear);
    $("#milesToDrive").text(bookingDetails[0].milesToDrive);
    $("#totalRentalPrice").text(totalCarPrice);
    $("#dailyPrice").text(carPrice);
    $("#rentlDays").text(rentalDays);
    $("#basePrice").text(baseRate);
    $("#kmIncluded").text(bookingDetails[0].milesToDrive);
    $("#allKmPrice").text(allKmPrice);
    $("#finnalPrice").text(bookingDetails[0].totalCarPrice);
});
