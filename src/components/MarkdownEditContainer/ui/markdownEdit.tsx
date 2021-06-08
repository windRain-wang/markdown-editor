import React from "react";
import "./index.css";

interface IProps {
  parse: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  htmlMarkdownStr: string;
}

export default function MarkdownEdit(props: IProps) {
  return (
    <div className="markdownEditContainer">
      <textarea className="edit" onChange={props.parse} />
      <div
        className="show"
        dangerouslySetInnerHTML={{ __html: props.htmlMarkdownStr }}
      ></div>
    </div>
  );
}
