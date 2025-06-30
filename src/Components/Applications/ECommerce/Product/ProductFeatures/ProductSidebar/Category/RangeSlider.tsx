import { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import { MAX, MIN, STEP, ThemePrimary } from "../../../../../../../Constants";
import { useAppDispatch } from "../../../../../../../ReduxToolkit/Hooks";
import { filterPrice } from "../../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";

const RangeSlider = () => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState([20, 50]);
  const priceHandle = (value: number[]) => {
    setValues(value);
    dispatch(filterPrice(value));
  };

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => priceHandle(values)}
      renderTrack={({ props, children }) => (
        <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} className="range-track">
          <output className="price-range-output">{values[0]}</output>
          <div ref={props.ref} className="range-track-bar" style={{ background: getTrackBackground({ values, colors: ["#ccc", ThemePrimary, "#ccc"], min: MIN, max: MAX }) }}>
            {children}
          </div>
          <output className="price-range-output">{values[1]}</output>
        </div>
      )}
      renderThumb={({ props, index }) => <div {...props} key={index} className="price-range-thumb" style={{ ...props.style, backgroundColor: ThemePrimary }}></div>}
    />
  );
};

export default RangeSlider;
