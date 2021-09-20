



async function readFile(){
    const stream = require("fs").createReadStream("AllSTRReports.csv")
    const reader = require("readline").createInterface({ input: stream })
    let arr = []


    let promise = new Promise((resolve, reject) => {

        reader.on("line", (row) => {
            arr.push(row.split(",")) })
        resolve(arr)

    });

    return await promise; // wait until the promise resolves (*)


}





readFile().then((i)=>console.log(i))
console.log("HI")
