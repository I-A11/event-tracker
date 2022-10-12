import React, { useEffect } from "react";
import { useEventContext } from "../component/context/EventContext";
import Celebrate from "../assets/images/celebrate.webp";

const Event = () => {
  const { dayEvent } = useEventContext();

  return (
    <div>
      <div>
        <img className='mb-10 md:p-20' src={Celebrate} alt='celebrate' />
      </div>
      {dayEvent.map((item, index) => {
        const { event, start, end, location, url } = item;
        return (
          <div key={index}>
            <div>
              <h3>{event}</h3>
            </div>
            <div>
              <div>
                <p>{start}</p>
                <div>
                  to <p>{end}</p>
                </div>
              </div>
              <div>
                <p>{location}</p>
                <div>
                  <p>{url}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Event;
