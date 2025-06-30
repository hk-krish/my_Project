import { GridTableHeadData } from "../../../../Data/UiKits/Grid";

const GridTableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        {GridTableHeadData &&
          GridTableHeadData.map((item, index) => (
            <th key={index} className="text-center">
              <p>{item.text1} </p>
              {item.class ? <small className={item.class}>{item.text2}</small> : <small>{item.text2}</small>}
            </th>
          ))}
      </tr>
    </thead>
  );
};
export default GridTableHead;
