/// <reference types="../@types/jquery"/>


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

async function GetData(){
 let respone=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
 let data = await respone.json();
 DisplayData(data.meals)
 console.log(data.meals);

}
async function ShowDetails(area){
    let respone=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${area}`)
    let data = await respone.json();
    DisplayDataa(data.meals)
    console.log(data.meals);
}
function DisplayData(data){
    let cartona=""

    for(let i=0;i<data.length;i++)
    {
        cartona+=
        `
           <div class="col-3 p-2 ">
                      
                        <div onclick="ShowDetails('${data[i].strArea}')" class="  px-2  border area">
                        <i class="fa-solid fa-house fs-2  text-center d-flex align-items-center justify-content-center"></i>
                       
                           <p class=" fs-3 fw-bold text-center  top-50">${data[i].strArea}</p>
                        </div>
                       
                    
                </div>
               
        
        `
    }
    $(".col-9").html(cartona)

}
function DisplayDataa(data){
    let cartona=""

    for(let i=0;i<data.length;i++)
    {
        cartona+=
        `
           <div class="col-3 p-2 ">
                      
                        <div class="position-relative px-2 slideDU" onclick="ShowDetailss('${data[i].idMeal}')">
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
GetData()
function ShowDetailss(id){
    location.href=`./Details.html?id=${id}`
    }