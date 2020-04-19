import React, { useState } from "react";
import { weatherProps, WEATHER_STATES_TO_ICON } from "./lib";
import DataBox from "./DataBox";

const ForecastToday = (props) => {
  const { max_temp, min_temp, the_temp } = props;
  const temp = { p1: max_temp, p2: min_temp, p3: the_temp };
  return (
    <div className="today">
      <div className="row-top">
        <div className={WEATHER_STATES_TO_ICON[props.weather_state_abbr]}></div>
        <DataBox {...temp} />
      </div>
      <div className="box">
        {weatherProps.map((value, index) => {
          const propValue = props[value.propName];
          debugger;
          const data = { p1: value.label, p2: propValue, p3: value.units };
          return <DataBox {...data} />;
        })}
      </div>
      <DataBox {...weatherProps} />
    </div>
  );
};

export default ForecastToday;
