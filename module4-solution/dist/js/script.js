var list = new Array();

list[0] = "Yaakov";
list[1] = "John";
list[2] = "Jen";
list[3] = "Jason";
list[4] = "Paul";
list[5] = "Frank";
list[6] = "Larry";
list[7] = "Paula";
list[8] = "Laura";
list[9] = "Jim";


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

