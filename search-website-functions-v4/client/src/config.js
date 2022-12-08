const apiBaseUrl = process.env["REACT_APP_API_BASE_URL"];
console.log(`apiBaseUrl = ${apiBaseUrl}`);

// const CONFIG = {
//     SearchIndexName: process.env["SearchIndexName"] || "good-books",
//     SearchApiKey: process.env["SearchApiKey"] || "F8C70CFA8C7BF87084411E25E4ED29C8",
//     SearchServiceName: process.env["SearchServiceName"] || "cogsrch-aginodev01-cace-001",
//     SearchFacets: process.env["SearchFacets"] || "authors*,language_code", 
// }
// console.log(CONFIG);

export default apiBaseUrl;