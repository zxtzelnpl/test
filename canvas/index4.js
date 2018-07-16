const canvas = document.getElementById('canvas');
const CONTEXT = canvas.getContext('2d');

const WIDTH = canvas.clientWidth;
const HEIGHT = canvas.clientHeight;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.width =WIDTH +'px';
canvas.style.height =HEIGHT +'px';

const SIZE =[10,20];
const SPEED = [0,10];
// const Y=[-20,0-HEIGHT];
const Y=[0,HEIGHT];
const X = [0,WIDTH];
const NUM = 50;
const G=9.8;
const WIND = 0.5;

function random(range){
    var min = range[0];
    var max = range[1];
    return Math.floor(Math.random()*(max-min))+min;
}

function Point(x, y) {
    return {
        x:x,
        y:y
    }
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

function WaterDrop(){
    this.top = new Point(
        random(X),
        random(Y)
    );
    this.size = random(SIZE);
    this.speed = random(SPEED);
}
WaterDrop.prototype.paint = function(){
    paint(
        bezier.bind(this),
        CONTEXT,
        {
            color:'#ffffff',
            fill:true
        }
    );
};
WaterDrop.prototype.drop = function(){
    this.speed+=G;
    this.top.y+=this.speed;
    this.top.x+=WIND;
};
WaterDrop.prototype.check = function(){
    if(this.top.y>HEIGHT){
        this.top = Point(
            random(X),
            random(Y)
        );
        this.size = random(SIZE);
        this.speed = random(SPEED);
    }
};

var water_drop_array=[];
for(var i =0;i<NUM;i++){
    water_drop_array.push(
        new WaterDrop()
    )
}


function show(){

    paint(
        clear,
        CONTEXT,
        {
            color:'lightblue',
            fill:true
        }
    );

    water_drop_array.forEach(function(water_drop){
        water_drop.paint();
        water_drop.drop();
        water_drop.check();
    });
    console.log(water_drop_array.length);
    requestAnimationFrame(show)
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

    ctx.filter = "opacity(50%)";
    ctx.moveTo(this.top.x,this.top.y);
    ctx.bezierCurveTo(
        this.top.x-this.size,
        this.top.y+this.size*1.2,
        this.top.x+this.size,
        this.top.y+this.size*1.2,
        this.top.x,
        this.top.y
    );
}