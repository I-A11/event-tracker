import React, { useState, useEffect, useContext } from "react";

const EventContext = React.createContext();

export const EventProvider = ({ children }) => {
  const [event, setEvent] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [dayEvent, setDayEvent] = useState([]);
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if ((event, start, end, location, url)) {
      setError(false);
      const newEvent = { event, start, end, location, url };
      setDayEvent((oldEvent) => {
        return [...oldEvent, newEvent];
      });
      setEvent("");
      setStart("");
      setEnd("");
      setLocation("");
      setUrl("");
    } else {
      setError(true);
    }
  };

  return (
    <EventContext.Provider
      value={{
        event,
        setEvent,
        start,
        setStart,
        end,
        setEnd,
        location,
        setLocation,
        url,
        setUrl,
        dayEvent,
        setDayEvent,
        error,
        submitHandler,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};
