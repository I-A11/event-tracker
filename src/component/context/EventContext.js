import React, { useState, useEffect, useContext } from "react";

const EventContext = React.createContext();

export const EventProvider = ({ children }) => {
  const getLocalStorage = () => {
    let dayEvent = localStorage.getItem("dayEvent");
    if (dayEvent) {
      return JSON.parse(localStorage.getItem("dayEvent"));
    } else {
      return [];
    }
  };

  const [event, setEvent] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [dayEvent, setDayEvent] = useState(getLocalStorage());
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

  useEffect(() => {
    localStorage.setItem("dayEvent", JSON.stringify(dayEvent));
  }, [dayEvent]);

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
