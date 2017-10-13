// *****sum excercise****
//
// var hi = ("please choose a number")
// var x = prompt(hi)
//
// var y=0
// for (var i = 0; i <= x; i++) {
//   y=i+y
// }
// alert("output = "+y);
//
// ***game excercise*****

// var a = ("Do you want to play a game?")
// var b = ("enter a word")
// var c = ("Do you want to play again?")
// var words = ("")
//
// var answer = confirm(a)
// if (answer==true) {
//   do {
//       var game = prompt(b)
//       words = (words + " " + game)
//       answer = confirm (c)
//   } while (answer==true);
//   console.log(words);
//   alert(words);
// }
// else {
//   alert("bye")
// }

// *** name !***
// p1=("Would you like to print your name?")
// p2=("Would you like to print this again?")
// p3=("Your name?")
// name=(" ")
// exclaim=(" ")
//
// cont=prompt(p1)
// if (cont=="yes") {
//   name=prompt(p3);
//   while (cont=="yes") {
//     alert("Hello. My name is " + name + exclaim);
//     cont=prompt(p2);
//     exclaim= ("!"+exclaim)
//   }
// } else {
//   alert("bye")
// }

// ****food****
Meal = ["breakfast","lunch","dinner"]
Food = ["eggs and toast.","a salad.","chicken and rice."]
Time = ["morning", "noon", "evening"]
start= ("What time of day is it? (morning,noon,evening)")

day=prompt(start)
if (day==Time[0]) {
  alert("Since it is " + Time[0]+", you should be eating "+Meal[0]+". We suggest "+Food[0])
} else if (day==Time[1]){
  alert("Since it is " + Time[1]+", you should be eating "+Meal[1]+". We suggest "+Food[1])
} else if (day==Time[2]){
  alert("Since it is " + Time[2]+", you should be eating "+Meal[2]+". We suggest "+Food[2])
}
else {
  alert("please choose morning, noon, or dinner")
}
