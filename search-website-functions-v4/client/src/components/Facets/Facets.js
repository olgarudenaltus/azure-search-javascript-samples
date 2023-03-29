import React from 'react';
import { List, Chip } from '@material-ui/core';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';
import styled from 'styled-components';
import "./Facets.css";

export default function Facets(props) {

    

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

    function addFilterValue(name,value){
        // console.log(name,value)
        // const newFilters = props.checkedFilters.concat({ field: name, value: value });
        // props.setCheckedFilters(newFilters)

        // props.checkedFilters
        // props.checkedFilters.terms = Object.assign(props.checkedFilters.terms,value)
        // props.checkedFilters =  props.checkedFilters +"+"+value; 
        // const newCheckedFilters = props.checkedFilters +"+"+value;
        // props.setCheckedFilters(newCheckedFilters)
    }

    function removeFilterValue(filter){
        console.log(filter)
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
                values={facetsStatic.facets[key]}
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


    return (
        <div id="facetPanel" className="box">
            <div className="facetbox">
                <div id="clearFilters">
                {/* <ul className="filterlist">
                    {filters}
                </ul> */}
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
