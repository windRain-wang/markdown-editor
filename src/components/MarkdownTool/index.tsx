import React from "react";
import MarkdownToolbars from "./ui/markdownToolbars";
import { tool, FontEnum, HeadLineEnum } from "./types";
import { ControlTypes } from "../../controlTypes";
import { handleFont, handleHeadLine } from "./utils";

interface IState {
  toolbars: tool[];
}

class MarkdownTool extends React.Component<ControlTypes, IState> {
  state: IState = {
    toolbars: [
      {
        name: "加粗",
        handleEvent: () => {
          const [start, end] = this.props.getSelectionPosition();
          const { markdownValue, setMarkdownValue } = this.props;
          const newMarkdownValue = handleFont(
            markdownValue,
            start,
            end,
            FontEnum.Blod
          );
          setMarkdownValue(newMarkdownValue);
        }
      },
      {
        name: "斜体",
        handleEvent: () => {
          const [start, end] = this.props.getSelectionPosition();
          const { markdownValue, setMarkdownValue } = this.props;
          const newMarkdownValue = handleFont(
            markdownValue,
            start,
            end,
            FontEnum.Italic
          );
          setMarkdownValue(newMarkdownValue);
        }
      },
      {
        name: "删除",
        handleEvent: () => {
          const [start, end] = this.props.getSelectionPosition();
          const { markdownValue, setMarkdownValue } = this.props;
          const newMarkdownValue = handleFont(
            markdownValue,
            start,
            end,
            FontEnum.Del
          );
          setMarkdownValue(newMarkdownValue);
        }
      },
      {
        name: "标题",
        handleEvent: () => {
          const [start] = this.props.getSelectionPosition();
          const { markdownValue, setMarkdownValue } = this.props;
          const newMarkdownValue = handleHeadLine(
            markdownValue,
            start,
            HeadLineEnum.H1
          );
          setMarkdownValue(newMarkdownValue);
        }
      }
    ]
  };

  render() {
    return <MarkdownToolbars toolbars={this.state.toolbars} />;
  }
}

export default MarkdownTool;
