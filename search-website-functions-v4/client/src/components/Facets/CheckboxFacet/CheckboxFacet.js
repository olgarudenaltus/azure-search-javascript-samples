import React, {useState} from 'react';
import { Collapse, Checkbox, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';

import './CheckboxFacet.css';

export default function CheckboxFacet(props) {

    let [isExpanded, setIsExpanded] = useState(false);


    function deleteNan(obj, val) {
        for (var i = 0; i < obj.length; ++i) {
            if (obj[i].value === "nan")
            {
                obj.splice(i, 1);
                i -= 1;
            }
            // if (obj[i].value.slice(-1) === '0'){
            //     obj[i].value = obj[i].value.substring(0, obj[i].value.indexOf('.'));;
            // }
            else {
                obj[i].value = obj[i].value.trim()
                // console.log(obj[i].count + ", " + obj[i].value);
            }
            
        }
    }

    deleteNan(props.values)


    const checkboxes = props.values.map(facetValue => {
        let isSelected;
        
        if (facetValue.value == "Y"){
            isSelected = props.checkedFilters.some(f => f=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_");
        }
        else if(facetValue.value == "W"){
            isSelected = props.checkedFilters.some(f => f=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_JgIzt0vFmoQ65pvesri2Xk");
        }
        else if(facetValue.value == "T"){
            isSelected = props.checkedFilters.some(f => f=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc");
        }
        else {
            isSelected = props.checkedFilters.some(f => f==facetValue.value);
        }
        // let isSelected = props.checkedFilters.some(f => f==facetValue.value);
        // console.log(isSelected)
        // let isSelected = document.getElementById({facetValue}).checked;
        // let isSelected = props.selectedFacets.some(facet => facet.value === facetValue.value);

        // console.log(props.values)

        // let isSelected = props.selectedFacets.some(facet => facet.value === facetValue.value);
        
        return (
            <FacetValueListItem dense disableGutters id={facetValue.value}>
                <Checkbox 
                    id ={facetValue.value}
                    edge="start" 
                    disableRipple 
                    // checked={isSelected}
                    // onClick= {
                    //     isSelected ? 
                    //     () => props.removeFilter({field: props.name, value: facetValue.value}) :
                    //     () => props.addFilter(props.name, facetValue.value)
                    // }
                    // onClick = {props.addFilterValue(props.name,facetValue.value)}
                    // onClick = {console.log(facetValue.value)}
                    onClick= {
                        isSelected ? 
                        () => {props.removeFilterValue(props.name,facetValue.value);props.removeFilterFromMap(props.name,facetValue.value);console.log("removed: " + facetValue.value);} :
                        () => {props.addFilterValue(props.name,facetValue.value);props.addFilterToMap(props.name,facetValue.value);console.log("added: " + facetValue.value);}
                    }
                />
                {/* <ListItemText primary={facetValue.value.slice(-1) === '0'?facetValue.value.substring(0, facetValue.value.indexOf('.'))+ " (" + facetValue.count + ")":facetValue.value + " (" + facetValue.count + ")"}/> */}
                <ListItemText primary={facetValue.value}/>
            </FacetValueListItem>
        );
    });

    // if (obj[i].value.slice(-1) === '0'){
    //     obj[i].value = obj[i].value.substring(0, obj[i].value.indexOf('.'));;
    // }

    // console.log(props.mapFacetName(props.name))

    return (
        <div>
            <FacetListItem disableRipple={true} button onClick={() => setIsExpanded(!isExpanded)}>
                <ListItemText 
                    primary={props.name}
                />
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </FacetListItem>
            <Collapse in={isExpanded} component="div">
                <FacetValuesList>
                    {checkboxes}
                </FacetValuesList>
            </Collapse>
        </div>
    );
}

const FacetListItem = styled(ListItem)({
    paddingLeft: '36px !important',
})

const FacetValueListItem= styled(ListItem)({
    paddingLeft: '46px !important',
});

const FacetValuesList= styled(List)({
    maxHeight: 340,
    overflowY: 'auto !important',
    marginRight: '18px !important'
})