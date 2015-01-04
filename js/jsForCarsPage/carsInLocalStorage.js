$(document).ready(function () {
    /*this first thing has nothing todo with cars in local storage
    its to change the status bar in case user comes from home page
    */
    if (localStorage.getItem("bookingDetails") !== null) {
        var bookingDetailsArr = JSON.parse(localStorage.getItem("bookingDetails"));
        if (bookingDetailsArr !== undefined) {
            $("#status").hide();
            $("#statusIfClientCameFromHomePage").show();
        }
    }
    if (localStorage.getItem("allCarsMaxDetails") == null) {
        function createLocalStorageWithCars(arrayWithCars) {
            var arrayInString = JSON.stringify(arrayWithCars);
            localStorage.setItem("allCarsMaxDetails", arrayInString);
        }
        /*arrays with all cars*/
        var arrayOfAllCarsMaxDetails = [];

        function CarDetails(carClass, name, model, carNumber, year, gear, price, imgUrl) {
            this.carClass = carClass;
            this.name = name;
            this.model = model;
            this.carNumber = carNumber;
            this.year = year;
            this.gear = gear;
            this.price = price;
            this.imgUrl = imgUrl;
        }

        function putCarObjIntoArr(carObj) {
            arrayOfAllCarsMaxDetails.push(carObj);
        }
        /*MINI*/
        /*mini  audi a1*/
        var audiA1_Obj = new CarDetails("Mini", "Audi", "A1", "3223231", 2014, "manual", 19, "https://lh6.googleusercontent.com/L-L5aSAbgxb6JdMGe9hPFSo7nC4ez0DAOn0qzj0PaS-JMYlDQAaQ2izmpe1IVO9qFXdIDReUZg8=w1256-h579");
        putCarObjIntoArr(audiA1_Obj);
        /*mini  smart*/
        var smartPassion_Obj = new CarDetails("Mini", "Smart", "passion", "7542231", 2015, "automatic", 12, "https://lh6.googleusercontent.com/WGSWtdooljijswM3PMLogkC9_1Ap6INYaGQl0k38EUBP4RKo_lY3Uj8ayIWqmeWW8cD9QW_uIog=w1256-h579");
        putCarObjIntoArr(smartPassion_Obj);
        /*mini mini cooper 16*/
        var miniCooper_Obj = new CarDetails("Mini", "Mini", "Cooper 16", "7536386", 2014, "manual", 18, "https://lh3.googleusercontent.com/1ghWXttlQR8inFv5E_8fWk2WoUjTz8G-DO0I20h9LFoPq73Lnshnheh2R4AIcIqCfBJCkzlhlBQ=w1256-h579");
        putCarObjIntoArr(miniCooper_Obj);
        /*mini toyota yaris*/
        var toyotaYaris_Obj = new CarDetails("Mini", "Toyota", "Yaris", "7575376", 2014, "automatic", 16, "https://lh5.googleusercontent.com/89LVh5jrR1MO-lT6digXxuNCk_0O4UO3WQ7_4Ce53nYm9bIayqguOIKrBKaMO_B5RenoDvq8qOs=w1256-h579");
        putCarObjIntoArr(toyotaYaris_Obj);

        /*FULL SIZE*/
        /*full size toyota camery*/
        var toyotaCamery_Obj = new CarDetails("FullSize", "Toyota", "Camery", "5333164", 2014, "automatic", 30, "https://lh3.googleusercontent.com/zkG8DxCDtU4S54UExgXwTtSIeZTuC4M0gMK-50pRqKiq2hG92vwEFwRrDsv0Bff9iCwWeCBy60A=w1256-h579");
        putCarObjIntoArr(toyotaCamery_Obj);
        /*full size honda acord*/
        var hondaAccord_Obj = new CarDetails("FullSize", "Honda", "Accord", "3534133", 2014, "automatic", 30, "https://lh3.googleusercontent.com/7bmpPWRjt335JX9GyxuSpvW7P1l7FnAJAmezo8YgZ7ZpVafLhnidCcU0j32J10kJaAdjshJ7VYo=w1256-h579");
        putCarObjIntoArr(hondaAccord_Obj);
        /*full size mazda 6*/
        var mazda6_Obj = new CarDetails("FullSize", "Mazda", "6", "1566163", 2014, "manual", 29, "https://lh6.googleusercontent.com/2KOW7fxkOi2Kc4wK5zGStA8AFSNzoqzm4ww94-uO3gMhm1kqCTFPZmSZod7u2gdMCUQrT_FqKKc=w1256-h579");
        putCarObjIntoArr(mazda6_Obj);
        /*full size ford fusion*/
        var fordFusion_Obj = new CarDetails("FullSize", "Ford", "Fusion", "3534154", 2015, "manual", 30, "https://lh6.googleusercontent.com/F2l4vP2lWmzmz0lpTcq3ReNlmVJKxyGOmDwSU3M5k0sdSPrrfuvHJrcWBO8vSxf_MyN7pvJ4qSE=w1256-h579");
        putCarObjIntoArr(fordFusion_Obj);

        /*SUV*/
        /*suv  acrua*/
        var acuraMdx_Obj = new CarDetails("SUV", "Acura", "MDX", "435332", 2015, "automatic", 29, "https://lh4.googleusercontent.com/WgOcgo09guz_4a0wm-AlaczdXXXN7UgEe81fXHw9JpMXwNxcwVPTJP3rCBBWlpjC1h3ZK4jdyQQ=w1256-h579");
        putCarObjIntoArr(acuraMdx_Obj);
        /*suv chevrolet*/
        var chevroletSuburban_Obj = new CarDetails("SUV", "Chevrolet", "Suburban", "1242312", 2014, "automatic", 29, "https://lh4.googleusercontent.com/qmASTwF3BbIGtkmwckFhqz15_n25q6LFD25wboTd3KIFLEL6yEakH9G_OXCAt9u5jrCkBf03NtQ=w1256-h579");
        putCarObjIntoArr(chevroletSuburban_Obj);
        /*suv madzda*/
        var mazdaCt5_Obj = new CarDetails("SUV", "Mazda", "CX5", "7735484", 2015, "automatic", 27, "https://lh6.googleusercontent.com/0UQFfpqqeX_rH8TXfKryep6U_DkxH9UpLE28762wpXF7t7bORO1hNgSFKxbnu6i-AOizTYAO8bQ=w1256-h579");
        putCarObjIntoArr(mazdaCt5_Obj);
        /*suv jaguar*/
        var jaguarCX17_Obj = new CarDetails("SUV", "Jaguar", "CX17", "1533183", 2014, "manual", 49, "https://lh3.googleusercontent.com/DCLL02Kj5Pz-6aWHJSIsdnD7HP7nGE7cG4prTsP3TntWWlR_d8txqOquq9hWdv5TKqHt7MIPzVs=w1256-h579");
        putCarObjIntoArr(jaguarCX17_Obj);

        /*LUXARY SIZE*/
        /*Luxary mercedes benz s 600*/
        var mbS600_Obj = new CarDetails("Luxury", "Mercedes Benz", "S600", "5323424", 2015, "automatic", 99, "https://lh3.googleusercontent.com/zkG8DxCDtU4S54UExgXwTtSIeZTuC4M0gMK-50pRqKiq2hG92vwEFwRrDsv0Bff9iCwWeCBy60A=w1256-h579");
        putCarObjIntoArr(mbS600_Obj);
        /*Luxary lexus lh600*/
        var lexusLh600_Obj = new CarDetails("Luxury", "Lexus", "lh600", "5323164", 2014, "automatic", 89, "https://lh6.googleusercontent.com/GCUtZmk2WAZPqAjmhxBjYlS2lLDqJXyhszVoUoQjY8NxA8NLBlF-xvzMMU9npJQzAfnpo4YkONY=w1256-h579");
        putCarObjIntoArr(lexusLh600_Obj);
        /*Luxary BMW 7*/
        var bmw700l_Obj = new CarDetails("Luxury", "BMW", "700l", "2323264", 2014, "automatic", 95, "https://lh6.googleusercontent.com/shM-TcaBmGIVRaHkAVfmxujIW9Ymu0icXTO93mvr7OSoi_IMi09qArPMwJ4SEdXaT8jRYH8oGQg=w1256-h579");
        putCarObjIntoArr(bmw700l_Obj);
        /*Luxary audi a8l*/
        var audiA8l_Obj = new CarDetails("Luxury", "Audi", "A9l", "7343164", 2015, "automatic", 109, "https://lh4.googleusercontent.com/Nkikkgv9qsZCbJoIKbDZzwVljOheE4SyteVL8WohcDel6R-Uh4TEI5ptbzokBi9X2FURxoENoQc=w1256-h579");
        putCarObjIntoArr(audiA8l_Obj);

        createLocalStorageWithCars(arrayOfAllCarsMaxDetails);

    }
});
