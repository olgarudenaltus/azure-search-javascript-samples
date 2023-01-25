import React from 'react';
import Result from './Result/Result';

import "./ResultsTaxPenalty.css";

export default function ResultsTaxPenalty(props) {

  let results = props.documents.map((result, index) => {
    return <Result 
        key={index} 
        document={result.document}
      />;
  });

  // let beginDocNumber = Math.min(props.skip + 1, props.count);
  // let endDocNumber = Math.min(props.skip + props.top, props.count);


  let beginDocNumber = Math.min(props.skip + 1, props.count);
  let endDocNumber = Math.min(props.skip + props.top, props.count);

  return (
    <div>
      <p className="results-info">Showing {beginDocNumber}-{endDocNumber} of {props.count.toLocaleString()} results</p>
      <div className="row results">
        {results}
      </div>
    </div>
  );
};
