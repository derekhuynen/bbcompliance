const data = require('../data/June2021Concerns');
const data2 = require('../data/July2021Concerns');
let newData = [];


data.June2021Concerns.forEach((item)=>{

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


    check(obj,obj2)

})

data2.July2021Concerns.forEach((item)=>{

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

    check(obj,obj2)

})


function check(obj,obj2){
    let found = false;

    newData.forEach((item)=>{
        if(item.ConcernAddress.toString() === obj.ConcernAddress.toString()){
            item.Citations.push(obj2)
            found = true;
        }
    })
    if(!found){
        newData.push(obj)
    }

}




const fs = require('fs');
fs.writeFileSync('allCitations.json', JSON.stringify(newData));