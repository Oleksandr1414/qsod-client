import CustomSelect from "../custom-select/CustomSelect";
import CustomDatalist from "../custom-select/CustomDatalist";
import { useNavigate } from "react-router-dom";

import "../../styles/main-blocks/Storage.css";

import { ReactComponent as Add } from "./../../assets/actions/Add.svg";
import { ReactComponent as Edit } from "./../../assets/actions/Edit.svg";
import { ReactComponent as Delete } from "./../../assets/actions/Delete.svg";
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
          <div className="class-block">
            <div className="class-icon">AL</div>
            <div className="class-title">All categories</div>
            <div className="class-subtitle">15 products available</div>
          </div>
          <div
            className="class-block"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="class-icon">FO</div>
            <div className="class-title">Meat</div>
            <div className="class-subtitle">5 products available</div>
          </div>
          <div
            className="class-block"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="class-icon">FU</div>
            <div className="class-title">Fruits</div>
            <div className="class-subtitle">10 products available</div>
          </div>
          <div
            className="class-block"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="class-icon">MI</div>
            <div className="class-title">Milk</div>
            <div className="class-subtitle">5 products available</div>
          </div>
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
              <div className="items-block">
                <p>1A3BDC6</p>
                <div className="items-icon">AL</div>
                <p>Pork</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
              <div className="items-block">
                <p>1A3BDC7</p>
                <div className="items-icon">CH</div>
                <p>Chicken</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
              <div className="items-block">
                <p>1A3BDC8</p>
                <div className="items-icon">VE</div>
                <p>Veal</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
            </>
            <>
              <p className="class-header">Fruits (10)</p>
              <div className="items-block">
                <p>1A3BDC6</p>
                <div className="items-icon">AL</div>
                <p>Pork</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
              <div className="items-block">
                <p>1A3BDC7</p>
                <div className="items-icon">CH</div>
                <p>Chicken</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
              <div className="items-block">
                <p>1A3BDC8</p>
                <div className="items-icon">VE</div>
                <p>Veal</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
              <div className="items-block">
                <p>1A3BDC8</p>
                <div className="items-icon">VE</div>
                <p>Veal</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
            </>
            <>
              <p className="class-header">Milk (5)</p>
              <div className="items-block">
                <p>1A3BDC6</p>
                <div className="items-icon">AL</div>
                <p>Pork</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
              <div className="items-block">
                <p>1A3BDC7</p>
                <div className="items-icon">CH</div>
                <p>Chicken</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
              <div className="items-block">
                <p>1A3BDC8</p>
                <div className="items-icon">VE</div>
                <p>Veal</p>
                <input className="items-value" defaultValue={250} disabled />
                <div className="items-actions">
                  <button className="edit">
                    <Edit />
                  </button>
                  <button className="delete">
                    <Delete />
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
        <div className="share-container">
          <div className="custom-picture-container">
            <img
              alt=""
              src="https://www.warpaintjournal.com/wp-content/uploads/2020/08/Indian-Cuisine.jpg"
            />
          </div>
          <div className="dishes-list-container">
            <img
              alt=""
              src="https://img.jakpost.net/c/2018/06/27/2018_06_27_48298_1530062479._large.jpg"
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
