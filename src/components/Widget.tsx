import { useWidgetModelState } from "../lib/widget-model";
import "../styles/globals.css";

export default function Widget() {
  const [name] = useWidgetModelState("name");

  return <h1 className="text-green-500 text-3xl">Hello, {name}!</h1>;
}
