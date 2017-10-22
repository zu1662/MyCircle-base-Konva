/**
 * Created by zu166 on 2017/6/21.
 */
function myCircle(option){
    this._init(option);
}

myCircle.prototype = {
    _init: function(option){
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        this.innerFill = option.innerFill || '#1596f5';
        this.outerFill = option.outerFill || '#e7f4fd';
        this.innerOpacity = option.innerOpacity || 1;
        this.outerOpacity = option.outerOpacity || .8;
        this.text = option.text || 'huazi';
        this.text_size = option.text_size || 17;
        this.text_color = option.text_color || '#ccc';

        //创建所需要的一个组
       this.group = new Konva.Group({
           x: this.x,
           y: this.y
       });

        //创建内圆
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            fill: this.innerFill,
            radius: this.innerRadius,
            opacity: this.innerOpacity
        });
        this.group.add(innerCircle);

        //创建外部圆环
        var outRing = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.outerFill,
            opacity: this.outerOpacity
        });
        this.group.add(outRing);

        //添加圆内文字
        var text = new Konva.Text({
            x: -this.outerRadius,
            y: -this.text_size/2,
            width: this.outerRadius * 2,
            text: this.text,
            fontSize: this.text_size,
            align: 'center',
            fontStyle: 'bold',
            fill: this.text_color
        });
        this.group.add(text);
    },
    addToLayer: function(layer){
        layer.add(this.group);
    }
};