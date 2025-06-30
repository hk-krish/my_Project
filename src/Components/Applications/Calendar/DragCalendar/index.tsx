import { useEffect } from "react";
import { Col } from "reactstrap";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import { calenderInitialList } from "../../../../Data/Applications/Calendar";
import { EventClick } from "./EventClick";
import EventLists from "./EventLists";

const DragCalendar = () => {

  const state = calenderInitialList;

  useEffect(() => {
    let draggableEl = document.getElementById("external-events") as HTMLElement;
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: (eventEl) => {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);

  return (
    <>
      <EventLists />
      <Col xxl="9" className="box-col-12">
        <div className="demo-app-calendar">
          <FullCalendar
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            rerenderDelay={10}
            eventDurationEditable={false}
            editable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={state.calendarEvents}
            eventClick={EventClick}
          />
        </div>
      </Col>
    </>
  );
};

export default DragCalendar;