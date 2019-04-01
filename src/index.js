import _ from 'lodash';
// import './style.css';
// import Education from './education.png';
// import Data from './data.json';

import printMe from './print.js';

function component() {
    let element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');// lodash，现在由此脚本导入
    // element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    // var myIcon = new Image();
    // myIcon.src = Education;
    // element.appendChild(myIcon);

    // console.log(Data);

    var btn = document.createElement('button');
    btn.innerHTML = '点击这里 ye 查看console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());

  if (module.hot) {
    module.hot.accept('./print.js', function(){
      console.log('Accepting the undated printMe module!');
      printMe();
    })
  }