import {
  createContext,
  FC,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import io from "socket.io-client";

interface Props {
  children: ReactNode;
}

const Store = createContext({});

export const StateProvider: FC<Props> = ({ children }) => {
  const [position, setPosition] = useState<any>([0, 0]);
  const [online, setOnline] = useState(false);
  const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000";
    const socket = io(url);

    socket.on("connect", () => {
      console.log("connect to server");
    });

    socket.on("gps", (gps) => {
      setOnline(true);
      setPosition(gps.coordinate);
      setSpeed(gps.speed);
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
    <Store.Provider value={{ position, online, speed }}>
      {children}
    </Store.Provider>
  );
};

export const useGloble = () => {
  return useContext(Store);
};
