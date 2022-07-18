import { DatePicker, DatePickerProps } from "antd";
import { useState } from "react";
import moment from 'moment'
import PickerTag from "antd/lib/date-picker/PickerTag";


// const DatePicker = (date, dateString) => {
//   console.log(date, dateString);
// };

export default function CalendarPage() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  
    const onChange: DatePickerProps["onChange"] = (date, dateString: string) => {
      console.log(date, dateString); // date: moment, dateString: string
      // console.log(_months)
      setDay(dateString);
      //////


      
      const date2 = new Date(dateString)

      console.log(date2)

      const yyyy = date2.getFullYear();
      const mm = date2.getMonth() + 1;

      console.log(yyyy, mm)
      setMonth(String(mm));

   
      
      //  console.log(Moment._months);
      // setMonth(string)
      // setMonth(dateString)
    }
    return (
      <>
        <DatePicker onChange={onChange} /> <br />
        <div>{day}</div>
        <div>{month}월</div>
        {/* <DatePicker picker="month" defaultValue={moment("2015-06", "YYYY-MM")} /> */}
      </>
    );
}