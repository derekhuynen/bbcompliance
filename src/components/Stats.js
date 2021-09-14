import {June2021Concerns} from "../data/June2021Concerns";
import {July2021Concerns} from "../data/July2021Concerns";

export const allData = June2021Concerns.concat(July2021Concerns)

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

export function currencyFormat(num, position) {
        return '$' + num.toFixed(position).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}



export const JuneTotalFines = totalFines(June2021Concerns)


export const JulyTotalFines = totalFines(July2021Concerns)