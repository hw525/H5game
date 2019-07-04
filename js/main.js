var can1, can2, ctx1, ctx2;
var lastTime; //上一帧的时间
var deltaTime; //两帧之间的时间差
var canWidth, canHeight;
var bgPic = new Image();

//要写一个函数的执行作为所有js的入口
document.body.onload = game;

function game() {
  init();
  lastTime = Date.now();
  deltaTime = 0;
  gameloop();
}



function init() {
  //获得canvas的contex
  //can1在前，  大鱼和小鱼、漂浮物、ui、特效
  //can2在后，  背景、海葵、果实
  can1 = document.getElementById('canvas1');
  ctx1 = can1.getContext("2d");
  can2 = document.getElementById('canvas2');
  ctx2 = can2.getContext("2d");

  //获取背景图片
  bgPic.src = './src/background.jpg'
  canWidth = can1.width;
  canHeight = can1.height;

  ane = new AneObj();
  ane.init();
}

function gameloop() {
  //requestAnimFrame当前绘制完成后，根据机器性能决定间隔多长时间绘制下一帧
  window.requestAnimFrame(gameloop);
  var now = Date.now();
  deltaTime = now - lastTime;
  lastTime = now;
  //  console.log(deltaTime);
  drawBackground();

  ane.draw();

}
