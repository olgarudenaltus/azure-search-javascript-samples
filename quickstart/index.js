#!/usr/bin/env/node

const nconf = require('nconf');
const SearchServiceHelper = require('./SearchServiceHelper.js');
const AzureSearchClient = require('./AzureSearchClient.js');

function getAzureConfiguration() {
    const config = nconf.file({ file: 'azure_search_config.json' });
    if (config.get('serviceName') == '[SEARCH_SERVICE_NAME' || config.get('apiKey') == '[SEARCH_SERVICE_API_KEY]') {
        throw "You have not set the values in your azure_search_config.json file. Please change them to match your search service's values."
    }
    return config;
}

const queries = [
    "*&$count=true",
    "historic&$filter=Rating gt 4&"
];

const hotelData = { value : [
    require('./data/hotel1.json'),
    require('./data/hotel2.json'),
    require('./data/hotel3.json'),
    require('./data/hotel4.json')
]}

const run = async () => {
    try {
        const cfg = getAzureConfiguration();
        const helper = new SearchServiceHelper(cfg.get("serviceName"), cfg.get("apiKey"), "hotels");
        const client = new AzureSearchClient(helper);
        
        //const exists = await client.indexExistsAsync();
        //await exists ? client.deleteIndexAsync() : Promise.resolve();
        //const indexDefinition = require('./hotels_quickstart_index.json');
        //await client.createIndexAsync(indexDefinition);
        //await client.loadDataAsync(hotelData);
        // var indexComplete = false
        // do {
        //     indexComplete = await client.indexCompletedAsync();
        // }while(! indexComplete)
        queries.forEach(async (query) => { 
            const result = await client.queryAsync(query);
            const body = await result.json();
            const str = JSON.stringify(body, null, 4);
            console.log(`Query: ${query} \n ${str}`);
        });
        console.log("Finished.");
    } catch (x) {
        console.log(x);
    }

}

run();