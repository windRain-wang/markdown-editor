import React from "react";
import "./index.css";
import { TextAreaRef } from "./types";

interface IProps {
  htmlMarkdownStr: string;
  markdownValue: string;
  setMarkdownValue: (v: string) => void;
}
export default React.forwardRef(
  (props: IProps, ref: React.Ref<TextAreaRef>) => (
    <div className="markdownEditContainer">
      <textarea
        className="edit"
        ref={ref}
        value={props.markdownValue}
        onChange={(e) => {
          const value = e.target.value;
          props.setMarkdownValue(value);
        }}
      />
      <div
        className="show"
        dangerouslySetInnerHTML={{ __html: props.htmlMarkdownStr }}
      ></div>
    </div>
  )
);
