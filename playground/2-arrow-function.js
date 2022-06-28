//*************ONE WAY OF WRITING THE FUNCTION

// const square = function(x){
//     return console.log(x*x); 
// }

//***************SECOND WAY

// const square = (x) => {
//     return console.log(x*x); 
//     }
    

// INSTEAD OF WRITING RETURN KEYWORD
// const square = (x)=> x*x;
// console.log(square(3)); 

//***************************************************/

// const event = {
//     name: "Guest Function",
//     printGuestList:  () => {
//         console.log("guest lists for : " + event.name);
//     }
// }

//OR***********

// const event = {
//     name: "Guest Function",
//     printGuestList:  function (){
//         console.log("guest lists for : " + this.name);
//     }
// }

//OR**************
const event = {
    name: "Guest Function",
    guestList: ["sneha","sam","pavan","tripsy"],
    printGuestList(){
        console.log("guest lists for : " + this.name);
        this.guestList.forEach((guest)=>{
            console.log(guest+ " is attending the " + this.name);
        })
    }
}
event.printGuestList();