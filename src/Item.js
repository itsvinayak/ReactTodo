import React from 'react';

export const Item = (props) => {
  console.log(props);
    return (
      <div className="item">
      <div className="middle aligned content">

        <div className="header">
        <i class="long arrow alternate right icon"></i>
          {props.item}
        </div>
      </div>
      <button onClick={() => props.deleteItem(props.item)} className ="ui right floated button red">
          Delete
      </button>
      </div>
    );
};
