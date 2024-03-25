import { useWidgetModelState } from "../lib/widget-model";

export default function Component() {
  const [name] = useWidgetModelState('name');

  return <h1>Hello, {name}!</h1>;
}
