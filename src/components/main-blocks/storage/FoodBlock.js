import { useState } from "react";

import { ReactComponent as Delete } from "./../../../assets/actions/Delete.svg";
import { ReactComponent as Edit } from "./../../../assets/actions/Edit.svg";
import { ReactComponent as Check } from "./../../../assets/actions/Check.svg";

export default function FoodBlock({ id, img, name, amount }) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="items-block">
      <p>{id}</p>
      <div className="items-icon">{img}</div>
      <p>{name}</p>
      <input
        className="items-value"
        defaultValue={amount}
        disabled={isDisabled}
      />
      <div className="items-actions">
        {isDisabled ? (
          <button className="edit" onClick={() => setIsDisabled(false)}>
            <Edit />
          </button>
        ) : (
          <button className="check" onClick={() => setIsDisabled(true)}>
            <Check />
          </button>
        )}
        <button className="delete">
          <Delete />
        </button>
      </div>
    </div>
  );
}
