import WhiteCornerPng from "@images/system/WhiteCorner.png";
import LightGrayCornerPng from "@images/system/LightGrayCorner.png";

export default function CornerElement({ color }) {
  return (
    <div className="corner-element d-flex jcc aic">
      <img
        alt="corner-element"
        src={color ? LightGrayCornerPng : WhiteCornerPng}
      />
    </div>
  );
}
