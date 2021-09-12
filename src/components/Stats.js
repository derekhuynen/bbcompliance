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

export function filterArray(arr, filter) {

    return arr.filter((item) => {
        if (item.ConcernType === filter) {
            return item;
        }else{
            return null;
        }
    })
}


export function filterArrayCitation(arr, filter) {

    return arr.filter((item) => {
        if ((item.ConcernType === filter)&&(item.CitationFineTotal > 0)) {
            return item;
        }else{
            return null;
        }
    })
}


export function returnCitations(arr) {

    return arr.filter((item) => {
        if (item.CitationFineTotal > 0) {
            return item;
        }else{
            return null;
        }
    })
}


export function returnHeaders(arr) {

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


export function allInOne(arr,headers){
    let results = []

    headers.forEach((header)=>{
        results.push( {key: header, values: []})
        })

    arr.forEach((item)=> {
        // eslint-disable-next-line array-callback-return
        results.some((result)=>{
            if(result.key === item.ConcernType){
                result.values.push(item);
                return true
            }
        })
    })

    return results
}

export function returnRightArray(header, arr){
    return
}

export const JuneNoise = filterArray(June2021Concerns,"Noise/Party").concat(filterArray(June2021Concerns,"Spa after 10pm"))
export const JuneParking = filterArray(June2021Concerns,"Parking")
export const JuneOccupancy = filterArray(June2021Concerns,"Over Occupancy")
export const JuneLicense = filterArray(June2021Concerns,"No License")
export const JuneCheckIn = filterArray(June2021Concerns,"No In-person Check-in")
export const JuneOther = filterArray(June2021Concerns,"Delinquent TOT")
export const JuneTotalFines = totalFines(June2021Concerns)

export const JulyNoise = filterArray(July2021Concerns,"Noise/Party").concat(filterArray(June2021Concerns,"Spa after 10pm"))
export const JulyParking = filterArray(July2021Concerns,"Parking")
export const JulyOccupancy = filterArray(July2021Concerns,"Over Occupancy")
export const JulyLicense = filterArray(July2021Concerns,"No Licence")
export const JulyCheckIn = filterArray(July2021Concerns,"No In-person Check-in")
export const JulyAdvertising = filterArray(July2021Concerns,"Advertising without a License")
export const JulySign = filterArray(July2021Concerns,"No Exterior Sign")
export const JulyTotalFines = totalFines(July2021Concerns)