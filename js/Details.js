/// <reference types="../@types/jquery"/>
let Search = location.search
let params= new URLSearchParams(Search)
let id= params.get('id')




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

$(function(){
    $(".loader").fadeOut(function(){
        $(".Loading").slideUp(function(){
            $(".Loading").removeClass("d-flex")
            $(".Loading").addClass("d-none")
        })
    })

 async function getByID()
 {
     let respons=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     let data=await respons.json()
     diplayMealById(data.meals)
     console.log(data);
 }

 function diplayMealById(data) {
  let cartoona=``
    for(let i =0;i<data.length;i++){
      cartoona = `
     <div class="col-5">
            <img src="${data[i].strMealThumb}" alt="">
            <p class="fs-3">${data[i].strMeal}</p>
          </div>
          <div class="col-7">
            <h2>Instructions</h2>
            <p class="py-3">${data[i].strInstructions}</p>
         


            <p class="fs-3"> Area : ${data[i].strArea}</p>
            <p class="fs-3">Category : ${data[i].strCategory}</p>
            <p class="fs-3">Tags :</p>
            <div class="d-flex gap-1">
                <a target="_blank" href="${data[i].strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${data[i].strYoutube}" class="btn btn-danger">Youtube</a>
            </div>

          </div>

     `
    }
     $(".interin").html(cartoona) 
 }

 getByID()
})
