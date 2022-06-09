import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from '../Nav';


const MackToLinks = ()=> {
    return (<BrowserRouter>
        <Nav/>
    </BrowserRouter>)
}


test('should find links', async() => {
    render(<MackToLinks/>);
    const linkContainer = screen.getAllByTestId('nav-link');
    expect(linkContainer.length).toBe(2);
});

test('should find video games link', async() => {
    render(<MackToLinks/>);
    const linkGame = screen.getByRole("link", { name: /Video Games/i});
    expect(linkGame).toBeInTheDocument();
});

test('should find contact link', async() => {
    render(<MackToLinks/>);
    const linkContact = screen.getByRole("link", { name: /Contact/i});
    expect(linkContact).toBeInTheDocument();
});
