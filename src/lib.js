export const WEATHER_STATES = {
    CLEAR: "c",
    LIGHT_CLOUD: "lc",
    HEAVY_CLOUD: "hc",
    LIGHT_RAIN: "lr",
    HEAVY_RAIN: "hr"
};

export const WEATHER_STATES_TO_ICON = {
    [WEATHER_STATES.CLEAR]: "fas fa-sun",
    [WEATHER_STATES.LIGHT_CLOUD]: "fas fa-cloud-sun",
    [WEATHER_STATES.HEAVY_CLOUD]: "fas fa-cloud",
    [WEATHER_STATES.LIGHT_RAIN]: "fas fa-cloud-sun-rain",
    [WEATHER_STATES.HEAVY_RAIN]: "fas fa-cloud-showers-heavy"
};

export const weatherProps = [
    {
        label: "Humidity",
        propName: "humidity",
        units: "%"
    },
    {
        label: "Wind Speed",
        propName: "wind_speed",
        units: "knots"
    },
    {
        label: "Air Pressure",
        propName: "air_pressure",
        units: "millibars"
    },
    {
        label: "Predictability",
        propName: "predictability",
        units: "%"
    }
];
