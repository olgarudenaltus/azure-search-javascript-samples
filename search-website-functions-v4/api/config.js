const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "good-books",
    SearchApiKey: process.env["SearchApiKey"] || "29481C4EC76A7059D7F69F89E4BA0143",
    SearchServiceName: process.env["SearchServiceName"] || "cogsrch-aginodev01-cace-001",
    SearchFacets: process.env["SearchFacets"] || "authors*,language_code", 
}
console.log(CONFIG);
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

module.exports = { CONFIG };
