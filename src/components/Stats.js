import {June2021Concerns} from "../data/June2021Concerns";
import {July2021Concerns} from "../data/July2021Concerns";

export function returnCount(arr){
    let count = 0;
    arr.forEach((item) =>{
        item.Citations.forEach((citation)=>{
            if(citation.CitationFineTotal !== 0){
                count += 1;
            }
        })
    })
    return count;
}

export function returnCount2(arr){
    let count = 0;
    arr.forEach((item) =>{
        if(item.CitationFineTotal !== 0){
            count += 1;
        }
    })
    return count;
}

export function returnArrThing(arr,filter) {

    return arr.filter((item) => {
        if (item.ConcernType === filter) {
            return item;
        }else{
            return null;
        }
    })
}


export function returnArrThing3(arr) {

    let results = []

    arr.forEach((item) => {
        results.push(item.ConcernType)
    })
    return [...new Set(results)];
}

export function totalFines(arr) {
    let result = 0;
    arr.forEach((item)=>{
        result += item.CitationFineTotal;
    })
    return result;
}


export const JuneNoise = returnArrThing(June2021Concerns,"Noise/Party").concat(returnArrThing(June2021Concerns,"Spa after 10pm"))
export const JuneParking = returnArrThing(June2021Concerns,"Parking")
export const JuneOccupancy = returnArrThing(June2021Concerns,"Over Occupancy")
export const JuneLicense = returnArrThing(June2021Concerns,"No License")
export const JuneCheckIn = returnArrThing(June2021Concerns,"No In-person Check-in")
export const JuneOther = returnArrThing(June2021Concerns,"Delinquent TOT")
export const JuneTotalFines = totalFines(June2021Concerns)

export const JulyNoise = returnArrThing(July2021Concerns,"Noise/Party").concat(returnArrThing(June2021Concerns,"Spa after 10pm"))
export const JulyParking = returnArrThing(July2021Concerns,"Parking")
export const JulyOccupancy = returnArrThing(July2021Concerns,"Over Occupancy")
export const JulyLicense = returnArrThing(July2021Concerns,"No Licence")
export const JulyCheckIn = returnArrThing(July2021Concerns,"No In-person Check-in")
export const JulyAdvertising = returnArrThing(July2021Concerns,"Advertising without a License")
export const JulySign = returnArrThing(July2021Concerns,"No Exterior Sign")
export const JulyTotalFines = totalFines(July2021Concerns)