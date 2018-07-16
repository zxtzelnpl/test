const PI = Math.PI;
const sin = Math.sin;
const cos = Math.cos;

const canvas = document.getElementById('canvas');
const CONTEXT = canvas.getContext('2d');

const STEPS = 100;
var Index = 0;
const WIDTH = 800;
const HEIGHT = 600;
const RADIUS = WIDTH > HEIGHT ? HEIGHT / 2 : WIDTH / 2;
const Point_CENTER = new Point(WIDTH / 2, HEIGHT / 2);
const Point_POINTS = [];
const LEN = 10;


for (var i = 0; i < LEN; i++) {
    Point_POINTS.push(new Point(
        RADIUS * cos(i * PI * 2 / LEN),
        RADIUS * sin(i * PI * 2 / LEN)
    ))
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function paintPoint(point, obj, ctx) {
    if (obj.color) {
        ctx.fillStyle = obj.color
    }
    if (obj.translate) {
        ctx.translate(obj.translate.x, obj.translate.y)
    }
    if (obj.rotate) {
        ctx.rotate(obj.rotate)
    }

    var x = point.x;
    var y = point.y;
    var radius = obj.radius || 2;

    ctx.arc(x, y, radius, 0, 2 * PI, true);

    ctx.fill();
}

function paintPolygon(points, obj, ctx) {
    if (obj.color) {
        ctx.strokeStyle = obj.color
    }
    if (obj.lineWidth) {
        ctx.lineWidth = obj.lineWidth
    }
    if (obj.translate) {
        ctx.translate(obj.translate.x, obj.translate.y)
    }
    points.forEach(function (point, index) {
        if (index === 0) {
            ctx.moveTo(point.x, point.y)
        }
        else {
            ctx.lineTo(point.x, point.y)
        }
    });
    ctx.closePath();
    ctx.stroke();
}

function paintCircle(circle, obj, ctx) {
    if (obj.color) {
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

    var x = circle.x;
    var y = circle.y;
    var r = circle.radius || 5;
    var angle_Start = circle.angle_Start;
    var end_Start = circle.end_Start;

    ctx.arc(x, y, r, angle_Start, end_Start, false);

    ctx.stroke()
}

function paintLine(line, obj, ctx) {
    if (obj.color) {
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

    var x0 = line.x0;
    var y0 = line.y0;
    var x1 = line.x1;
    var y1 = line.y1;

    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke()
}

function paint(fun, ctx) {
    ctx.save();
    ctx.beginPath();
    fun(ctx);
    ctx.restore();
}

function myPainting() {
    CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);

    paint(paintPoint.bind(undefined, Point_CENTER, {
        // rotate: 2 * PI * Index / STEPS-PI/2
    }), CONTEXT);
    paint(paintCircle.bind(undefined, {
        x: 0,
        y: 0,
        radius: RADIUS,
        angle_Start: 0,
        end_Start: 2 * PI * Index / STEPS
    }, {
        translate: Point_CENTER,
        // rotate: 2 * PI * Index / STEPS-PI/2
    }), CONTEXT);

    Point_POINTS.forEach(function (point, index) {
        var pointTo;
        if (index + 2 < LEN) {
            pointTo = Point_POINTS[index + 2]
        }
        else {
            pointTo = Point_POINTS[index + 2 - LEN]
        }

        delta_x = (pointTo.x - point.x) * Index / STEPS;
        delta_y = (pointTo.y - point.y) * Index / STEPS;

        paint(paintLine.bind(undefined, {
            x0: point.x,
            y0: point.y,
            x1: point.x + delta_x,
            y1: point.y + delta_y
        }, {
            translate: Point_CENTER,
            // rotate: 2 * PI * Index / STEPS-PI/2
        }), CONTEXT)

    });

    Index++;
    console.log(Index);
    if (Index > STEPS) {
        return
    }
    else {
        requestAnimationFrame(myPainting)
    }
}


myPainting();