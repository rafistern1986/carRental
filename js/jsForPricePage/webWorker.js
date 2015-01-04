function checkDistens(routeInKm) {
    var totelRoute = routeInKm * 2;
    var str = totelRoute.toString();
    str = str.substring(0, str.length - 3)
    postMessage(str);
}
this.onmessage = function (event) {
    /*
    ASAF,
    i did not make the setInterval over here since i wanted the music and the loading to work even when the webworker does not work. (i could have done a IF but had no patience for it)
    */
    postMessage(checkDistens(event.data));
};
