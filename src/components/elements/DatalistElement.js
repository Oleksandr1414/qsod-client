import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

import "@styles/elements/DataListElement.css";

export default function DatalistElement({ dataList, placeholder, inputName }) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const nameInput = useRef();
  const nameDataList = useRef();

  function onFocusNameInput() {
    nameDataList.current.style.display = "flex";
  }

  useEffect(() => {
    if (!nameDataList.current) {
      return;
    }

    register(inputName, { required: `The ${inputName} is a required field.` });

    for (let option of nameDataList.current.options) {
      option.onclick = function () {
        setValue(inputName, option.value);
        nameInput.current.value = option.value;
        nameDataList.current.style.display = "none";
      };
    }
  }, [nameDataList]);

  function onInputNameInput() {
    currentFocus = -1;
    let text = nameInput.current.value.toUpperCase();
    for (let option of nameDataList.current.options) {
      if (option.value.toUpperCase().indexOf(text) > -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    }
  }
  let currentFocus = -1;
  function onKeyDownNameInput(e) {
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(nameDataList.current.options);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(nameDataList.current.options);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (nameDataList.current.options)
          nameDataList.current.options[currentFocus].click();
      }
    }
  }

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }

  window.addEventListener("click", function (e) {
    if (e.target.closest(".custom-datalist") === null && nameDataList.current) {
      nameDataList.current.style.display = "none";
    }
  });

  return (
    <div className="custom-datalist">
      <input
        list=""
        ref={nameInput}
        placeholder={placeholder}
        onFocus={onFocusNameInput}
        onInput={onInputNameInput}
        onKeyDown={onKeyDownNameInput}
        className={errors.country && "error"}
      />
      <datalist ref={nameDataList} className="datalist__container">
        {dataList.map((el) => (
          <option key={el} defaultValue={el}>
            {el}
          </option>
        ))}
      </datalist>
    </div>
  );
}
