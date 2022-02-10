const h5 = document.getElementsByTagName('h5');
for(eachH5 of h5)
{
    eachH5.style.color = "red";
}
//task 2
const backpackSection = document.getElementById('backpacks');
backpackSection.style.backgroundColor = "tomato";
//task 3
const card = document.getElementsByClassName('card');
for(eachCard of card)
{
    eachCard.style.borderRadius = "30px";

}
//task 4
function consoleWritter()
{
    console.log("Simply I am writting in the console");
}
//The function is added in backpack section last card button
//task 5
const buttonParent = document.getElementsByClassName('m-3');
for(eachParent of buttonParent)
{
    eachParent.addEventListener('click',(event)=>{
        event.target.parentNode.removeChild(event.target);
    })
}
//task 6
const btnf = document.getElementById('footer-submit-btn');
const inputf= document.getElementById('footer-input');
inputf.addEventListener('keyup',(event)=>{
    let value = event.target.value;
    if(value=="email")
    {
        btnf.disabled = false;
    }else{
        btnf.disabled = true;
    }
});
// task 7
// const cardImages = document.getElementsByClassName("card-img-top")
// for(eachCardImg of cardImages)
// {
//     eachCardImg.addEventListener("mouseenter",(event)=>{
//         event.target.setAttribute('src','buynow.jpg');

//     });
//     eachCardImg.setAttribute('src','buynow.jpg');
// }
// task-8
const doubleT = document.getElementById('let-stay-in-touch');
doubleT.addEventListener("dblclick",() =>{
    doubleT.style.backgroundColor = 'tomato';
    doubleT.style.padding = '1.3rem';
    doubleT.style.borderRadius = '1.3rem';
})

