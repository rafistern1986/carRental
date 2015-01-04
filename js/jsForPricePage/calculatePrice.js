$(document).ready(function () {
    var usersBookingOrderUntilNow = JSON.parse(localStorage.getItem("bookingDetails"));
    if (usersBookingOrderUntilNow[0].cameFromHomePage) {
        $("#status").hide();
        $("#statusIfClientCameFromHomePage").show();
    }
    var pricePerDay = usersBookingOrderUntilNow[0].carPrice;
    var pickUpDate = usersBookingOrderUntilNow[0].pickUpDate;
    var returnDate = usersBookingOrderUntilNow[0].returnDate;
    var oneDay = 24 * 60 * 60 * 1000;
    var firstDate = new Date(pickUpDate);
    var secondDate = new Date(returnDate);
    var daysOfRental = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    var totelRentalPrice = daysOfRental * pricePerDay;
    $("#calculatetPrice").text(totelRentalPrice);
    $("#rentelDaysAmount").text(daysOfRental);
    $("#rentalPricePerDay").text(pricePerDay);

})
