import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateRange = () => {
  const [value, setValue] = useState<DateObject[]>([]);
  const handleDateChange = (date: DateObject[]) => setValue(date);

  return <DatePicker inputClass="form-control" range value={value} onChange={handleDateChange} />;
};
export default DateRange;
