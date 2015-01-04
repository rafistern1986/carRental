$(document).ready(function () {
    if (arrayWithCurrentUser.length > 0) {
        $("#showOnlyWhenLogedIn").show();
        $("#dontShowWhenLogedaiN").hide();
        $("#logIn").hide();
        $("#logOut").show();
        var fName = arrayWithCurrentUser[0].fName;
        var lName = arrayWithCurrentUser[0].lName;
        $("#slideToWelcomeClient").text("Welcome Mr. " + fName + " " + lName);
        $("#slideToWelcomeClient").slideDown(1000);

    } else {
        var fName = "";
    }
    var hour = new Date().getHours();
    var welcomeWords = "";
    if (hour > 4 && hour < 12) {
        welcomeWords = "Good Morning " + fName;
    } else if (hour > 11 && hour < 18) {
        welcomeWords = "Good Afternoon " + fName;
    } else if (hour > 19 && hour < 22) {
        welcomeWords = "Good Evening " + fName;
    } else {
        welcomeWords = "Good Night " + fName;
    };
    $("#welcomeTheClient").text(welcomeWords);

});
