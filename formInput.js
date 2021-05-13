/* As a User need to enter a valid Name starts with Cap and has minimum 3 characters*/

const text = document.querySelector('#text')
const textError = document.querySelector('.text-error')
text.addEventListener('input', 
    function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
    if(nameRegex.test(text.value))
        textError.textContent = ""
    else
        textError.textContent = "Name is Incorrect."
})

/*User need to enter a valid email 
*Email has 3 mandatory parts(abc, bl and co)
*and optional(xyz and in) with precise @and positions
*/

const email = document.querySelector('#email')
const mailError = document.querySelector('.email-error')
email.addEventListener('input', 
    function(){
    let mailRegex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
    if(mailRegex.test(email.value))
         mailError.textContent = ""
    else
        mailError.textContent = "Incorrect Email."
})

/* User need to follow pre-defined Mobile Formate
*Country code follow by space and 10 digit number
*/

const mobile = document.querySelector('#tel')
const mobileError = document.querySelector('.mobile-error')
tel.addEventListener('input', 
    function(){
    let mobileRegex = RegExp('[0-9]{2}\\s[0-9]{10}')
    if(mobileRegex.test(mobile.value))
        mobileError.textContent = ""
    else 
        mobileError.textContent = "Incorrect Mobile. Please specify in 9X -XXXXXXXXXX format"
})

const salary = document.querySelector('#salary')
const output = document.querySelector('.salary-output')
output.textContent = salary.value;
salary.addEventListener('input', 
    function(){
    output.textContent = salary.value
})