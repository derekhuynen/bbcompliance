import React, {useEffect, useState} from 'react';
import '../css/displaydata2.css'
import PropertyCard from "./PropertyCard";
import {currencyFormat} from "./Stats";

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

const filterArr = (arr, property) => {
    return arr.filter((item) =>
        (item !== property)
    )
}


export default function DisplayData(props) {
    let data = props.data;

    const [sortingDirections, setSortingDirections] = useState({});
    const [showProperty, setShowProperty] = useState(false);
    const [properties, setProperties] = useState([]);


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

        if (properties.includes(item)) {
            setProperties(filterArr(properties, item))
        } else {
            properties.push(item)
        }

        setShowProperty(!showProperty);
    }

    return (
        <div className="BigBear">
            <div className="dataContainer">
                <div className={"headers"}>
                    {props.headers.map(
                        (header, headerIdx) => (

                            <div className={header.value} key={headerIdx}
                                 onClick={() => {
                                     sortColumn(header.key);
                                 }}>
                                <div className="headerDiv">
                                    {header.value}
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className={"data"}>
                    {data.map(
                        (item, itemsIdx) => (
                            <div>
                                <div className={"row"} key={itemsIdx} onClick={() => onclick(item)}>
                                    {props.headers.map((header, headerIdx) => {
                                            if (header.key === "CitationFineTotal") {
                                                return <div className={header.value}
                                                            key={headerIdx}>{currencyFormat(item[header.key], 0)}</div>
                                            } else {
                                                return <div className={header.value}
                                                            key={headerIdx}>{item[header.key]}</div>
                                            }

                                        }
                                    )}
                                </div>
                                {properties.includes(item) ?
                                    <PropertyCard property={item} show={onclick}/> : null}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}