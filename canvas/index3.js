const canvas = document.getElementById('canvas');
const CONTEXT = canvas.getContext('2d');

const WIDTH = 800;
const HEIGHT = 600;

function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.show = function(color){
    paint(
        react_point.bind(this),
        CONTEXT,
        {
            color: color,
            fill:true
        }
    )
};
Point.prototype.inner  = function(x,y){
    if(x>this.x&&x<this.x+10&&y>this.y&&y<this.y+10){
        return true
    }
    else{
        return false
    }
};

var point_start = new Point(50, 20);
var point_end = new Point(50, 100);
var point_control1 = new Point(230, 30);
var point_control2 = new Point(150, 60);
var point_now=null;

function show(){
    paint(
        clear,
        CONTEXT,
        {
            color:'#ffffff',
            fill:true
        }
    );


    point_start.show('blue');
    point_end.show('blue');
    point_control1.show('red');
    point_control2.show('red');


    paint(
        bezier.bind({
            start:point_start,
            end:point_end,
            control1:point_control1,
            control2:point_control2
        }),
        CONTEXT,
        {
            fill:true
        }
    );
}
show();



function paint(fun, ctx, obj) {
    ctx.save();
    ctx.beginPath();

    if (obj.color && obj.fill) {
        ctx.fillStyle = obj.color
    }
    if (obj.color && obj.stroke) {
        ctx.strokeStyle = obj.color
    }
    if (obj.lineWidth) {
        ctx.lineWidth = obj.lineWidth
    }
    if (obj.translate) {
        ctx.translate(obj.translate.x, obj.translate.y)
    }
    if (obj.rotate) {
        ctx.rotate(obj.rotate)
    }

    fun(ctx);

    if (obj.fill) {
        ctx.fill()
    }
    if (obj.stroke) {
        ctx.stroke()
    }

    ctx.restore();
}

function react_point(ctx) {
    var x = this.x;
    var y = this.y;
    ctx.rect(x, y, 10, 10);
}

function clear(ctx){
    ctx.rect(0,0,WIDTH,HEIGHT)
}

function bezier(ctx){
    ctx.moveTo(this.start.x,this.start.y);
    ctx.bezierCurveTo(
        this.control1.x,
        this.control1.y,
        this.control2.x,
        this.control2.y,
        this.end.x,
        this.end.y
    );
}

canvas.addEventListener('mousedown',function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if(point_start.inner(x,y)){
        console.log('point_start');
        point_now = point_start;
    }
    if(point_end.inner(x,y)){
        console.log('point_end');
        point_now = point_end;
    }
    if(point_control1.inner(x,y)){
        console.log('point_control1');
        point_now = point_control1;
    }
    if(point_control2.inner(x,y)){
        console.log('point_control2');
        point_now = point_control2;
    }
});

canvas.addEventListener('mousemove',function(e){
    if(point_now!==null){
        point_now.x = e.offsetX;
        point_now.y = e.offsetY;
        show()
    }
});

canvas.addEventListener('mouseup',function(e){
    point_now=null
});