import {
  createContext,
  FC,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { socket } from "../socket";

interface Props {
  children: ReactNode;
}

const TrackContext = createContext({});

export const StateProvider: FC<Props> = ({ children }) => {
  const [position, setPosition] = useState<any>(null);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect to server");
    });

    socket.on("gps", (gps) => {
      setOnline(true);
      let data = [33.9715904, -6.8498129];
      setPosition(gps);
    });

    socket.on("disconnect", () => {
      setOnline(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  return (
    <TrackContext.Provider value={{ position, online }}>
      {children}
    </TrackContext.Provider>
  );
};

export const useProps = () => {
  return useContext(TrackContext);
};
