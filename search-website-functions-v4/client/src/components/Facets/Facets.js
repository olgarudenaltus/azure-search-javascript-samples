import React from 'react';
import { List, Chip } from '@material-ui/core';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';
import styled from 'styled-components';
import "./Facets.css";

export default function Facets(props) {

    const driveIDs = [
        {
            driveName:"W",
            driveID:"b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk"
        },
        {
            driveName:"Y",
            driveID:"b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"
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

    function addDriveFilter(drive){
        const newDriveFilters = props.driveFilter.concat(drive);
        props.setDriveFilter(newDriveFilters)
    }

    function removeDriveFilter(drive){
        const newDriveFilters = props.driveFilter.filter((item) => item !== drive);
        props.setDriveFilter(newDriveFilters)
    }


    function addFilterValue(name,value){
        console.log("Adding")
        console.log(name,value)
        console.log(props.checkedFilters)
        if (value=="Y"){
            const newFilters = props.filters.concat("b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_");
            props.setCheckedFilters(newFilters);
        }
        else if (value=="W"){
            const newFilters = props.filters.concat("b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk");
            props.setCheckedFilters(newFilters);
        }
        else {
            const newFilters = props.filters.concat(value);
            props.setCheckedFilters(newFilters);
        }
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

        if (value=="Y"){
            const newFilters = props.checkedFilters.filter((item) => item !== "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_");
            props.setCheckedFilters(newFilters);
        }
        else if (value=="W"){
            const newFilters = props.checkedFilters.filter((item) => item !== "b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk");
            props.setCheckedFilters(newFilters);
        }
        else {
            const newFilters = props.checkedFilters.filter((item) => item !== value);
            props.setCheckedFilters(newFilters);
        }

        // const newFilters = props.checkedFilters.filter((item) => item !== value);
        // props.setCheckedFilters(newFilters);
        // console.log(newFilters)

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
                addDriveFilter={addDriveFilter}
                removeDriveFilter={removeDriveFilter}
                driveFilter={props.driveFilter}
                values={facetsStatic.facets[key]}
                checkedFilters={props.checkedFilters}
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
        <li>
            <span key = {index} class="badge rounded-pill text-bg-secondary">{item}</span>
        </li>
    );


    return (
        <div id="facetPanel" className="box">
            <div className="facetbox">
                <div id="clearFilters">
                    <ul className="filterlist">
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
