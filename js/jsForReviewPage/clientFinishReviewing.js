$(document).ready(function () {

    $("#finnalBooking").on("click", function () {
        var currentUser = localStorage.getItem("arrayOfCurentUser");
        if (currentUser !== "[]" && currentUser !== null) {

            $(".theWholePage").addClass("opa")
            $("#alertWords").text("Thank you for your Booking");
            $("#popUpAlert").show();
            functionThatPutsTheReservationIntoLocalStorage();/*this function is writen on a diffrent page*/
            setTimeout(function () {
                location.assign("My%20Account.html");
            }, 2000)
        } else {
            $(".theWholePage").addClass("opa")
            $("#alertWords").css("marginTop", "7%");
            $("#alertWords").css("marginLeft", "9%");
            $("#alertWords").text("You need to sign in/up to book a car");
            $("#signInUpInputs").show();
            $("#popUpAlert").show();

        }
    })
    $("#cancelBooking").on("click", function () {
        $(".theWholePage").addClass("opa")
        $(".makeMeBigger").css("width", "41%");
        $("#cancelInputs").css("marginLeft", "2%");
        $("#alertWords").text("");
        $("#cancelInputs").show();
        $("#popUpAlert").show();
    })


    $("#signIn").on("click", function () {
        location.assign("sign%20in%20page.html?coustumerNeedsToLogInForBooking");
    })

    $("#signUp").on("click", function () {
        location.assign("sign%20in%20page.html?coustumerNeedsToSignUpForBooking");
    })
    
    $("#cancelBookingAllTheWay").on("click", function () {
        location.assign("index.html");
    })
    
    $("#continueBooking").on("click", function () {
        $(".theWholePage").removeClass("opa"); $("#cancelInputs").hide();
        $("#popUpAlert").hide();
    })
    
    $("#xToGoBackReviewPage").on("click", function () {
         $("#popUpAlert").hide();$("#cancelInputs").hide();$(".theWholePage").removeClass("opa");
    })

})
