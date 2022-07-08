import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { addDays } from 'date-fns'




export default function Calender() {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState(null)
    function onChangeDateHandler(dates) {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
        console.log(start, end)
    }

    return (
        <form>
            <fieldset>
                <label>
                    <p>Please select the Dates you would like to rent this Product</p>
                    <DatePicker
                        dateFormat={'yyyy/MM/dd'}
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={addDays(new Date(), 1)}
                        maxDate={addDays(new Date(), 365)}
                        onChange={onChangeDateHandler} />
                </label>
            </fieldset>
            <input
                type='submit'
                value='submit'
                onClick={() => console.log('')}
            />
        </form>
    )
}