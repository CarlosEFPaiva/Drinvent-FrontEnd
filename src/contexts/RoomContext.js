import { createContext, useState } from "react";

const RoomContext = createContext();
export default RoomContext;

export function RoomProvider({ children }) {
  const [hasRoom, setHasRoom] = useState(false);
  const [choosing, setChoosing] = useState(false);

  return (
    <RoomContext.Provider value={{ hasRoom, setHasRoom, choosing, setChoosing }}>
      {children}
    </RoomContext.Provider>
  );
}
