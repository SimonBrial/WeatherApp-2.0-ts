/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useContext, useRef } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { BtnSearch } from "../../interface/interface";
import { ContextProps } from "../../interface/interface";
import { AppContext } from "../../context";
import { useOnClickOutside } from "../../hooks";
import Loading from "../loadder/Loading";

const Search: React.FC<BtnSearch> = ({ toShow, show }): JSX.Element => {
    const [citySelected, setCitySelected] = useState<string>();
    const [loader, setLoader] = useState<boolean>(false);

    const globalContext = useContext(AppContext);
    const { getDataByCityName } = globalContext as ContextProps;

    const sidebar = useRef(null);
    const handleClickOutside = () => toShow();
    useOnClickOutside(sidebar, handleClickOutside);

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
                setLoader(true);
                setTimeout(() => {
                    getDataByCityName(citySelected!);
                    setLoader(false);
                }, 500);
                setTimeout(() => {
                    toShow();
                }, 1000);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            <div
                ref={sidebar}
                className={
                    show
                        ? "container-search container-search-active"
                        : "container-search"
                }
            >
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search"
                            name="search"
                            onChange={handleChange}
                            value={citySelected}
                        />
                        <span className="searchIcon">
                            <IoSearch />
                        </span>
                        <button className="btn-search">Search</button>
                    </form>
                    <button className="closeIcon" onClick={toShow}>
                        <IoClose />
                    </button>
                </div>
                {loader ? (
                    <Loading />
                ) : (
                    <div>
                        <p>Let me know which weather you want to know!</p>
                    </div>
                )}
            </div>
            <div className={show ? "bg-search-container" : ""}></div>
        </>
    );
};

export default Search;
