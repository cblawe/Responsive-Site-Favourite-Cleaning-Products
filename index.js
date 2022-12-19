const contactMe = document.getElementById("contact-me")
const submitBtn = document.getElementById("submit-btn")

contactMe.addEventListener("click", function(){
    getMessage()
})

function getMessage() {
    document.getElementById("reader-message").style.display = "flex"
}

//submit button
submitBtn.addEventListener("click", function(){
    console.log("Message sent!")
})