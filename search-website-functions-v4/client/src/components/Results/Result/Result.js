import React from 'react';

import './Result.css';

export default function Result(props) {
    
    // console.log(`result prop = ${JSON.stringify(props)}`)

    // "file:///"+props.document.fullpath.replace(/\\/g, "/").replace(' ', "%20")
    
    return(
    // <div className="card result">
    //     <a href={`/#/details/${props.document.id}`}>
    //         <img className="card-img-top" src={props.document.image_url} alt={props.document.original_title}></img>
    //         <div className="card-body">
    //             <h6 className="title-style">{props.document.original_title}</h6>
    //         </div>
    //     </a>
    // </div>

    <div class="card border-0 border-bottom">
        <div class='card-body'>
            {/* <a href={"localexplorer:"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>
                <p class="text-muted mb-1" style={{'font-size':'0.9em'}}>{props.document.fullpath}</p>
            </a> */}
            {/* <a href={"localexplorer:"+props.document.props.document.metadata_spo_item_path.substr(props.document.metadata_spo_item_path.indexOf(":/"), props.document.metadata_spo_item_path.lastIndexOf("/"))}></a> */}
            <h5 title="Click to opean a file" style={{'overflow':'hidden','white-space':'nowrap'}} class="card-title"><a class = "text-decoration-none" href={"localexplorer:W:"+props.document.metadata_spo_item_path.substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/"))}>{props.document.metadata_spo_item_name}</a></h5>
            {/* <h5 style={{'overflow':'hidden','white-space':'nowrap'}} class="card-title"><a class = "text-decoration-none" href={"localexplorer:"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>{props.document.metadata_storage_name}</a></h5> */}
            {/* <h5 style={{'overflow':'hidden','white-space':'nowrap'}} class="card-title"><a class = "text-decoration-none" href={"localexplorer:"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>{props.document.metadata_storage_name}</a> <span class="text-muted mb-1" style={{'font-size':'0.85em'}}><a class ="text-muted mb-1 text-decoration-none" href={"localexplorer:"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>({props.document.fullpath})</a></span></h5> */}
            <div class='d-flex align-content-around flex-wrap search-result'>
                {/* <span class="badge rounded-pill bg-primary">{props.document.client_folder}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder1}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder2}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder3==="nan"?"":props.document.subfolder3}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder4==="nan"?"":props.document.subfolder4}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder5==="nan"?"":props.document.subfolder5}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder6==="nan"?"":props.document.subfolder6}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder7==="nan"?"":props.document.subfolder7}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder8==="nan"?"":props.document.subfolder8}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder9==="nan"?"":props.document.subfolder9}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder10==="nan"?"":props.document.subfolder10}</span>
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder11==="nan"?"":props.document.subfolder11}</span> */}
            </div>
            <div style={{'padding-left':'50px'}}>
            <div class="col-12">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">PATH:</span>
                        <span title="Click to navigate to a folder" class="text-muted mx-2"><a href={"localexplorer:W:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/"))}>
                <p class="text-muted mb-1" style={{'font-size':'0.9em'}}>{"W:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/"))}</p>
            </a></span>
                    </div>
                </div>
                <div class="col-7">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">FILE:</span>
                        <span class="text-muted mx-2">type:</span> <span>{props.document.metadata_spo_item_extension} </span>
                        <span class="text-muted mx-2">size: </span><span>{(props.document.metadata_spo_item_size/100000).toFixed(2)}MB </span>
                        <span title="Added to SharePoint date" class="text-muted mx-2">last updated:  </span><span>{props.document.metadata_spo_item_last_modified.substring(0,10)} </span>
                    </div>
                </div>
                <div class="col-7">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">PROP:</span>
                        <span class="text-muted mx-2">drive: </span><span>W</span>
                        {/* <span class="text-muted mx-2">year:  </span><span>{props.document.year==="nan"?"": props.document.year.substring(0,4)} </span>
                        <span class="text-muted mx-2">state: </span><span>{props.document.state==="nan"?"":props.document.state}</span> */}
                    </div>
                </div>
                <div class="col-7">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">CLIENT:</span>
                        <span class="text-muted mx-2">client:  </span><span>{props.document.metadata_spo_item_path.split("/")[4]==="Client Data"?props.document.metadata_spo_item_path.split("/")[5]:""}</span>
                        {/* <span class="text-muted mx-2">client folder:  </span><span>{props.document.client_folder} </span> */}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
}
