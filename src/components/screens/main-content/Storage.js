import ClassBlockElement from "@components/elements/ClassBlockElement";
import DatalistElement from "@components/elements/DatalistElement";
import FoodElement from "@components/elements/FoodElement";
import SelectElement from "@components/elements/SelectElement";
import { FormProvider, useForm } from "react-hook-form";
import { ingredients } from "@data/ingredients";
import { useNavigate } from "react-router-dom";

import "@styles/screens//main-content/Storage.css";

import bgImageColor from "@images/bgImageColor.png";

import { ReactComponent as Add } from "@icons/actions/Add.svg";
import { ReactComponent as ArrowRightUp } from "@icons/system/ArrowRightUp.svg";
import { useState } from "react";
import { useMemo } from "react";

export default function Storage() {
  const navigate = useNavigate();
  const methods = useForm();

  const [selectValue, setSelectValue] = useState(null);
  const dataListView = useMemo(() => {
    return (
      <DatalistElement
        inputName="Ingridient"
        placeholder="Ingridient"
        dataList={selectValue ? ingredients[selectValue] : []}
      />
    );
  }, [selectValue]);

  return (
    <div className="main-container storage-container mt-70">
      <div className="items-navigation-container">
        <FormProvider {...methods}>
          <SelectElement
            defaultName={"Category"}
            optionList={Object.keys(ingredients)}
            selectValue={setSelectValue}
          />
          {dataListView}
          <input placeholder="Amount" />
          <button className="add">
            <Add /> Add
          </button>
        </FormProvider>
      </div>
      <div className="items-container">
        <div className="items-classes">
          <ClassBlockElement
            icon={"AL"}
            title={"All categories"}
            productsCount={17}
            selected={true}
          />
          <ClassBlockElement icon={"FO"} title={"Meat"} productsCount={5} />
          <ClassBlockElement icon={"FU"} title={"Fruits"} productsCount={8} />
          <ClassBlockElement icon={"DA"} title={"Dairy"} productsCount={4} />
        </div>
        <div className="items-list">
          <div className="items-list-header">
            <p>UID</p>
            <p>Picture</p>
            <p>Product name</p>
            <p>Amount (counts)</p>
            <p>Action</p>
          </div>
          <div className="items-list-scroll">
            <>
              <p className="class-header">Meat (5)</p>
              <FoodElement
                id={"1A3BDC6"}
                img={"PO"}
                name={"Pork"}
                amount={300}
              />
              <FoodElement
                id={"1A3BDC7"}
                img={"CH"}
                name={"Chicken"}
                amount={1100}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"BE"}
                name={"Beef"}
                amount={250}
              />
            </>
            <>
              <p className="class-header">Fruits (8)</p>
              <FoodElement
                id={"1A3BDC6"}
                img={"AP"}
                name={"Apples"}
                amount={3}
              />
              <FoodElement
                id={"1A3BDC7"}
                img={"BA"}
                name={"Bananas"}
                amount={5}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"OR"}
                name={"Oranges"}
                amount={2}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"PE"}
                name={"Pears"}
                amount={4}
              />
              <FoodElement id={"1A3BDC8"} img={"KI"} name={"Kiwi"} amount={1} />
              <FoodElement
                id={"1A3BDC8"}
                img={"OR"}
                name={"Oranges"}
                amount={2}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"PE"}
                name={"Pears"}
                amount={4}
              />
              <FoodElement
                id={"1A3BDC7"}
                img={"BA"}
                name={"Bananas"}
                amount={5}
              />
            </>
            <>
              <p className="class-header">Dairy (4)</p>
              <FoodElement
                id={"1A3BDC6"}
                img={"MI"}
                name={"Milk"}
                amount={800}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"CH"}
                name={"Cheese"}
                amount={400}
              />
              <FoodElement
                id={"1A3BDC6"}
                img={"YO"}
                name={"Yogurt"}
                amount={145}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"BU"}
                name={"Butter"}
                amount={240}
              />
            </>
          </div>
        </div>
        <div className="share-container">
          <div className="custom-picture-container">
            <img alt="custom__picture" src={bgImageColor} />
          </div>
          <div className="dishes-list-container">
            <img alt="dishes__picture" src={bgImageColor} />
            <div className="dishes-generation-button">
              <svg width="24" height="24" className="top-right">
                <defs>
                  <mask id="myMask">
                    <rect width="100%" height="100%" fill="white" />
                    <circle cx="0" cy="0" r="24" fill="black" />
                  </mask>
                </defs>
                <rect width="24" height="24" fill="white" mask="url(#myMask)" />
              </svg>
              <svg width="24" height="24" className="bottom-left">
                <defs>
                  <mask id="myMask">
                    <rect width="100%" height="100%" fill="white" />
                    <circle cx="0" cy="0" r="24" fill="black" />
                  </mask>
                </defs>
                <rect width="24" height="24" fill="white" mask="url(#myMask)" />
              </svg>
              <button onClick={() => navigate("/generation")}>
                Go to generation <ArrowRightUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
