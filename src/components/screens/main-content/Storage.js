import ClassBlockElement from "@components/elements/ClassBlockElement";
import DatalistElement from "@components/elements/DatalistElement";
import FoodElement from "@components/elements/FoodElement";
import SelectElement from "@components/elements/SelectElement";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "@styles/screens//main-content/Storage.css";

import { ReactComponent as Add } from "@icons/actions/Add.svg";
import { ReactComponent as ArrowRightUp } from "@icons/system/ArrowRightUp.svg";

export default function Storage() {
  const navigate = useNavigate();
  const methods = useForm();

  return (
    <div className="main-container storage-container mt-70">
      <div className="items-navigation-container">
        <FormProvider {...methods}>
          <SelectElement
            defaultName={"Class"}
            optionList={[
              "Meat",
              "Milk",
              "Herbs",
              "Spices",
              "Fruits",
              "Vegetables",
            ]}
          />
          <DatalistElement
            inputName="Ingridient"
            placeholder="Ingridient"
            dataList={["Pork", "Chicken", "Veal", "Neck"]}
          />
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
            productsCount={15}
            selected={true}
          />
          <ClassBlockElement icon={"FO"} title={"Meat"} productsCount={5} />
          <ClassBlockElement icon={"FU"} title={"Fruits"} productsCount={10} />
          <ClassBlockElement icon={"MI"} title={"Milk"} productsCount={7} />
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
                img={"AL"}
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
                img={"VE"}
                name={"Veal"}
                amount={250}
              />
            </>
            <>
              <p className="class-header">Fruits (10)</p>
              <FoodElement
                id={"1A3BDC6"}
                img={"AL"}
                name={"Pork"}
                amount={110}
              />
              <FoodElement
                id={"1A3BDC7"}
                img={"VE"}
                name={"Chicken"}
                amount={250}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"VE"}
                name={"Veal"}
                amount={300}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"VE"}
                name={"Veal"}
                amount={420}
              />
            </>
            <>
              <p className="class-header">Milk (5)</p>
              <FoodElement
                id={"1A3BDC6"}
                img={"AL"}
                name={"Pork"}
                amount={140}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"VE"}
                name={"Veal"}
                amount={420}
              />
              <FoodElement
                id={"1A3BDC6"}
                img={"CO"}
                name={"Pork"}
                amount={1420}
              />
              <FoodElement
                id={"1A3BDC8"}
                img={"AF"}
                name={"Veal"}
                amount={420}
              />
            </>
          </div>
        </div>
        <div className="share-container">
          <div className="custom-picture-container">
            <img
              alt=""
              src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
            />
          </div>
          <div className="dishes-list-container">
            <img
              alt=""
              src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
            />
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
