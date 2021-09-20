const June2021 = require('../data/JS/June2021');
const March2021 = require('../data/JS/March2021');
const July2021 = require('../data/JS/July2021');
const April2021 = require('../data/JS/April2021');
const May2021 = require('../data/JS/May2021');
const August2021 = require('../data/JS/August2021');
const February2021 = require('../data/JS/February2021');


let newData = [];

const months = [June2021.June2021, March2021.March2021, July2021.July2021, April2021.April2021, May2021.May2021, August2021.August2021, February2021.February2021]









months.forEach((month,index) => {

        month.forEach((item)=> {

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