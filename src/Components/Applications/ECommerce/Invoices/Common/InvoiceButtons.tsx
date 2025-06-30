import { Link } from "react-router-dom";
import { Cancel, Href, PrintInvoice } from "../../../../../Constants";
import { routes } from "../../../../../Routers/routes";
import { InvoicePrintType } from "../../../../../Types/EcommerceType";

export const InvoiceButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {

  return (
    <span style={{ display: "flex", justifyContent: "center", gap: 15 }} className="pb-5">
      <Link onClick={() => handlePrint()} style={{ background: "var(--theme-default)", color: "rgba(255, 255, 255, 1)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} to={Href}>
        {PrintInvoice}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
      <Link style={{ background: "rgba(43, 94, 94, 0.1)", color: "var(--theme-default)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} to={routes.ECommerce.Product} download>
        {Cancel}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
    </span>
  );
};
