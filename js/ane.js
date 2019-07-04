var AneObj = function() {
  this.x = []; //每个海葵的横坐标
  this.len = []; //每条海葵的高度
}

AneObj.prototype.num = 50;
AneObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.x[i] = i * 16 + Math.random() * 20;
    this.len[i] = 200 + Math.random() * 50;
  }

};
AneObj.prototype.draw = function() {
  ctx2.save();
  ctx2.lineWidth = 20;
  ctx2.lineCap = "round";
  ctx2.strokeStyle = '#3b154e';
  ctx2.globalAlpha = 0.6;
  for (var i = 0; i < this.num; i++) {
    //beginPath,moveTo,lineTo,lineWidth,lineCap,strokeStyle,globalAlpha,stroke
    //从下往上画
    ctx2.beginPath();
    ctx2.moveTo(this.x[i], canHeight);
    ctx2.lineTo(this.x[i], canHeight - this.len[i]);
    ctx2.stroke();
  }
  ctx2.restore();
};
