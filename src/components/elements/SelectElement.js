import React, { useEffect, useRef } from "react";

import "@styles/elements/SelectElement.css";

import { ReactComponent as Arrow } from "@icons/system/ArrowDown.svg";

export default function SelectElement({ optionList, defaultName }) {
  const activeDropdown = useRef(null);

  function closeAllDropdowns() {
    if (!activeDropdown.current) {
      return;
    }
    let arrow = activeDropdown.current.children[1];
    handleDropdown(activeDropdown.current, arrow, false);
  }

  function handleDropdown(dropdown, arrow, open) {
    if (open) {
      arrow.classList.add("rotated");
      dropdown.classList.add("active");
    } else {
      arrow.classList.remove("rotated");
      dropdown.classList.remove("active");
    }
  }

  const dropDownOnClick = () => {
    let arrow = activeDropdown.current.children[1];

    if (activeDropdown.current.classList.contains("active")) {
      handleDropdown(activeDropdown.current, arrow, false);
    } else {
      let currentActive = document.querySelector(".wrapper-dropdown.active");

      if (currentActive) {
        let anotherArrow = currentActive.children[1];
        handleDropdown(currentActive, anotherArrow, false);
      }

      handleDropdown(activeDropdown.current, arrow, true);
    }
  };

  useEffect(() => {
    if (!activeDropdown.current) {
      return;
    }

    const optionsList = activeDropdown.current.querySelectorAll(
      "div.wrapper-dropdown li"
    );

    for (let o of optionsList) {
      o.addEventListener("click", () => {
        activeDropdown.current.querySelector(".selected-display").innerHTML =
          o.innerHTML;
      });
    }
  }, [activeDropdown]);

  window.addEventListener("click", function (e) {
    if (e.target.closest(".wrapper-dropdown") === null) {
      closeAllDropdowns();
    }
  });

  return (
    <div
      ref={activeDropdown}
      onClick={dropDownOnClick}
      className="elements wrapper-dropdown"
      id="dropdown"
    >
      <span className="selected-display" id="destination">
        {defaultName}
      </span>
      <Arrow className="arrow transition-all ml-auto rotate-180" />
      <ul className="dropdown box-shadow">
        {optionList.map((el) => (
          <li key={el} className="item">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
