// var company = new Object();

// company.name = "Telegram";
// company.ceo = new Object();
// company.ceo.FirstName = "Vlad";
// company.ceo.SecondName = "Kucherenko";
// company.ceo.FavColor = "black";
// console.log(company);

// console.log("Company CEO name is " + company.ceo.FirstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);

// var Telegram = {
//     name: "Telegram",
//     ceo: {
//         FirstName: "Vlad",
//         SecondName: "Kucherenko"
//     },
//     "stock of company": 110
// };

// console.log(Telegram);

// function MakeMulti(multiplier){
//     var myFunc = function(x){
//         return multiplier * x;
//     }
//     return myFunc;
// }

// var multiBy3 = MakeMulti(3);

// console.log(multiBy3(10));//30

// var doubleAll = MakeMulti(2);

// console.log(doubleAll(100));//200

// function doOper(x, operation){
//     return operation(x);
// }

// var result = doOper(5, multiBy3);

// console.log(result);//15


// function test(){
//     console.log(this);
//     this.myName = "Vlad";
// }

// test();

// console.log(window.myName);

// function Circle(radius){
//     this.radius = radius;

// }

// Circle.prototype.getArea = function(){
//     Math.PI * Math.pow(this.radius,2);
// };

// var myCircle = new Circle(10);

// console.log(myCircle);


var literalCircle = {
    radius: 10,

    getArea: function() {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
        }
        increaseRadius();

        return Math.PI * Math.pow(this.radius,2);
    }
};

console.log(literalCircle.getArea());