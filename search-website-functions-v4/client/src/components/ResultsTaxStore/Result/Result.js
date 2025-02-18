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

    <div class="card border-0 border-bottom col-6">
        <div class='card-body'>
            <a href={"localexplorer:"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>
                <p class="text-muted mb-1" style={{'font-size':'0.9em','text-overflow':'ellipsis','overflow':'hidden','white-space': 'nowrap'}}>{props.document.fullpath}</p>
            </a>
            <h5 class="card-title"><a class = "text-decoration-none text-reset" href={"localexplorer:"+props.document.fullpath.substr(0, props.document.fullpath.lastIndexOf("\\"))}>{props.document.metadata_storage_name}</a></h5>
            <div class='d-flex align-content-around flex-wrap search-result'>
                <span class="badge rounded-pill bg-primary">{props.document.client_folder}</span>
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
                <span class="badge rounded-pill bg-secondary">{props.document.subfolder11==="nan"?"":props.document.subfolder11}</span>
            </div>
            <div style={{'padding-left':'0px'}}>
                <div class="col-12">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">FILE</span>
                        <span class="text-muted mx-2">type: {props.document.file_extension} </span>
                        <span class="text-muted mx-2">size: {(props.document.metadata_storage_size/10000).toFixed(2)}MB </span>
                        <span class="text-muted mx-2">last updated: {props.document.metadata_storage_last_modified.substring(0,10)} </span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">PROP</span>
                        <span class="text-muted mx-2">drive: {props.document.drive} </span>
                        <span class="text-muted mx-2">{props.document.year==="nan"?"":"year: " + props.document.year.substring(0,4)}  </span>
                        <span class="text-muted mx-2">{props.document.state==="nan"?"":"state: " + props.document.state} </span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex justify-content-start">
                        <span class="me-2">CLIENT</span>
                        <span class="text-muted mx-2">client: {props.document.client} </span>
                        <span class="text-muted mx-2">client folder: {props.document.client_folder} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
