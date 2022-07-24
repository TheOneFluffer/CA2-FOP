class Triangle
{
    constructor(base, height)
    {
        this.base = base
        this.height = 10;
    }

    calculateArea()
    {
        return this.base * this.height * 0.5;
    }
}

var triangle1 = new Triangle(3,3);
var triangle2 = new Triangle(4);
var triangleArray = new Array(3);
triangleArray.push(triangle1);
triangleArray.push(new Triangle(5,5));
triangleArray.push(new Triangle(8));
triangleArray[2] = triangle2;
triangleArray[3].height = 6;

console.log(typeof(triangleArray));

/*
class Cone
{
    constructor(radius, height)
    {
        this.radius = radius;
        this.height = height;
    }
    calculateVolume()
    {
        return Math.PI * this.radius ** 2 * this.height / 3;
    }
}

function updateRadius(x, cone)
{
    x = 20;
    cone.radius = 20;
}

var y = 1;
var coneArr = [new Cone(4,8), new Cone(2,6)];
var cone = coneArr.unshift(new Cone(5,5));

console.log(coneArr[3].calculateVolume());*/