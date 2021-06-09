import "./index.css";
import { tool } from "../types";
interface IProps {
  toolbars: tool[];
}
function markdownToolbars(props: IProps) {
  const tools = props.toolbars.map((t, i) => (
    <span className="tool" key={i} onClick={t.handleEvent}>
      {t.name}
    </span>
  ));
  return <div className="tool-bars">{tools.length && tools}</div>;
}

export default markdownToolbars;
