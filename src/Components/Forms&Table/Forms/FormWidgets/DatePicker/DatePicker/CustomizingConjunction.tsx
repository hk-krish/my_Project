import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const CustomizingConjunction = () => {
  const [startDate, setStartDate] = useState<DateObject[]>([]);
  const handleChange = (date: DateObject[]) => setStartDate(date);

  return <DatePicker inputClass="form-control" multiple dateSeparator="::" value={startDate} onChange={handleChange} />;
};
export default CustomizingConjunction;
