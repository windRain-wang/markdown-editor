import { FontEnum, HeadLineEnum } from "./types";

type fontFunction = (
  text: string,
  start: number,
  end: number,
  rule: FontEnum
) => string;
// **粗体**、*斜体*、~~删除文本~~
export const handleFont: fontFunction = (text, start, end, rule) => {
  const frontText = text.substring(0, start),
    usingText = text.substring(start, end),
    endText = text.substring(end);
  switch (rule) {
    case FontEnum.blod:
      return frontText.concat(`**${usingText}**`, endText);
    case FontEnum.italic:
      return frontText.concat(`*${usingText}*`, endText);
    case FontEnum.del:
      return frontText.concat(`~~${usingText}~~`, endText);
    default:
      return text;
  }
};

type headLineFunction = (
  text: string,
  start: number,
  rule: HeadLineEnum
) => string;
// # 添加标题
export const handleHeadLine: headLineFunction = (text, start, rule) => {
  // 需要找出 start 前面的 \n 换行符， 然后再换行符后面添加 #
  // 应该从后向前找，拿到第一个
  const usingText = text.substring(0, start),
    otherText = text.substring(start),
    arr = usingText.split("\n"),
    len = arr.length;
  if (len) {
    arr[len - 1] = "#".repeat(rule) + " " + arr[len - 1];
    return arr.join("\n") + otherText;
  } else {
    return text;
  }
};

// > 添加 引用
/**
 * 添加 表格
 * | header1 | header2 |
 * | ------- | ------- |
 * |         |         |
 * */

// 添加 图片 ![]()
