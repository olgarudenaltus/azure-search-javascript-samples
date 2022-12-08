const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "good-books",
    SearchApiKey: process.env["SearchApiKey"] || "F8C70CFA8C7BF87084411E25E4ED29C8",
    SearchServiceName: process.env["SearchServiceName"] || "cogsrch-aginodev01-cace-001",
    SearchFacets: process.env["SearchFacets"] || "authors*,language_code", 
}
console.log(CONFIG);
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

module.exports = { CONFIG };
