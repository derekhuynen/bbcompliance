import React, {useEffect, useState} from 'react';
import '../css/displaydata.css'
import PropertyCard from "./PropertyCard";

const sortData = (
    data,
    sortKey,
    sortingDirection
) => {
    data.sort((a, b) => {
        const relevantValueA = a[sortKey];
        const relevantValueB = b[sortKey];

        if (sortKey === "latitude" || sortKey === "longitude" || sortKey === "number") {
            const floatA = parseFloat(relevantValueA);
            const floatB = parseFloat(relevantValueB);

            if (
                sortingDirection === 'UNSORTED' ||
                sortingDirection === 'ASCENDING'
            ) {
                if (floatA < floatB) return -1;
                if (floatA > floatB) return 1;
                return 0;
            } else {
                if (floatA > floatB) return -1;
                if (floatA < floatB) return 1;
                return 0;
            }
        } else {
            if (
                sortingDirection === 'UNSORTED' ||
                sortingDirection === 'ASCENDING'
            ) {
                if (relevantValueA < relevantValueB) return -1;
                if (relevantValueA > relevantValueB) return 1;
                return 0;
            } else {
                if (relevantValueA > relevantValueB) return -1;
                if (relevantValueA < relevantValueB) return 1;
                return 0;
            }
        }
    });
};

const getNextSortingDirection = (sortingDirection) => {
    if (
        sortingDirection === 'UNSORTED' ||
        sortingDirection === 'ASCENDING'
    ) {
        return 'DESCENDING';
    }
    return 'ASCENDING';
};


export default function DisplayData(props) {
    let data = props.data;

    const [sortingDirections, setSortingDirections] = useState({});
    const [showProperty, setShowProperty] = useState(false);
    const [property, setProperty] = useState(data[0]);



    useEffect(() => {
        setSortingDirections(originalDirection());
    }, []);

    const originalDirection = () => {
        const ourSortingDirections = {};
        for (const header of props.headers) {
            ourSortingDirections[header] = "UNSORTED";
        }
        return ourSortingDirections;
    }

    const sortColumn = (sortKey) => {
        sortData(data, sortKey, sortingDirections[sortKey]);
        const newSortingDirections = {...originalDirection(props.headers)};
        newSortingDirections[sortKey] = getNextSortingDirection(
            sortingDirections[sortKey]
        );
        setSortingDirections(newSortingDirections);
    };


    const onclick = (item) => {
        console.log(item);
        setProperty(item);
        setShowProperty(true);

    }

    return (
        <>
            <div className="BigBear">

                <div className="dataContainer">
                    <table className="table">
                        <thead>
                        <tr>
                            {props.headers.map(
                                (header, headerIdx) => (

                                    <th key={headerIdx}
                                        onClick={() => {
                                            sortColumn(header.key);
                                        }}>
                                        <div className="headerDiv">
                                            {header.value}
                                        </div>
                                    </th>
                                )
                            )}
                        </tr>

                        </thead>
                        <tbody>
                        {data.map(
                            (item, itemsIdx) => (
                                <tr key={itemsIdx} onClick={ ()=> onclick(item)}>
                                    {props.headers.map((header, headerIdx) => {
                                            if (header.key === "ReferenceNumber") {
                                                return <td key={headerIdx}>{item[header.key].replace("RAC-2021-", "")}</td>
                                            } else {
                                                return <td key={headerIdx}>{item[header.key]}</td>
                                            }
                                        }
                                    )}
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>
                    {showProperty ? <PropertyCard property={property} show={setShowProperty}/> : console.log(false)}
                </div>
            </div>
        </>
    );
}