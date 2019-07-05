var FruitObj = function() {
  this.alive = []; //bool
  this.orange = new Image();
  this.blue = new Image();
  this.x = [];
  this.y = [];
  this.l = []; //控制大小
  this.spd = []; //控制速度(包括长大的速度和上升的速度)
  this.type = []; //控制果实类型
}

FruitObj.prototype.num = 30;

FruitObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    this.l[i] = 0;
    this.spd[i] = Math.random() * 0.017 + 0.003;
    this.type[i] = '';
  }
  this.orange.src = "./src/fruit.png"
  this.blue.src = "./src/blue.png"
};

FruitObj.prototype.draw = function() {
  // 1.找到海葵 2.长大 3.往上漂
  for (var i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      if (this.type[i] === 'blue') {
        var pic = this.blue;
      } else {
        var pic = this.orange;
      }
      if (this.l[i] <= 14) {
        this.l[i] += this.spd[i] * deltaTime;
      } else {
        this.y[i] -= this.spd[i] * 7 * deltaTime;
      }
      ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
      if (this.y[i] < -10) {
        this.alive[i] = false;
      }
    }
  }
};

FruitObj.prototype.born = function(i) {
  //随机找到某一根海葵，作为第i个果实的出生坐标
  // TODO: 暂时没做清除重叠的功能，可以给海葵做标记，记录当前有没有被占用
  var aneID = Math.floor(Math.random() * ane.num);
  this.x[i] = ane.x[aneID];
  this.y[i] = canHeight - ane.len[aneID];
  this.alive[i] = true;
  this.l[i] = 0; //要注意大小置0，不然下一次同一个果实就不会经历长大过程
  var ran = Math.random(); //随机决定果实的种类
  if (ran < 0.2) {
    this.type[i] = 'blue';
  } else {
    this.type[i] = 'orange';
  }
};

//监测活着的果实数量
function fruitMonitor() {
  var num = 0;
  for (var i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) {
      num++;
    }
  }
  if (num < 15) {
    selectFruit(); //选择让一个闲置的果实出生
    return;
  }
};

//判断哪个果实是闲置的，让其出生
function selectFruit() {
  for (var i = 0; i < fruit.num; i++) {
    if (!fruit.alive[i]) {
      fruit.born(i);
      return;
    }
  }
}
