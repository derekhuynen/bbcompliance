import {April2021, AprilHeaders} from '../data/JS/April2021'
import {August2021, AugustHeaders} from "../data/JS/August2021";
import {February2021, FebruaryHeaders} from "../data/JS/February2021";
import {July2021, JulyHeaders} from "../data/JS/July2021";
import {March2021, MarchHeaders} from "../data/JS/March2021";
import {May2021, MayHeaders} from "../data/JS/May2021";
import {June2021, JuneHeaders} from "../data/JS/June2021";

export const MonthArray = [
    {arr: February2021, headers: FebruaryHeaders},
    {arr: March2021, headers: MarchHeaders},
    {arr: April2021, headers: AprilHeaders},
    {arr: May2021, headers: MayHeaders},
    {arr: June2021, headers: JuneHeaders},
    {arr: July2021, headers: JulyHeaders},
    {arr: August2021, headers: AugustHeaders}
]

export const AllData = combine()

function combine() {
    const temp = MonthArray.map((month) => {
        return month.arr
    })

    return [].concat.apply([], temp);
}

export const UniqueHeaders = [
    {key: "All", value: "All"},
    {key: "Noise/Party", value: "Noise/Party"}
    , {key: "Parking", value: "Parking"}
    , {key: "No License", value: "No License"}
    , {key: "Over Occupancy", value: "Over Occupancy"}
    , {key: "No In-person Check-in", value: "No In-person Check-in"}
    , {key: "Spa after 10pm", value: "Spa after 10pm"}
    , {key: "Delinquent TOT", value: "Delinquent TOT"}
    , {key: "Trespassing", value: "Trespassing"}
    , {key: "Noise/Party/spa", value: "Noise/Party/spa"}
    , {key: "No Exterior Sign", value: "No Exterior Sign"}
    , {key: "Advertising without a License", value: "Advertising without a License"}
    , {key: "Advertising w/o a License", value: "Advertising w/o a License"}
]

export function returnCount(arr) {
    let count = 0;
    arr.forEach((item) => {
        item.Citations.forEach((citation) => {
            if (citation.CitationFineTotal !== 0) {
                count += 1;
            }
        })
    })
    return count;
}

export function returnCount2(arr) {
    let count = 0;
    arr.forEach((item) => {
        if (item.CitationFineTotal !== 0) {
            count += 1;
        }
    })
    return count;
}

export function filterArray(arr, filter) {

    return arr.filter((item) => {
        if (item.ConcernType === filter) {
            return item;
        } else {
            return null;
        }
    })
}

export function filterArrayCitation(arr, filter) {

    return arr.filter((item) => {
        if ((item.ConcernType === filter) && (item.CitationFineTotal > 0)) {
            return item;
        } else {
            return null;
        }
    })
}

export function returnCitations(arr) {
    return arr.filter((item) => {
        if (item.CitationFineTotal > 0) {
            return item;
        } else {
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
    arr.forEach((item) => {
        result += item.CitationFineTotal;
    })
    return result;
}


export function allInOne(arr, headers) {
    let results = []

    headers.forEach((header) => {
        results.push({key: header, values: []})
    })

    arr.forEach((item) => {
        // eslint-disable-next-line array-callback-return
        results.some((result) => {
            if (result.key === item.ConcernType) {
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






