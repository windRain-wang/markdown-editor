import React from "react";
import MarkdownEditContainer from "./components/MarkdownEditContainer";
import MarkdownTool from "./components/MarkdownTool";
import { ControlTypes } from "./controlTypes";

import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

marked.setOptions({
  breaks: true,
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  }
});

const parse = (value: string): string => {
  return marked(value);
  // this.setState({
  //   htmlMarkdownStr
  // });
};

class MarkdownControl extends React.Component<{}, ControlTypes> {
  state: ControlTypes = {
    // markdown 文本
    markdownValue: "",
    // 转换后的 dom 结构
    htmlMarkdownStr: "",
    // 应该还要有撤回操作， 要有一个数据来保存 每次修改的值
    // textArea 本身好像有 记录以前的值， 是否触发某个事件就可以了？
    historyValus: [],
    setMarkdownValue: this.setMarkdownValue.bind(this),
    getSelectionPosition: this.getSelectionPosition.bind(this)
  };
  // MarkdownEditContainerRef
  editorRef = React.createRef<MarkdownEditContainer>();

  // 改变 markdown 和 htmlMarkdownStr 的方法
  setMarkdownValue(newValue: string) {
    this.setState({
      markdownValue: newValue,
      htmlMarkdownStr: parse(newValue)
    });
  }

  // 获得 selectionPosition
  // getSelectionPosition() {
  //   if (this.editorRef.current) {
  //     return this.editorRef.current.getSelectionPosition();
  //   } else {
  //     return [0, 0];
  //   }
  // }

  // 获得光标的位置 [起点, 终点]
  getSelectionPosition() {
    if (this.editorRef.current) {
      const { selectionStart, selectionEnd } = this.editorRef.current;
      return [selectionStart, selectionEnd];
    }
    return [];
  }

  render() {
    return (
      <>
        <MarkdownTool {...this.state} />
        <MarkdownEditContainer {...this.state} ref={this.editorRef} />
      </>
    );
  }
}

export default MarkdownControl;
