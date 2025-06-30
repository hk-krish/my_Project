import Swal from "sweetalert2";
import { EventClickArg } from "@fullcalendar/core";
import { Primary } from "../../../../Constants";

export const EventClick = (eventClick: EventClickArg) => {
  
  Swal.fire({
    title: eventClick.event.title,
    html: `
    <div class="table-responsive">
      <table class="table">
        <tbody>
          <tr>
            <td>Title</td>
            <td><strong>${eventClick.event.title}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>            
      `,
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: Primary,
    confirmButtonText: "Remove Event",
    cancelButtonText: "Close",
  }).then((result) => {
    if (result.value) {
      eventClick.event.remove();
      Swal.fire({title:"Deleted!", text:"Your Event has been deleted.", icon:"success",confirmButtonColor: Primary});
    }
  });
};
