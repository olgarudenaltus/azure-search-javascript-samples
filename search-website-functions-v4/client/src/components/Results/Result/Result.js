import React from 'react';

import './Result.css';

export default function Result(props) {
    
    // console.log(`result prop = ${JSON.stringify(props)}`)
    // T: b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc


    function copyFolderPath() {
        var folderPath = props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"?"T:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/")):props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"?"Y:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/")):"W:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/"));
        props.setCopyPathFolder(folderPath);
        navigator.clipboard.writeText(folderPath);
        props.setShowFolderAlert(true)
        setTimeout(() => {
            props.setShowFolderAlert(false);
        }, 2500);
    }

    function copyFilePath() {
        var filePath = props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"?"T:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/")):props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"?"Y:"+props.document.metadata_spo_item_path.substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/")):"W:"+props.document.metadata_spo_item_path.substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/"));
        props.setCopyPathFile(filePath);
        navigator.clipboard.writeText(filePath);
        props.setShowFileAlert(true)
        setTimeout(() => {
            props.setShowFileAlert(false);
        }, 2500);
    }

    
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
            {/* <a href={"file:///"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>
                <p class="text-muted mb-1" style={{'font-size':'0.9em'}}>{props.document.fullpath}</p>
            </a> */}
            {/* <a href={"file:///"+props.document.props.document.metadata_spo_item_path.substr(props.document.metadata_spo_item_path.indexOf(":/"), props.document.metadata_spo_item_path.lastIndexOf("/"))}></a> */}
            <div class="d-flex justify-content-start align-items-center">
                <h5 title="" style={{'overflow':'hidden','white-space':'nowrap'}} class="card-title text-primary">
                    {props.document.metadata_spo_item_name}
                </h5>
                <button onClick = {() => copyFilePath()} title="Click to copy file link" type="button" class="btn btn-outline-primary border-0 mb-2" id="setFilePath">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                </svg>
                </button>
            </div>
            {/* <h5 style={{'overflow':'hidden','white-space':'nowrap'}} class="card-title"><a class = "text-decoration-none" href={"file:///"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>{props.document.metadata_storage_name}</a></h5> */}
            {/* <h5 style={{'overflow':'hidden','white-space':'nowrap'}} class="card-title"><a class = "text-decoration-none" href={"file:///"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>{props.document.metadata_storage_name}</a> <span class="text-muted mb-1" style={{'font-size':'0.85em'}}><a class ="text-muted mb-1 text-decoration-none" href={"file:///"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>({props.document.fullpath})</a></span></h5> */}

            <div style={{'padding-left':'50px'}}>
            <div class="col-12">
                    <div class="d-flex justify-content-start align-items-center">
                        <span class="me-2">PATH:</span>
                        <span class="text-muted mx-2 d-flex justify-content-start align-items-center">
                        
                            <p class="text-muted mb-0" style={{'font-size':'0.9em'}}>{props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"?"T:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/")):props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"?"Y:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/")):"W:"+props.document.metadata_spo_item_path.substr(0, props.document.metadata_spo_item_path.lastIndexOf("/")).substr(props.document.metadata_spo_item_path.indexOf(":/")+1, props.document.metadata_spo_item_path.lastIndexOf("/"))}</p>
                            <button onClick = {() => copyFolderPath()} title="Click to copy folder link" type="button" class="btn btn-outline-secondary border-0 mb-1" id="setFolderPath">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
                                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                                </svg>
                            </button>


                        </span>
                    </div>
                </div>
                <div class="col-7">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">FILE:</span>
                        <span class="text-muted mx-2">type:</span> <span>{props.document.metadata_spo_item_extension} </span>
                        <span class="text-muted mx-2">size: </span><span>{(props.document.metadata_spo_item_size/100000).toFixed(2)}MB </span>
                        <span class="text-muted mx-2">last updated:  </span><span title="Added to SharePoint date">{props.document.metadata_spo_item_last_modified.substring(0,10)} </span>
                    </div>
                </div>
                <div class="col-7">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">PROP:</span>
                        <span class="text-muted mx-2">drive: </span><span>{props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KQpDYDuHdvSL0JAe7qdEAc"?"T":props.document.metadata_spo_library_id=="b!YkZ53NE4-E-IQGsKWThfdNPDxichE6FOtE2_hwunD_KnkfD-Dh--QbgG1RLg5ES_"?"Y":"W"}</span>
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
