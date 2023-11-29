import { useState } from "react";

import { ReactComponent as Check } from "@icons/actions/Check.svg";
import { ReactComponent as Delete } from "@icons/actions/Delete.svg";
import { ReactComponent as Edit } from "@icons/actions/Edit.svg";

export default function FoodElement({ id, img, name, amount }) {
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
        <button
          className="delete"
          onClick={() =>
            window.confirm("Do you confirm the deletion of this item?")
          }
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}
