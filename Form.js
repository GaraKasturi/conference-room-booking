let FirstNameEl = document.getElementById("name")
let lastNameEl= document.getElementById("lastName")
let emailEl = document.getElementById("email")
let staffIdEl=document.getElementById("staffId")
let dateEl = document.getElementById("date")
let fromEl = document.getElementById("from")
let toEl = document.getElementById("to")

let eEl = document.getElementById("error")

document.getElementById("reservationForm").addEventListener("submit", function(event){
    event.preventDefault()
    if(FirstNameEl.value==="" || lastNameEl.value==="" || emailEl.value==="" || staffIdEl.value==="" || dateEl.value==="" || fromEl.value==="" || toEl.value===""){
        eEl.textContent="Please Enter Required Details !!"
        eEl.classList.add("error-element")
        console.log(document.getElementById("bookingDetailsCard"))
        
    }
    else{
        var params = {name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        from: document.getElementById("from").value,
        to:document.getElementById("to").value}
    
    
        const serviceID ="service_mp6pigs"
         const templateID = "template_dcgujub"
    
        emailjs.send(serviceID,templateID,params)
        .then(res=>{
            alert("Your are done !!")
            document.getElementById("final").classList.remove("display-property")
            document.getElementById("reservationForm").classList.add("display-property")
        })
        .catch(e=>console.log(e)
        )

        
            eEl.textContent=""
        
    }

    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("date").value=""
    document.getElementById("from").value=""
    document.getElementById("to").value =""
    document.getElementById("lastName").value=""
    document.getElementById("staffId").value=""
    document.getElementById("department").value=""
    document.getElementById("textArea").value=""
   
    



})

function done(){
    document.getElementById("final").classList.add("display-property")
    window.open("file:///C:/Users/garak/Desktop/project/home.html")
}



