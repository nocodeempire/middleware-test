import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
  
const A = [1], B= [1];
const taskQueue = []

if(A.length > 0) {
  const task = (next) => {
    console.log("A");
    next();
  }
  taskQueue.push(task);
}
if(B.length > 0) {
  const task = (next) => {
    console.log("B");
    next();
  }
  taskQueue.push(task);
}

const next = () => {
  const handleTask = taskQueue.shift();
  if(handleTask) handleTask(next);
  else console.log("结束")
}

const App = () => {

  useEffect(() => {
    next()
  }, [])

  return (
    <div>
      <p>有一个需求：</p>
      <p>批量开启一个功能，后端会在开启的时候做一个校验，把不成功的列表抛出来，前端做展示，校验会有两种情况，所以一个接口里返回了两个字段，而这两个字段都不一定必返。分以下情况：</p>
      <p>A、B 都有</p>
      <p>A 有 B 没有</p>
      <p>B 有 A 没有</p>
      <p>A、B 都没有</p>

      <p>而交互想要的效果是这样的：</p>

      <p>A、B 都有：先弹 A 弹窗，点击确定后再弹 B 弹窗，关闭 B 后提示完成</p>
      <p>A 有 B 没有：弹 A 弹窗，关闭后提示完成</p>
      <p>B 有 A 没有：弹 B 弹窗，关闭后提示完成</p>
      <p>A、B 都没有：提示完成</p>
      
    </div>
  )

}

render(<App />, document.getElementById('root'));
