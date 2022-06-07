import React from "react";
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/contact',
        element: <Contact />
    }
];

export default routes;