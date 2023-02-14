import React from 'react';
import DefaultBG from '../../Icons/defaultInput.svg';

function FMRow({rowType, icon, ph }) {

    let iconStyle = icon ? icon : { backgroundImage: `url(${DefaultBG})` };
    let inputType = rowType != undefined ? rowType : "text";
    let placeh = ph != undefined ? ph : "";

  return (
      <div className="FormMakerRow">
          <div className="rowIcon" style={iconStyle}></div>
          <input className="rowInput" type={inputType} placeholder={placeh} />
      </div>
  );
}

export default FMRow;