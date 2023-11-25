import CustomDatalist from "../custom-select/CustomDatalist";
import CustomSelect from "../custom-select/CustomSelect";
import FoodBlock from "./storage/FoodBlock";
import ClassBlock from "./storage/ClassBlock";
import { useNavigate } from "react-router-dom";

import "../../styles/main-blocks/Storage.css";

import { ReactComponent as Add } from "./../../assets/actions/Add.svg";
import { ReactComponent as ArrowRightUp } from "./../../assets/actions/ArrowRightUp.svg";

export default function Storage() {
  const navigate = useNavigate();
  return (
    <div className="main-container storage-container">
      <div className="items-navigation-container">
        <CustomSelect
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
        <CustomDatalist dataList={["Pork", "Chicken", "Veal", "Neck"]} />

        <input placeholder="Amount" />

        <button className="add">
          <Add /> Add
        </button>
      </div>
      <div className="items-container">
        <div className="items-classes">
          <ClassBlock
            icon={"AL"}
            title={"All categories"}
            productsCount={15}
            selected={true}
          />
          <ClassBlock icon={"FO"} title={"Meat"} productsCount={5} />
          <ClassBlock icon={"FU"} title={"Fruits"} productsCount={10} />
          <ClassBlock icon={"MI"} title={"Milk"} productsCount={7} />
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
              <FoodBlock id={"1A3BDC6"} img={"AL"} name={"Pork"} amount={300} />
              <FoodBlock
                id={"1A3BDC7"}
                img={"CH"}
                name={"Chicken"}
                amount={1100}
              />
              <FoodBlock id={"1A3BDC8"} img={"VE"} name={"Veal"} amount={250} />
            </>
            <>
              <p className="class-header">Fruits (10)</p>
              <FoodBlock id={"1A3BDC6"} img={"AL"} name={"Pork"} amount={110} />
              <FoodBlock
                id={"1A3BDC7"}
                img={"VE"}
                name={"Chicken"}
                amount={250}
              />
              <FoodBlock id={"1A3BDC8"} img={"VE"} name={"Veal"} amount={300} />
              <FoodBlock id={"1A3BDC8"} img={"VE"} name={"Veal"} amount={420} />
            </>
            <>
              <p className="class-header">Milk (5)</p>
              <FoodBlock id={"1A3BDC6"} img={"AL"} name={"Pork"} amount={140} />
              <FoodBlock id={"1A3BDC8"} img={"VE"} name={"Veal"} amount={420} />
              <FoodBlock
                id={"1A3BDC6"}
                img={"CO"}
                name={"Pork"}
                amount={1420}
              />
              <FoodBlock id={"1A3BDC8"} img={"AF"} name={"Veal"} amount={420} />
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
