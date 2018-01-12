import React from 'react';
// import Details from './Details';

const GifList = props => {

  const results = props.data;

  // const
  function subString(strings){
    const getString = strings;
    return getString.substr(0,130)+"..";
  }
  // const limit={props.description};
  // return.subString.substr(limit.description[100]),

  return(
    results.map(gif =>
      <div className="col-lg-3 mb-4">
        <div className="card h-100">
            <h4 className="card-header">{gif.title}</h4>
              <div className="card-body">
                <p className="card-text">{subString(gif.description)}</p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary">Details</a>
              </div>
        </div>
      </div>
      // <p>{gif.title}</p>
    )
  );
}


export default GifList;
