待解决的问题：

1. 核心功能逻辑的完成
2. 样式的确认
3. 样式方案的确认
4. 公共组件(比如 滚动组件)
5. code sandbox 中看不到 node_modules 文件的问题
7. 封装关于 获取 textarea 区域光标的方法， 选中内容的方法， 设置光标的方法。
   选中可以使用 onSelect 事件
   光标位置 (event.target.selectionStart, event.target.selectionEnd)
   设置光标 setSelectionRange()
8. 了解内存管理
9. 当 选中的文本已经加粗时， 再点击 按钮应该是取消加粗， 其他按钮功能一样
   ...

已解决：
代码在本地运行， react-script 报错的问题。(升级 react-script 版本)