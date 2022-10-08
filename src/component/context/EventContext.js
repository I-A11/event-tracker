import React, { useState, useEffect, useContext } from "react";

const EventContext = React.createContext();

export const EventProvider = ({ children }) => {
  const [event, setEvent] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [dayEvent, setDayEvent] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

  const toggleError = (show, msg) => {
    setError({
      show,
      msg,
    });
    setTimeout(() => {
      setError({
        show: false,
        msg: "",
      });
    }, 3000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if ((event, start, end, location, url)) {
      const newEvent = { event, start, end, location, url };
      setDayEvent((oldEvent) => {
        return [...oldEvent, newEvent];
      });
      console.log(newEvent);
      setEvent("");
      setStart("");
      setEnd("");
      setLocation("");
      setUrl("");
    } else {
      toggleError(true, "Sorry, All fields have to be filled");
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
        setError,
        submitHandler,
        toggleError,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};
