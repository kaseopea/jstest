var updateZipCode = function(newZip, country) {
    console.log(this);
    console.log(newZip + " " + country);
};

var zipCode = {
    zip: "11800"
};

divider();

updateZipCode("25000", "US");

divider();

updateZipCode.call(zipCode, "25000", "US");

divider();

updateZipCode.apply(zipCode, ["3200", "RU"]);

divider();