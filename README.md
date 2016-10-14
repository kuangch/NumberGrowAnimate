# NumberGrowth
一个可以模仿余额宝数子增长动画的框架
*支持自动判断增长和减少
*支持设置动画时间
*支持设置开始增长数字
*支持设置刷新频率

## 使用方法

* 引入`number-growth.js`文件
``` html
<script type="text/javascript" src="number-growth.js"></script>

```
* 编写html文件
``` html
<!--在html里面定义一个div作为显示容器-->
<div id="number-container" class="number">0</div>

```
* 编写javascript文件
``` javascript
// 实例化组件
var numberGrow = NumberGrowth('number-container',
    500,
    {
    startNumber: 122,
    growNumberAnimateTime:1000* 3
    });

// 开始增长动画
numberGrow.startGrow();

// 改变数组动画
numberGrow.changeNumber(1000);

```
## 参数说明

* startNumber: 开始数字
* growNumberAnimateTime: 初始数字增长动画时间（ms）
* changeNumberAnimateTime: 改变数字动画时间（ms）
* refreshTime: 动画刷新时间间隔（ms）

## api说明

* startGrowth: 开始初始动画
* changeNumber: 开始改变数字动画

## 效果
![image](https://github.com/kuangch/ProgressStatus/blob/master/number-growth.gif)