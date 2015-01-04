$(document).ready(function () {
    var bookingDetailsArr = [];

    function BookingDetails(picUpLocation, returnLocation, pickUpDate, pickUpHour, returnDate, returnHour, carSize, carOrderd, carPrice, rentalDays, totalCarPrice, gear, milesToDrive, cameFromHomePage, carImg) {
        this.picUpLocation = picUpLocation;
        this.returnLocation = returnLocation;
        this.pickUpDate = pickUpDate;
        this.pickUpHour = pickUpHour;
        this.returnDate = returnDate;
        this.returnHour = returnHour;
        this.carSize = carSize;
        this.carOrderd = carOrderd;
        this.carPrice = carPrice;
        this.rentalDays = rentalDays;
        this.totalCarPrice = totalCarPrice;
        this.gear = gear;
        this.milesToDrive = milesToDrive;
        this.cameFromHomePage = cameFromHomePage;
        this.carImg = carImg;
    }

    function createLocalStorageWithBookingProsses(arrayOfBookingDetails) {
        var arrayInString = JSON.stringify(arrayOfBookingDetails);
        localStorage.setItem("bookingDetails", arrayInString);
    }

    $("#continueInput").on("click", function () {

        var bookingProssesFromLS = JSON.parse(localStorage.getItem("bookingDetails"));

        var picUpLocation = bookingProssesFromLS[0].picUpLocation;
        var returnLocation = bookingProssesFromLS[0].returnLocation;
        var pickUpDate = bookingProssesFromLS[0].pickUpDate;
        var pickUpHour = bookingProssesFromLS[0].pickUpHour;
        var returnDate = bookingProssesFromLS[0].returnDate;
        var returnHour = bookingProssesFromLS[0].returnHour;
        var carSize = bookingProssesFromLS[0].carSize;
        var carOrderd = bookingProssesFromLS[0].carOrderd;
        var carPrice = bookingProssesFromLS[0].carPrice;
        var rentalDays = $("#rentelDaysAmount").text();
        var totalCarPrice = $("#calculatetPrice").text();
        var gear = bookingProssesFromLS[0].gear;
        var milesToDrive = $("#amountOfKmIncluded").text();
        var cameFromHomePage = bookingProssesFromLS[0].cameFromHomePage;
        var carImg = bookingProssesFromLS[0].carImg;

        var bookingObj = new BookingDetails(picUpLocation, returnLocation, pickUpDate, pickUpHour, returnDate, returnHour, carSize, carOrderd, carPrice, rentalDays, totalCarPrice, gear, milesToDrive, cameFromHomePage, carImg);
        bookingDetailsArr.push(bookingObj);
        createLocalStorageWithBookingProsses(bookingDetailsArr);
        location.assign("reviewAndBook.html");
    })
  

})
