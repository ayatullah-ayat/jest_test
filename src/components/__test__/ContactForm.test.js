import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import ContactForm from "../ContactForm";


describe('ContactForm', () => {


    it('should have get in touch title', () => {
        render(<ContactForm />);
        const heading2 = screen.getByRole("heading");
        screen.getByText(/Get In Touch+$/i);
        expect(heading2).toBeInTheDocument();
    });
    
    it('should render name field',() => {
        render(<ContactForm />);
        const nameInput = screen.getByLabelText(/name/i);
        expect(nameInput).toBeInTheDocument();
    });
    
    it('should render email field',() => {
        render(<ContactForm />);
        const nameInput = screen.getByLabelText(/email/i);
        expect(nameInput).toBeInTheDocument();
    });

    it('should render message field',() => {
        render(<ContactForm />);
        const nameInput = screen.getByLabelText(/message/i);
        expect(nameInput).toBeInTheDocument();
    });

    it('should have send button', () => {
        render(<ContactForm />);
        const sendBtn = screen.getByRole("button", { name: /send/i});
        expect(sendBtn).toBeInTheDocument();
    });
});
