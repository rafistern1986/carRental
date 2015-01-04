function functionThatPutsTheReservationIntoLocalStorage() {
    var arrayWithAllReservationt = [];

    if (localStorage.getItem("allResevations") !== null) {
        var oldReservationt = JSON.parse(localStorage.getItem("allResevations"));
        for (var i = 0; i < oldReservationt.length; i++) {
            arrayWithAllReservationt.push(oldReservationt[i]);
        }
    }

    var bookingDetailsArr = JSON.parse(localStorage.getItem("bookingDetails"));
    var curentUserArr = JSON.parse(localStorage.getItem("arrayOfCurentUser"));

    var userName = curentUserArr[0].usernameChoosen;
    var pickUpLocation = bookingDetailsArr[0].picUpLocation;
    var pickUpDate = bookingDetailsArr[0].pickUpDate;
    var car = bookingDetailsArr[0].carOrderd;
    var price = bookingDetailsArr[0].totalCarPrice;

    var rentalResevation = {
        userName: userName,
        pickUpLocation: pickUpLocation,
        pickUpDate: pickUpDate,
        car: car,
        price: price,
    };
    arrayWithAllReservationt.push(rentalResevation);

    var arrayInString = JSON.stringify(arrayWithAllReservationt);
    localStorage.setItem("allResevations", arrayInString);
}
