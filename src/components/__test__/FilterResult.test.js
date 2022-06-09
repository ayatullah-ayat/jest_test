import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import FilterResult from "../FilterResult";



describe('FilterResult', () => {
    
    
    it('should render name field',() => {
        render(<FilterResult />);
        const nameInput = screen.getByLabelText("Name");
        expect(nameInput).toBeInTheDocument();
    });


    it('should render minimum score field',() => {
        render(<FilterResult />);
        const scoreInput = screen.getByLabelText("Minimum Score");
        expect(scoreInput).toBeInTheDocument();
    });


    it('should render order by select element with label',() => {
        render(<FilterResult />);
        const selectOrderBy = screen.getByLabelText("Order By");
        expect(selectOrderBy).toBeInTheDocument();
    });

    it('should return true while select 1st option', () => {
        render(<FilterResult />);
        const selectDate = screen.getByTestId("select-date");
        fireEvent.change(selectDate, {target: {value: 0 }})

        let options = screen.getAllByTestId('select-item')
        expect(options[0].selected).toBeTruthy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
    });

    it('should have clear button', () => {
        render(<FilterResult />);
        const clearBtn = screen.getByRole("button", { name: /clear/i});
        expect(clearBtn).toBeInTheDocument();
    });
});


