const fs = require('fs');
const fetch = require("node-fetch");
const url = "https://maps.googleapis.com/maps/api/geocode/json?address="
const api = ",+CA&key=AIzaSyAcQdoZxAZpSouEK9vGZOcp3g1gf_9Iy_I"



async function WAIT(allData){
    try {
        const data = fs.readFileSync('addresses.txt', 'UTF-8');
        const lines = data.split(/\r?\n/);

        // print all lines
        for (let i = 1500; i < lines.length; i++) {
            let results = lines[i].split(/  +/g);
            let obj = {
                VRR: "",
                BCA: "",
                Address: "",
                Date: "",
                GoogleAddress: {
                    FullAddress: "",
                    Location: {
                        lat: 0,
                        lng: 0
                    }
                },
                Reports: []
            }

            results.forEach((result, index) => {
                if(result === ""){
                    return
                }
                if (result.includes("VRR")) {
                    obj.VRR = result;
                } else if (result.includes("BCA")) {
                    obj.BCA = result;
                } else if (result.includes("/")) {
                    obj.Date = result;
                }else{
                    obj.Address = result;
                }
            })


            if(obj.address !== ""){
                 await GoogleLookUp(obj).then((result)=>
                 {
                    allData.push(result)
                    }
                )
            }
        }
    } catch (err) {
        console.error(err);
    }
}



async function GoogleLookUp(obj){
    let addressLookUp = obj.Address.replace(/ /g, "+") + ",+Big+Bear"

    return fetch(url + addressLookUp + api + "")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {


            if (myJson.results.length === 0) {
                console.log(obj)
            }else{
                obj.GoogleAddress.FullAddress = myJson.results[0].formatted_address;
                obj.GoogleAddress.Location.lat = myJson.results[0].geometry.location.lat;
                obj.GoogleAddress.Location.lng = myJson.results[0].geometry.location.lng;
            }

            return (obj)
        });
}


const allData = []
WAIT(allData).then(()=>{


    fs.writeFile("output2.json", JSON.stringify(allData), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });


})



