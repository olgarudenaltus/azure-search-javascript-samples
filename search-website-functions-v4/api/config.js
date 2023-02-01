// tax search config
const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "tax-top3-full-index",
    SearchApiKey: process.env["SearchApiKey"] || "29481C4EC76A7059D7F69F89E4BA0143",
    SearchServiceName: process.env["SearchServiceName"] || "cogsrch-aginodev01-cace-001",
    SearchFacets: process.env["SearchFacets"] || "year,state,client,drive,file_extension", 
}
console.log(CONFIG);
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

// // tax penalty search config
// const CONFIG_TAX_PENALTY = {
//     SearchIndexName: process.env["SearchIndexName"] || "tax-penalty-index",
//     SearchApiKey: process.env["SearchApiKey"] || "29481C4EC76A7059D7F69F89E4BA0143",
//     SearchServiceName: process.env["SearchServiceName"] || "cogsrch-aginodev01-cace-001",
//     SearchFacets: process.env["SearchFacets"] || "year,state,client,drive,file_extension", 
// }
// console.log(CONFIG_TAX_PENALTY);
// if (!CONFIG_TAX_PENALTY.SearchIndexName || !CONFIG_TAX_PENALTY.SearchApiKey || !CONFIG_TAX_PENALTY.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

// // tax store search config
// const CONFIG_TAX_STORE = {
//     SearchIndexName: process.env["SearchIndexName"] || "azureblob-index",
//     SearchApiKey: process.env["SearchApiKey"] || "29481C4EC76A7059D7F69F89E4BA0143",
//     SearchServiceName: process.env["SearchServiceName"] || "cogsrch-aginodev01-cace-001",
//     SearchFacets: process.env["SearchFacets"] || "year,state,client,drive,file_extension", 
// }
// console.log(CONFIG_TAX_STORE);
// if (!CONFIG_TAX_STORE.SearchIndexName || !CONFIG_TAX_STORE.SearchApiKey || !CONFIG_TAX_STORE.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");


process.env.NODE_EXTRA_CA_CERTS  = ["azure-search-javascript-samples/search-website-functions-v4/api/ZscalerRoot.pem"]
console.log(process.env.NODE_EXTRA_CA_CERTS)

module.exports = { CONFIG };
// module.exports = { CONFIG_TAX_PENALTY };
// module.exports = { CONFIG_TAX_STORE };
