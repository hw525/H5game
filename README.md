# H5game
玩法：大鱼吃果实，大鱼喂小鱼，小鱼恢复生命值

#开发步骤：
一. 准备工作
1. 搭建html网页结构
//can1在前，  大鱼和小鱼、漂浮物、ui、特效
//can2在后，  背景、海葵、果实
2. 绘制背景
api：drawImage

二. 绘制海葵
api：beginPath、moveTo、lineTo、lineWidth、lineCap、strokeStyle、globalAlpha、stroke

三. 绘制果实（黄色和蓝色）
物体池，设30个，规定活着的果实为15个
活着的果实要经历长大-->成熟
监视（fruitMonitor） --> 选择（selectFruit） --> 出生（born） --> 绘制（draw）
