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


// var literalCircle = {
//     radius: 10,

//     getArea: function() {
//         var self = this;
//         console.log(this);

//         var increaseRadius = function () {
//             self.radius = 20;
//         }
//         increaseRadius();

//         return Math.PI * Math.pow(this.radius,2);
//     }
// };

// console.log(literalCircle.getArea());

// var array = new Array();
// array[0] = "Vlad";
// array[1] = 2;
// array[2] = function(name){
//     console.log("Hello " + name);
// }
// array[3] = {course: "HTML, CSS, JS"};

// console.log(array);
// array[2](array[0]);

// console.log(array[3].course)

// var names = ["Vlad", "Vlad2", "Vlad3"];

// console.log(names);

// for (var i = 0; i < names.length; i++){
//     console.log("Hello " + names[i]);
// }

// names[100] = "Jim";

// for (var i = 0; i < names.length; i++){
//     console.log("Hello " + names[i]);
// }

// var names2 = ["Vlad", "Vlad2", "Vlad3"];

// var myObj = {
//     name: "Yaakov",
//     course: "HTML",
//     platform: "Coursera"
// };

// for (var prop in myObj){
//     console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
//     console.log("Hello "+names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
//     console.log("Hello "+names2[name]);
// }

// function MakeMulti (multiplier){

//     function b(){
//         console.log("Multi is: " + multiplier);
//     }

//     b();

//     return(
//         function(x){
//             return multiplier * x;
//         }
//     );
// }

// var doubleAll = MakeMulti(2);

// console.log(doubleAll(100));

var list = new Array();

list[0] = "Vlad";
list[1] = "jordge";
list[2] = "Jopa";
list[3] = "Ivan";


    var helloOrBye = function (){
        for(var i = 0; i < list.length; i++){
            if(list[i][0] == 'j' || list[i][0] == "J"){
                console.log("Goodbye " + list[i]);
            }
            else{
                console.log("Hello " + list[i]);
            }
        }
    }

    helloOrBye();

