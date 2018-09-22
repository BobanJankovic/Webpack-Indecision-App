import React from 'react';

//implicitno vracamo JSX, ((bez returna)) u nasim stejtles functional komponentama
export const Action = (props) => (
    <div>
      <h2>
        Izaberite opciju randomly
      </h2>

      <button 
        className="big-button"
        onClick={props.handlePick} 
        type="button" 
        disabled={!props.handlePickOption}
        >Pick Option
      </button>
    
      <button onClick={props.handleDeleteOption}>Delete All!</button>
      
    </div>  
  );