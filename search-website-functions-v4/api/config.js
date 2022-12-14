const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "tax-top3-test-index",
    SearchApiKey: process.env["SearchApiKey"] || "29481C4EC76A7059D7F69F89E4BA0143",
    SearchServiceName: process.env["SearchServiceName"] || "cogsrch-aginodev01-cace-001",
    SearchFacets: process.env["SearchFacets"] || "year,state,client,drive,file_extension", 
}
console.log(CONFIG);
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

// process.env.NODE_EXTRA_CA_CERTS  = ["azure-search-javascript-samples/search-website-functions-v4/api/ZscalerRoot.pem"]
console.log(process.env.NODE_EXTRA_CA_CERTS)

module.exports = { CONFIG };
