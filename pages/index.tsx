import { useEffect } from "react";
import play from "../playgorund";

export default function Home() {
  useEffect(() => {
    play();
  }, []);
  const message: string = "Hello world";
  return <div>{message}</div>;
}
