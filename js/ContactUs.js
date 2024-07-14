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


const inputs=document.querySelectorAll("input")
const form = document.querySelector("form")
let flag=false;
form.addEventListener("submit",function(e){
    e.preventDefault();
if(flag==true){
    setForm();
}
})
form.addEventListener("input",function(){
             if(
                checkNameValidation()
                &&checkEmailValidation()
                &&checkPhoneValidation()
                &&checkAgeValidation()
                &&checkPassValidation()
                &&checkRePassValidation()
              )
                 {
                     flag=true
                     $(".btn").removeClass("disabled")
                    
                 }else{
                     flag
                     $(".btn").addClass("disabled")

                 }
         })

function setForm(){
    let data=
    {
        
	   first_name:inputs[0].value,
       email:inputs[1].value,
       phone:inputs[2].value,
	   age:inputs[3].value,
       password:inputs[4].value,
       repassword:inputs[5].value
    }

    postData(data)
   
}

function checkNameValidation(){
    const regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if(regex.test(inputs[0].value)){
        
        inputs[0].classList.add('is-valid')
        inputs[0].classList.remove('is-invalid')
        $(".errorName").html("")

        $(".errorName").removeClass("text-danger")

        return true
    }
    else{
        inputs[0].classList.add('is-invalid')
        inputs[0].classList.remove('is-valid')

        $(".errorName").html("Name is invalid")
        $(".errorName").addClass("text-danger")
        return false
    }
}
function checkEmailValidation(){
    const regexx=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(regexx.test(inputs[1].value)){
       
        inputs[1].classList.add("is-valid")
        inputs[1].classList.remove("is-invalid")
        $(".errorEmail").html("")
        $(".errorEmail").removeClass("text-danger")

                return true
    }
    else{
        inputs[1].classList.add("is-invalid")
        inputs[1].classList.remove("is-valid")
        $(".errorEmail").html("Email is not valid *exemple@yyy.zzz")
        $(".errorEmail").addClass("text-danger")
       return false
    }
}
function checkPhoneValidation(){
    const regex=/^[0-9]{10,13}$/
    if(regex.test(inputs[2].value)){
        inputs[2].classList.add("is-valid")
        inputs[2].classList.remove("is-invalid")
        $(".errorPhone").html("")
        $(".errorPhone").removeClass("text-danger")

                return true
    }
    else{
        inputs[2].classList.add("is-invalid")
         inputs[2].classList.remove("is-valid")
         $(".errorPhone").html("Phone is not valid")
         $(".errorPhone").addClass("text-danger")
        return false
    }
}
function checkAgeValidation(){
    const regex=/^([1-7][0-9]|80)$/
    if(regex.test(inputs[3].value)){
        inputs[3].classList.add("is-valid")
        inputs[3].classList.remove("is-invalid")
        $(".errorAge").html("")
        $(".errorAge").removeClass("text-danger")

        return true
    }
    else{
         inputs[3].classList.add("is-invalid")
         inputs[3].classList.remove("is-valid")
         $(".errorAge").html("Age between 10 - 80 ")
         $(".errorAge").addClass("text-danger")
        return false
    }
}
function checkPassValidation(){
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(inputs[4].value)){
        inputs[4].classList.add("is-valid")
        inputs[4].classList.remove("is-invalid")
        $(".errorPass").html("")
        $(".errorPass").removeClass("text-danger")

                return true
    }
    else{
        inputs[4].classList.add("is-invalid")
         inputs[4].classList.remove("is-valid")
         $(".errorPass").html("Enter valid password *Minimum eight characters, at least one letter and one number:* ")
         $(".errorPass").addClass("text-danger")
        return false
    }
}
function checkRePassValidation(){
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(inputs[5].value)&&inputs[4].value==inputs[5].value){
        inputs[5].classList.add("is-valid")
        inputs[5].classList.remove("is-invalid")
        $(".errorRePass").html("")
        $(".errorRePass").removeClass("text-danger")

                return true
    }
    else{
        inputs[5].classList.add("is-invalid")
         inputs[5].classList.remove("is-valid")
         $(".errorRePass").html("Password is invalid")
         $(".errorRePass").addClass("text-danger")
        return false
    }
}



      
