import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const addEvent = (event) => {
    setTimeline((prev) => [...prev, event]);
  };
  return (
    <TimelineContext.Provider value={{ timeline, addEvent }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;