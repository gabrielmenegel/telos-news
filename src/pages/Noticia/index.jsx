import React from "react";
import HeaderNoticia from '../../components/headerNoticia'
import Banner from '../../components/banner'
import MainNoticia from '../../components/mainNoticia'
import Carousel from '../../components/carousel'
import { Comment } from '../../components/comment'
import { Link } from "react-router-dom"

export function Noticia() {
    return (
        <>
            <div className="app" >
                <Link to="/">Home</Link>
                <HeaderNoticia />
                <Banner />
                <div className="mainScroll">
                    <div style={{ background: "white", position: "relative", borderRadius: "18px", paddingBottom: "10rem" }}>
                        <MainNoticia />
                        <Carousel />
                        <Comment />
                    </div>
                </div>
            </div>
        </>
    )
}