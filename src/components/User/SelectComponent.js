import React from "react";
import { Link } from "react-router-dom";

import LayoutHome from "../LayoutHome/LayoutHome";

export const SelectComponent = () => {
    return (
        <div className="SelectComponent">
            <LayoutHome/>
            <Link className="social">social</Link><br/>
            <Link className="productiva">productivo</Link>
        </div>
    );
}