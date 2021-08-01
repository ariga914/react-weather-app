import "./App.css";
import Weather from "./components/Weather";
import FreeSpace from "./components/FreeSpace";
import { Fragment } from "react";

function App() {
    const cities = [
        {
            city_name: "Tokyo",
            color_name: "blue",
        },
        {
            city_name: "London",
            color_name: "yellow",
        },
        {
            city_name: "Paris",
            color_name: "green",
        },
        {
            city_name: "Los Angeles",
            color_name: "red",
        },
    ];

    return (
        <div className="m-5 box-shadow">
            <FreeSpace />
            <div className="min-h-screen flex justify-center items-center flex-wrap">
                {cities.map((city, index) => (
                    <Weather
                        kyes={index}
                        city_name={city.city_name}
                        color_name={city.color_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
