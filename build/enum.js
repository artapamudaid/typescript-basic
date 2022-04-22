"use strict";
//enum
// numeric enum
// enum Months {
//     JAN  = 1,
//     FEB,
//     MAR,
//     APR,
//     MAY,
//     JUN,
//     JUL,
//     AUG,
//     SEP,
//     OCT,
//     NOV,
//     DEC
// }
//String enum
var Months;
(function (Months) {
    Months["JAN"] = "January";
    Months["FEB"] = "February";
    Months["MAR"] = "March";
    Months["APR"] = "April";
    Months["MAY"] = "May";
    Months["JUN"] = "June";
    Months["JUL"] = "July";
    Months["AUG"] = "August";
    Months["SEP"] = "September";
    Months["OCT"] = "October";
    Months["NOV"] = "November";
    Months["DEC"] = "December";
})(Months || (Months = {}));
console.log(Months);
