import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "../../../../Constants";
import { DefaultPaginationListProp } from "../../../../Types/BonusUi";

const DefaultPagination: React.FC<DefaultPaginationListProp> = ({ pageClass, pageColor, data, active, disabled, classLink, listClass, size }) => {
  return (
    <Pagination aria-label="Page navigation example" className={pageClass} size={size} listClassName={`${listClass} pagin-border-${pageColor} pagination-${pageColor}`}>
      {data &&
        data.map((item, index) => (
          <PaginationItem key={index} className={item.id === "Pagination3" && active ? "active" : ""}>
            <PaginationLink href={Href} className={`${classLink} ${item.id === "Pagination1" && disabled ? "disabled" : ""}`}>
              {item.text}
            </PaginationLink>
          </PaginationItem>
        ))}
    </Pagination>
  );
};
export default DefaultPagination;
