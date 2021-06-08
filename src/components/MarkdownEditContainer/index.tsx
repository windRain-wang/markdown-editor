import { useState, ChangeEvent } from "react";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./index.css";

marked.setOptions({
  breaks: true,
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    console.log(hljs.highlight(code, { language }).value);
    return hljs.highlight(code, { language }).value;
  }
});

function MarkdownEditContainer() {
  const [htmlMarkdownStr, setHtmlMarkdownStr] = useState("");
  const parse = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const htmlMarkdownStr = marked(event.target.value);
    setHtmlMarkdownStr(htmlMarkdownStr);
  };

  return (
    <div className="markdownEditContainer">
      <textarea className="edit" onChange={parse} />
      <div
        className="show"
        dangerouslySetInnerHTML={{ __html: htmlMarkdownStr }}
      ></div>
    </div>
  );
}

export default MarkdownEditContainer;
