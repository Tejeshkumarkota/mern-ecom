import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalenderView = () => {
    const [startDate, setstartDate] = useState(new Date());
    const handleStartDate = (date) => {
		setstartDate(date);
	};

    return (
            <Fragment>
                <div className="custom-datepicker">
                    <DatePicker 
                    selected={startDate} 
                    onChange={handleStartDate} 
                    peekNextMonth 
                    showMonthDropdown
                    showYearDropdown
                    inline
                    dropdownMode="select"/>
                </div>
            </Fragment> 
        )
    }
export default CalenderView;