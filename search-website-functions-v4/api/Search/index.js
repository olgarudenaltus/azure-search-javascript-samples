const { SearchClient, AzureKeyCredential } = require("@azure/search-documents");
const { CONFIG } = require("../config");

// Create a SearchClient to send queries
const client = new SearchClient(
    `https://` + CONFIG.SearchServiceName + `.search.windows.net/`,
    "taxus-w-meta",
    new AzureKeyCredential(CONFIG.SearchApiKey)
);

// 1. When drive filter is applied filter results by metadata_spo_library_id (filter out results on the app by metadata_spo_item_path)
// 2. Change URL links when pointing to FSx folder
// 3. Combine client lists - done
// 4. 



// creates filters in odata syntax
const createFilterExpression = (filterList, facets) => {
    let i = 0;
    let filterExpressions = [];

    while (i < filterList.length) {
        let field = filterList[i].field;
        let value = filterList[i].value;

        if (facets[field] === 'array') {
            filterExpressions.push(`${field}/any(t: search.in(t, '${value}', ','))`);
        } else {
            filterExpressions.push(`${field} eq '${value}'`);
        }
        i += 1;
    }

    return filterExpressions.join(' and ');
}

// reads in facets and gets type
// array facets should include a * at the end 
// this is used to properly create filters
const readFacets = (facetString) => {
    let facets = facetString.split(",");
    let output = {};
    facets.forEach(function (f) {
        if (f.indexOf('*') > -1) {
            output[f.replace('*', '')] = 'array';
        } else {
            output[f] = 'string';
        }
    })

    return output;
}

module.exports = async function (context, req) {

    try {
        console.log(req.body)
        // Reading inputs from HTTP Request
        // const checkedFilters = " + NC + CVS"
        const checkedFilters = req.body.checkedFilters;
        const checkedFiltersMap = req.body.checkedFiltersMap;
        const filterQuery = req.body.filterQuery;
        let q = (req.query.q || (req.body && req.body.q));
        const top = (req.query.top || (req.body && req.body.top));
        const skip = (req.query.skip || (req.body && req.body.skip));
        const filters = (req.query.filters || (req.body && req.body.filters));
        const facets = readFacets("metadata_spo_item_extension");

        console.log(q)
        console.log(checkedFilters)
        console.log(checkedFiltersMap)


        // If search term is empty, search everything
        if ((!q || q === "")) {
            q = "*";
        }

        // client ['AARP', 'AC&T Co, Inc']
        // drive ['W']

        // s.indexOf(' ') >= 0;
        // if has space join - one way, if no space - another

        const checkedFiltersFormatted = filterQuery

        console.log("Logging filters map:"+checkedFiltersFormatted)

        
        // "\"Roach Motel\" for phrase match
        if (checkedFilters.length !==0 && q==="*"){
            // const checkedFiltersFormatted = constructFilterQuery(checkedFiltersMap)
            // checkedFiltersFormatted = "\""+joinWithSeparator(checkedFilters, "\\+'\\'", "+")+"\""
            // checkedFiltersFormatted = "'\\'"+checkedFilters.join("'\\'+'\\'")+"\\'"
            q = checkedFiltersFormatted
        }
        else if (checkedFilters.length ===0 && q==="*"){
            q = "*"
        }
        else if (checkedFilters.length ===0){
            q = "'"+q+"'"
        }
        else if (checkedFilters.length !==0 && q!=="*"){
            // const checkedFiltersFormatted = constructFilterQuery(checkedFiltersMap)
            // checkedFiltersFormatted = "\""+joinWithSeparator(checkedFilters, "'\\'+'\\'", "+")+"\""
            // checkedFiltersFormatted = "'\\'"+checkedFilters.join("'\\'+'\\'")+"\\'"
            q = "'"+q+"'" + "+" + checkedFiltersFormatted
        }


        console.log(q)

        // Creating SearchOptions for query
        let searchOptions = {
            top: top,
            skip: skip,
            includeTotalCount: true,
            facets: Object.keys(facets),
            filter: createFilterExpression(filters, facets)
        };
        console.log(searchOptions)

        // Sending the search request
        const searchResults = await client.search(q, searchOptions);
        console.log(searchResults);

        // Getting results for output
        const output = [];
        for await (const result of searchResults.results) {
            output.push(result);
        }

        // delete Object.assign(searchResults.facets, {["file_extension"]: searchResults.facets["metadata_spo_item_extension"] })["metadata_spo_item_extension"];

        // Logging search results
        context.log(searchResults.count);

        // iterate over list of dicts
        // function deleteNanfromYear(obj, val) {
        //     for (var i = 0; i < obj.length; ++i) {
        //         if (obj[i].value === "nan")
        //         {
        //             obj.splice(i, 1);
        //             i -= 1
        //         }
        //         else {
        //             obj[i].value = obj[i].value.trim()
        //             obj[i].value = obj[i].value.substring(0, obj[i].value.indexOf('.'));;
        //             // console.log(obj[i].count + ", " + obj[i].value);
        //         }
                
        //     }
        // }

        // function deleteNanfromState(obj, val) {
        //     for (var i = 0; i < obj.length; ++i) {
        //         if (obj[i].value === "nan")
        //         {
        //             obj.splice(i, 1);
        //             i -= 1
        //         }
        //         else {
        //             obj[i].value = obj[i].value.trim()
        //             // console.log(obj[i].count + ", " + obj[i].value);
        //         }
                
        //     }
        // }

        // deleteNanfromYear(searchResults.facets['year'],"nan")
        // deleteNanfromState(searchResults.facets['state'],"nan")


        // Creating the HTTP Response
        context.res = {
            // status: 200, /* Defaults to 200 */
            headers: {
                "Content-type": "application/json"
            },
            body: {
                count: searchResults.count,
                results: output,
                facets: searchResults.facets
            }
        };
    } catch (error) {
        context.log.error(error);

        // Creating the HTTP Response
        context.res = {
            status: 400,
            body: {
                innerStatusCode: error.statusCode || error.code,
                error: error.details || error.message
            }
        };
    }
};