import React from "react";
import { useNavigate } from "react-router-dom";

import "./SearchInfo.css";
import "../../pages/SearchInfo/SearchInfo.css";
import sampleResult from "../../images/target_sample_result.png";

export default function SearchInfo() {

  return (
    <main className="main main--home">
      <div className="search-info">
        {/* Bugs announcement */}
        <div className="row">
          <div class="card border-0">
            <div class="card-body">
              <div class="alert alert-danger" role="alert">
                Universal Search is a prerelease and is currently operating in a beta mode. Bugs and errors are common.
              </div>
            </div>
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
          <div className="info-paragraph">
            <p class="h3">Viewing Files and Accessing Folders</p>
            <p>Once you've found a file in your search results how do you open that file or how can you navigate to the folder the file is in?</p>
            <img className="sampleResultImg py-2" src={sampleResult}></img>
            <p>Your search results show two key pieces of information: the file name, shown in large, bold text and the path to the folder, shown below the file name alongside the text PATH.
              <b>To open a file or navigate to the folder you need to copy the link by clicking on the icon to the right of the file name or path.</b> Clicking on the icon will make a of copy the link to the file or folder, allowing you to paste that link wherever you need to.
              If you open Windows File Explorer and paste your link into the address field you can either open the file or navigate to the folder depending on which icon you clicked.</p>
          </div>
          <div class="card border-0 issues-block">
            <div class="card-footer issues-block-inner">
              <p class="h4">Experiencing Issues?</p>
              <p>As this is a pre-release, the Universal Search is still in beta mode and you may experience issues. We are looking for your feedback on errors, glitches, or other feedback that will help in its production-ready development. </p>
              <p>If you experience an issue, please create a new incident ticket in ServiceNow by <a href="https://altusgroup.service-now.com/sp/?id=cf_my_incidents_tickets&sys_id=3f1dd0320a0a0b99000a53f7604a2ef9" target="_blank">clicking here</a>. When adding the ticket, please select Category “Applications/Services” - Subcategory “Universal Search”. This will allow the ticket to be directed appropriately. For urgent support, please reach out to Olga Rudenko at olga.rudenko@altusgroup.com or via Teams Chat.  </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
