/// <reference types="../@types/jquery"/>

let Search = location.search
let params= new URLSearchParams(Search)
let name= params.get('name')


let clickOnIcon=$(".col-2");
$(".clickOn").on("click",function(){
    if(clickOnIcon.hasClass("d-none")){
    clickOnIcon.animate({left:0,padding:"toggle"},1000)
    clickOnIcon.removeClass("d-none")
    clickOnIcon.addClass("d-block")
    $(".clickOn").removeClass("fa-bars")
    $(".clickOn").addClass("fa-xmark")
   
    $(".col-1").animate({left:230},1000)
}
else{
    clickOnIcon.animate({left:-230,padding:"toggle"},1000,function(){

        clickOnIcon.removeClass("d-block")
        clickOnIcon.addClass("d-none")
        $(".clickOn").removeClass("fa-xmark")
        $(".clickOn").addClass("fa-bars")
    })

    $(".col-1").animate({left:0},1000)
}
})

$(".slideWhite").hover(function(){
    $(".word").removeClass("d-none")
})
$(function()
{
    $(".loader").fadeOut(function(){
        $(".Loading").slideUp(function(){
            $(".Loading").removeClass("d-flex")
            $(".Loading").addClass("d-none")
        })
    })
    $(".name").on("input",function(){
       let Name= $(".name").val();
       GetData(Name)
       console.log(n);
    })
    $(".letter").on("input",function(){
        let letter= $(".letter").val();
        GetDataBYletter(letter)
        console.log(n);
     })
 

    if(GetDataAll()!=null){
        GetDataAll()
    }
async function GetDataAll(){
   
    let respone=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let data = await respone.json();
    DisplayData(data.meals)
    
   
   
   }
   async function GetDataBYletter(letter){
    let respone=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let data = await respone.json();
    DisplayData(data.meals)
    console.log(data);
   }
   
async function GetData(Name){
 let respone=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
 let data = await respone.json();
 DisplayData(data.meals)
 console.log(data);
}
async function GetData(name){
    let respone=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let data = await respone.json();
    DisplayData(data.meals)
    console.log(data);
   }

function DisplayData(data){
    let cartona=""

    for(let i=0;i<data.length;i++)
    {
        cartona+=
        `
           <div class="col-3 p-2 ">
                      
                        <div class="position-relative px-2 slideDU" onclick="ShowDetails(${data[i].idMeal})">
                        <img class="rounded-2" src="${data[i].strMealThumb}" alt="">
                        <div class="slideWhite position-absolute  bg-white ">
                           <p class=" fs-3 fw-bold  word position-absolute top-50">${data[i].strMeal}</p>
                        </div>
                        </div>
                    
                </div>
               
        
        `
    }
    $(".col-9").html(cartona)

}

})
function ShowDetails(id){
location.href=`./Details.html?id=${id}`
}