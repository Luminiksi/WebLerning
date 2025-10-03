import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header";
import {useEffect, useRef, useState} from "react";
import {cardArray} from "../constants";

export const Layout = () => {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);
    const headerSearch = (event) => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    const headerSearchArray = (event) => {
        setProducts(cardArray.filter((p) => p.title.includes(searchText) || p.price.includes(searchText)))
    }

    return (
        <>
            <Header/>
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                value={searchText}
                                onChange={headerSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={headerSearchArray}>
                                <img className="search-btn__icon" src="/image/search.svg" alt="search"/>
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{products: products}}/>
            </main>
        </>
    )
}