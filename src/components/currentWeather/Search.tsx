import React, { useState, useContext } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { BtnSearch } from "../../interface/interface";
import { ContextProps } from "../../interface/interface";
import { AppContext } from "../../context";

const Search: React.FC<BtnSearch> = ({ toShow, show }): JSX.Element => {
    const [citySelected, setCitySelected] = useState<string>();
    const globalContext = useContext(AppContext);
    const { getDataByCityName } = globalContext as ContextProps;
    //const dataShow = useDataByCity(citySelected!);

    //console.log(currentWeather, forecast);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        e.preventDefault();
        setCitySelected(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (citySelected) {
            try {
                setTimeout(() => {
                    getDataByCityName(citySelected!);
                }, 500);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            <div
                className={
                    show
                        ? "container-search container-search-active"
                        : "container-search"
                }
            >
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        name="search"
                        onChange={handleChange}
                        value={citySelected}
                    />
                    <button className="btn-search">Search</button>
                </form>
                <button className="closeIcon" onClick={toShow}>
                    <IoClose />
                </button>
            </div>
            <div className={show ? "bg-search-container" : ""}></div>
        </>
    );
};

export default Search;
