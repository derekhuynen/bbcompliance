const June = require('../data/JS/June2021');
const March = require('../data/JS/March2021');
const July = require('../data/JS/July2021');
const April = require('../data/JS/April2021');
const May = require('../data/JS/May2021');
const August = require('../data/JS/August2021');
const February = require('../data/JS/February2021');


let newData = [];

const months = [June, March, July, April, May, August, February]



months.forEach((item) => {

    let obj2 = {
        ReferenceNumber: item.ReferenceNumber,
        DateEntered: item.DateEntered,
        Disposition: item.Disposition,
        ConcernType: item.ConcernType,
        ConcernDescription: item.ConcernDescription,
        CitationFineTotal: item.CitationFineTotal
    }

    let obj = {
        ConcernAddress: item.ConcernAddress,
        Citations: [obj2]
    }


    check(obj, obj2)

})


function check(obj, obj2) {
    let found = false;

    newData.forEach((item) => {
        if (item.ConcernAddress.toString() === obj.ConcernAddress.toString()) {
            item.Citations.push(obj2)
            found = true;
        }
    })
    if (!found) {
        newData.push(obj)
    }

}


const fs = require('fs');
fs.writeFileSync('allCitations.json', JSON.stringify(newData));