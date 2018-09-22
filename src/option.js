
import React from 'react';

export const Option = (props) => {
  return (
    <div className="borders">
    <div className="opcije">
    <span>{props.index}. {props.optionText}</span>
    </div>
      <button onClick={(e)=>{props.handleDeleteOneOption(props.optionText)} }>
        delete one element
      </button>
    </div>
  );
};
