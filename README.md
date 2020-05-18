# scratch-mini
小程序刮刮卡，包括文字和图片

思路是：

1. 先将中奖的图片或者文字位置和大小确定

2. 开始画canvas，将位置和大小跟之前中奖的文案的位置保持一致。

3. 在canvas上覆盖一层灰色的蒙层，作出刮刮卡未刮之前的效果

    具体代码如下

    ```
    let left=0;
    this.data.awardCanvas.moveTo(left,0)
    this.data.awardCanvas.lineTo(left+400,0);
    this.data.awardCanvas.lineTo(left+400,150);
    this.data.awardCanvas.lineTo(left,150);
    this.data.awardCanvas.stroke()
    this.data.awardCanvas.setFillStyle('#ddd')
    this.data.awardCanvas.fill()
    this.data.awardCanvas.draw()
    ```

4. 开始做刮刮卡的动作，在canvas定义bindtouchstart和bindtouchmove两个触发的动作

bindtouchstart是开始落手指的第一个位置，bindtouchmove是手指移动的位置

其中重要一个canvas属性是clearRect，清除画布上的内容

clearRect(清除位置的X坐标，清除位置的Y坐标,清除的宽度，清除的高度)

具体代码如下：

```
this.data.awardCanvas.clearRect(x,y,15,15);
this.data.awardCanvas.draw(true)
```

快去试试吧，也许能刮到一等奖哦～～