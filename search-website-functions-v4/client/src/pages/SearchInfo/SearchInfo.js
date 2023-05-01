import React from "react";
import { useNavigate } from "react-router-dom";

import "./SearchInfo.css";
import "../../pages/SearchInfo/SearchInfo.css";

export default function SearchInfo() {

  return (
    <main className="main main--home">
      <div className="search-info">
        {/* Bugs announcement */}
        <div className="row">
          <div class="card border-0">
            <div class="card-body">
              <div class="alert alert-danger" role="alert">
                Universal Search is a pre-relase and is currently operating in a beta mode. Bugs and errors are common.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="info-paragraph">
            <p class="h3">Getting Started</p>
            <p>
              Universal Search runs in the Google Chrome browser and you will need to install the <a href="https://chrome.google.com/webstore/detail/local-explorer-open-file/eokekhgpaakbkfkmjjcbffibkencdfkl">Local Explorer extension</a> in order to open the files shown in your search results. </p>
            <ul>
              <li>Click the “Add to Chrome” button and then “Add Extension” next. </li>
              <li>Note: You may be prompted once the Local Explorer extension is installed to also install an Integration Module. You do not need to install the Integration Module. </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="info-paragraph">
            <p class="h3">What is Universal Search?</p>
            <p>Universal Search is an Altus web-based application that allows users to search for and locate files in a centralized location. Powered by Azure cognitive search, Universal Search capabilities extend beyond those of a classic search engine by combining indexing technology with powerful AI technology to bring numerous data sources together to extract relevant information quickly.  </p>
          </div>
          <div className="info-paragraph">
            <p class="h3">What is included in Universal Search?</p>
            <p>This first release of Universal Search includes files from the Tax US “W” and “Y” drive only. Subsequent releases will provide search capabilities over the “T” drive, and additional drives and repositories will be included throughout the year.</p>
          </div>
          <div class="card border-0 issues-block">
            <div class="card-footer issues-block-inner">
              <p class="h4">Experiencing Issues?</p>
              <p>As this is a pre-release, the Universal Search is still in beta mode and you may experience issues. We are looking for your feedback on errors, glitches, or other feedback that will help in its production-ready development. </p>
              <p>If you experience an issue, please create a new incident ticket in ServiceNow by clicking here. When adding the ticket, please select Category “Applications/Services” - Subcategory “Universal Search”. This will allow the ticket to be directed appropriately. For urgent support, please reach out to Olga Rudenko at olga.rudenko@altusgroup.com or via Teams Chat.  </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
