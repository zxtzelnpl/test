const PI = Math.PI;
const sin = Math.sin;
const cos = Math.cos;

const canvas = document.getElementById('canvas');
const CONTEXT = canvas.getContext('2d');

const STEPS = 100;
const I = 0;
const WIDTH = 800;
const HEIGHT = 600;
const RADIUS = WIDTH>HEIGHT?HEIGHT/2:WIDTH/2;
const Point_CENTER = new Point(WIDTH/2,HEIGHT/2);
const Point_POINTS = [];


for(var i=0;i<7;i++){
    Point_POINTS.push(new Point(
        RADIUS*cos(i*PI*2/7),
        RADIUS*sin(i*PI*2/7)
    ))
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}
function paintPoint(point,obj,ctx){
    if(obj.color){ctx.fillStyle = obj.color}
    if(obj.translate){ctx.translate(obj.translate.x,obj.translate.y)}

    var x = point.x;
    var y = point.y;
    var radius = obj.radius||2;

    ctx.arc(x,y,radius,0,2*PI,true);

    ctx.fill();
}
function paintPolygon(points,obj,ctx){
    if(obj.color){ctx.strokeStyle = obj.color}
    if(obj.lineWidth){ctx.lineWidth = obj.lineWidth}
    if(obj.translate){ctx.translate(obj.translate.x,obj.translate.y)}
    points.forEach(function(point,index){
        if(index===0){
            ctx.moveTo(point.x,point.y)
        }
        else{
            ctx.lineTo(point.x,point.y)
        }
    });
    ctx.closePath();
    ctx.stroke();
}
function paintCircle(circle,obj,ctx){
    if(obj.color){ctx.strokeStyle = obj.color}
    if(obj.lineWidth){ctx.lineWidth = obj.lineWidth}
    if(obj.translate){ctx.translate(obj.translate.x,obj.translate.y)}

    var x = circle.x;
    var y = circle.y;
    var r = circle.radius||5;
    var angle_Start = circle.angle_Start||0;
    var end_Start = circle.end_Start||2*PI;

    ctx.arc(x,y,r,angle_Start,end_Start,false);

    ctx.stroke()
}
function paintLine(line,obj,ctx){

}

function paint(fun,ctx){
    ctx.save();
    ctx.beginPath();
    fun(ctx);
    ctx.restore();
}

function myPainting(){
    paint(paintPoint.bind(undefined,Point_CENTER,{

    }),CONTEXT);
    paint(paintCircle.bind(undefined,{
        x:0,
        y:0,
        radius:RADIUS
    },{
        translate:Point_CENTER
    }),CONTEXT);
    // paint(paintPolygon.bind(undefined,Point_POINTS,{
    //     translate:Point_CENTER
    // }),CONTEXT);

    paint(function(ctx){
        ctx.translate(Point_CENTER.x,Point_CENTER.y);
        ctx.lineTo(Point_POINTS[0].x,Point_POINTS[0].y);
        ctx.lineTo(Point_POINTS[2].x,Point_POINTS[2].y);
        ctx.lineTo(Point_POINTS[4].x,Point_POINTS[4].y);
        ctx.lineTo(Point_POINTS[6].x,Point_POINTS[6].y);
        ctx.lineTo(Point_POINTS[1].x,Point_POINTS[1].y);
        ctx.lineTo(Point_POINTS[3].x,Point_POINTS[3].y);
        ctx.lineTo(Point_POINTS[5].x,Point_POINTS[5].y);
        ctx.lineTo(Point_POINTS[0].x,Point_POINTS[0].y);
        ctx.stroke();

    },CONTEXT)

    // paint(paintPolygon.bind(undefined,[Point_POINTS[0],Point_POINTS[2],Point_POINTS[4]],{
    //     translate:Point_CENTER
    // }),CONTEXT);
    //
    // paint(paintPolygon.bind(undefined,[Point_POINTS[1],Point_POINTS[3],Point_POINTS[5]],{
    //     translate:Point_CENTER
    // }),CONTEXT);




    // paint(paintCircle.bind(undefined,{
    //     x:0,
    //     y:0,
    //     radius:radius_inner1
    // },{
    //     translate:Point_CENTER
    // }),CONTEXT);

    // paint(paintPolygon.bind(undefined,[Point_POINTS_INNER1[0],Point_POINTS_INNER1[2],Point_POINTS_INNER1[4]],{
    //     translate:Point_CENTER
    // }),CONTEXT);
    //
    // paint(paintPolygon.bind(undefined,[Point_POINTS_INNER1[1],Point_POINTS_INNER1[3],Point_POINTS_INNER1[5]],{
    //     translate:Point_CENTER
    // }),CONTEXT);

    // paint(paintPolygon.bind(undefined,Point_POINTS_INNER1,{
    //     translate:Point_CENTER
    // }),CONTEXT);

}

myPainting();