import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './Home';
import BannerImage from './BannerImage';
import {Switch, Route, Redirect} from "react-router-dom";

const main =() => {
  return (
    <>
    <BannerImage />
    <Home />
    </>
    );
};

export default main;
