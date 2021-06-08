import React, { useState, ChangeEvent } from "react";
import MarkdownEdit from "./ui/markdownEdit";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

marked.setOptions({
  breaks: true,
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    console.log(hljs.highlight(code, { language }).value);
    return hljs.highlight(code, { language }).value;
  }
});

interface IState {
  htmlMarkdownStr: string;
  parse: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

class MarkdownEditContainer extends React.Component<{}, IState> {
  public state = {
    htmlMarkdownStr: "",
    parse: this.parse.bind(this)
  };

  parse(event: ChangeEvent<HTMLTextAreaElement>) {
    const htmlMarkdownStr: string = marked(event.target.value);
    this.setState({
      htmlMarkdownStr
    });
  }

  render() {
    return <MarkdownEdit {...this.state} />;
  }
}

export default MarkdownEditContainer;
