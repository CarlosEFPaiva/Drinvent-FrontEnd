import { useState, useEffect, createContext } from "react";
import Splash from "../components/Splash";
import BlankSpace from "../components/BlankSpace";

import useApi from "../hooks/useApi";

const ActivitiesInfoContext = createContext();
export default ActivitiesInfoContext;

export function ActivityInfoProvider({ children }) {
  const [dates, setDates] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { talks } = useApi();

  useEffect(() => {
    talks.getDates()
      .then((res) => {
        setDates(res.data);
      }).catch(error => {
      /* eslint-disable-next-line no-console */
        console.error(error);
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      talks.getActivitiesByDate(selectedDate.id)
        .then((res) => {
          setActivities(filterEventsByLocation(res.data));
          setLoading(false);
        }).catch(error => {
        /* eslint-disable-next-line no-console */
          console.error(error);
          setError(error);
          setLoading(false);
        });
    }
  }, [selectedDate]);

  if (!dates && !error) {
    return (
      <Splash
        loading
        hidePicture
        minHeight="0px"
        background="#FFF"
        loaderColor="#000"
      />
    );
  }

  if (error) {
    let message = error.response ? error.response.data.message : "Could not connect to server. Please try again later.";
    return (
      <Splash
        message={message}
        hidePicture
        minHeight="0px"
        background="#FFF"
        loaderColor="#000"
      />
    );
  }

  return (
    <ActivitiesInfoContext.Provider value={{ dates, selectedDate, setSelectedDate, activities, loading, setLoading, activityInfoError: error }}>
      <BlankSpace
        isTransparent
        isLoading
        isShown={loading}
      />
      { children }
    </ActivitiesInfoContext.Provider>
  );
}

function filterEventsByLocation(rawEvents) {
  const filteredData = [
    { locationId: 1, locationName: "Auditório Principal", events: [] },
    { locationId: 2, locationName: "Auditório Lateral", events: [] },
    { locationId: 3, locationName: "Sala de Workshop", events: [] },
  ];
  rawEvents.forEach((event) => {
    filteredData[event.locations.id - 1].events.push(event);
  });
  return filteredData;
}
