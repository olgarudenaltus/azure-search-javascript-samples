import React from 'react';
import { List, Chip } from '@material-ui/core';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';
import styled from 'styled-components';
import "./Facets.css";

export default function Facets(props) {

// T: b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc
    const driveIDs = [
        {
            driveName:"W",
            driveID:"b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk"
        },
        {
            driveName:"Y",
            driveID:"b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"
        },
        {
            driveName:"T",
            driveID:"b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"
        }
    ]

    function mapFacetName(facetName) {
        facetName = facetName==="metadata_spo_item_extension"?"File extension":facetName
        const capitalizeFirstLetter = (string) =>
            string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';
        facetName = facetName.trim();
        facetName = capitalizeFirstLetter(facetName);

        facetName = facetName.replace('_', ' ');
        return facetName;
    }

    function addFilter(name, value) {
        
        const newFilters = props.filters.concat({ field: name, value: value });
        props.setFilters(newFilters);
    }

    function removeFilter(filter) {      
        const newFilters = props.filters.filter((item) => item.value !== filter.value);
        props.setFilters(newFilters);
    }

    // add drive filter
    function formatDrive(driveName){
        if (driveName=="Y"){
            return "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"
        }
        else if (driveName=="W"){
            return "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk"
        }
        else if (driveName=="T"){
            return "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"
        }
    }


    function addFilterValue(name,value){
        console.log("Adding")
        console.log(name,value)
        console.log(props.checkedFilters)
        if (value=="Y"){
            const newFilters = props.checkedFilters.concat("b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_");
            props.setCheckedFilters(newFilters);
        }
        else if (value=="W"){
            const newFilters = props.checkedFilters.concat("b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk");
            props.setCheckedFilters(newFilters);
        }
        else if (value=="T"){
            const newFilters = props.checkedFilters.concat("b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc");
            props.setCheckedFilters(newFilters);
        }
        else {
            const newFilters = props.checkedFilters.concat(value);
            props.setCheckedFilters(newFilters);
        }
        console.log(props.checkedFilters)
        // const newFilters = props.checkedFilters.concat(value);
        // console.log(newFilters)
        // props.setCheckedFilters(newFilters)
        // console.log(props.checkedFilters)
        // props.checkedFilters
        // props.checkedFilters.terms = Object.assign(props.checkedFilters.terms,value)
        // props.checkedFilters =  props.checkedFilters +"+"+value; 
        // const newCheckedFilters = props.checkedFilters +"+"+value;
        // props.setCheckedFilters(newCheckedFilters)
    }

    function removeFilterValue(name,value){
        console.log("Removing")
        console.log(name,value)
        console.log(props.checkedFilters)

        if (value=="Y" || value == "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"){
            const newFilters = props.checkedFilters.filter((item) => item !== "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_");
            props.setCheckedFilters(newFilters);
        }
        else if (value=="W" || value=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk"){
            const newFilters = props.checkedFilters.filter((item) => item !== "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk");
            props.setCheckedFilters(newFilters);
        }
        else if (value=="T" || value=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"){
            const newFilters = props.checkedFilters.filter((item) => item !== "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc");
            props.setCheckedFilters(newFilters);
        }
        else {
            const newFilters = props.checkedFilters.filter((item) => item !== value);
            props.setCheckedFilters(newFilters);
        }
        console.log(props.checkedFilters)
        // const newFilters = props.checkedFilters.filter((item) => item !== value);
        // props.setCheckedFilters(newFilters);
        // console.log(newFilters)

    }

    function addFilterToMap(name,value){
        if (name=="drive"){
            value = formatDrive(value)
        }
        const newFiltersMap = props.checkedFiltersMap
        if (name in newFiltersMap){
            newFiltersMap[name].push(value)
        }
        else {
            newFiltersMap[name] = [value]
        }
        console.log(newFiltersMap)

        for (let key in newFiltersMap) {
            console.log(key + ': ' + newFiltersMap[key]);
        }

        console.log(typeof newFiltersMap)
        Object.entries(newFiltersMap).forEach((prop)=> console.log(prop[1]));


        props.setCheckedFiltersMap(newFiltersMap);
    }

    function removeFilterFromMap(name,value){
        if (name=="drive"){
            value = formatDrive(value)
        }
        const newFiltersMap = props.checkedFiltersMap
        newFiltersMap[name] = newFiltersMap[name].filter(item => item !== value)
        console.log(newFiltersMap)
        props.setCheckedFiltersMap(newFiltersMap);

    }

    const facetsStatic = require('./facets.json');
    console.log(facetsStatic.facets)
    // console.log(props.filters)


    var facets;

    console.log(Object.keys(props.facets))
    console.log(Object.keys(facetsStatic.facets))
    // try{
    //     facets = Object.keys(props.facets).map(key => {
    //         // console.log(key)
    //         return <CheckboxFacet 
    //             key={key}
    //             name={key} 
    //             values={props.facets[key]}
    //             addFilter={addFilter}
    //             removeFilter={removeFilter}
    //             mapFacetName={mapFacetName}
    //             selectedFacets={props.filters.filter( f => f.field === key)}
    //           />;
    //       });
    // } catch (error) {
    //     console.log(error);
    // }

    // console.log(facets.values)
    try{
        facets = Object.keys(facetsStatic.facets).map(key => {
            // console.log(key)
            return <CheckboxFacet 
                key={key}
                name={key}
                addFilterValue={addFilterValue}
                removeFilterValue={removeFilterValue}
                values={facetsStatic.facets[key]}
                checkedFilters={props.checkedFilters}
                checkedFiltersMap={props.checkedFiltersMap}
                addFilterToMap={addFilterToMap}
                removeFilterFromMap={removeFilterFromMap}
                selectedFacets={props.filters.filter( f => f.field === key)}
              />;
          });
    } catch (error) {
        console.log(error);
    }


    // const filters = props.filters.map((filter, index) => {
    //         return (
    //         <li key={index}>
    //             <Chip 
    //                 label={`${mapFacetName(filter.field )}: ${filter.value.slice(-1) === '0'?filter.value.substring(0, filter.value.indexOf('.')):filter.value}`} 
    //                 onDelete={() => removeFilter(filter)}
    //                 className="chip"
    //           />
    //         </li>);
    //       });

    // const filters = facetsStatic.filters.map((filter, index) => {
    //     return (
    //     <li key={index}>
    //         <Chip 
    //             label={`${mapFacetName(filter.field )}: ${filter.value.slice(-1) === '0'?filter.value.substring(0, filter.value.indexOf('.')):filter.value}`} 
    //             className="chip"
    //       />
    //     </li>);
    //   });

    const selectedFilters = props.checkedFilters.map((item, index) => 
        {
            if (item=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"){
                return(
                <li class="list-group-item border-0 p-1">
                    <span key = {index} class="badge rounded-pill text-bg-secondary">Y</span>
                </li>)
            }
            else if (item=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk"){
                return(<li class="list-group-item border-0 p-1">
                    <span key = {index} class="badge rounded-pill text-bg-secondary">W</span>
                </li>)
            }
            else if (item=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"){
                return(<li class="list-group-item border-0 p-1">
                    <span key = {index} class="badge rounded-pill text-bg-secondary">T</span>
                </li>)
            }
            else {
                return(<li class="list-group-item border-0 p-1">
                    <span key = {index} class="badge rounded-pill text-bg-secondary">{item}</span>
                </li>)
            }
        }
    );



    // "Y"  "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"
    // "W" "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk"

    return (
        <div id="facetPanel" className="box">
            <div className="facetbox">
                <div id="clearFilters" className="">
                    <ul className="filterlist ps-3 d-flex flex-wrap list-group-horizontal">
                        {selectedFilters}
                    </ul>
                </div>
                <FacetList component="nav" className="listitem" >
                    {facets}
                </FacetList>    
            </div>
        </div>
    );
};

const FacetList = styled(List)({
    marginTop: '32px !important'
})
