import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import Home from "../Home";


describe('Home', () => {
    
    it('should have Loading content', () => {
        render(<Home />);
        const loadingElem = screen.getByText(/loading/i);
        expect(loadingElem).toBeInTheDocument();
        cleanup();
    });


    it('should render Not Found content', async() => {
        render(<Home />);
        const notFoundElem = await screen.findByText(/No Content Found/i);
        expect(notFoundElem).toBeInTheDocument();
    });
    
});
