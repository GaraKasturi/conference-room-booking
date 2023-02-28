
let firstRoom
let btn1Clicked = false
function room101(){
   document.getElementById("reservationCard").classList.remove("d-none")
   document.getElementById("homePage").classList.add("d-none")
   firstRoom = document.getElementById("btn1").value
   btn1Clicked = true
}
 
let secondRoom
let btn2Clicked = false
function room102(){
   document.getElementById("reservationCard").classList.remove("d-none")
   document.getElementById("homePage").classList.add("d-none")
   secondRoom = document.getElementById("btn2").value
   btn2Clicked = true
   
}
 
let thirdRoom
let btn3Clicked = false
function room103(){
   document.getElementById("reservationCard").classList.remove("d-none")
   document.getElementById("homePage").classList.add("d-none")
   thirdRoom = document.getElementById("btn3").value
   btn3Clicked = true
   
}

let fourthRoom
let btn4Clicked = false
function room104(){
   document.getElementById("reservationCard").classList.remove("d-none")
   document.getElementById("homePage").classList.add("d-none")
   fourthRoom = document.getElementById("btn4").value
   btn4Clicked = true
   
}

document.getElementById("select").addEventListener("change", function(event){
    console.log(event.target.value)
})
 
 

// from.js
let today = new Date()
let tDate = today.getDate()
let tMonth = today.getMonth() + 1
let tYear = today.getFullYear()
if(tMonth<10){
    tMonth = "0"+ tMonth
}
if(tDate<10){
    tDate = "0" + tDate
}
document.getElementById("date").setAttribute("min", `${tYear}-${tMonth}-${tDate}`)

let locsrray=[];

let FirstNameEl = document.getElementById("name")
let lastNameEl= document.getElementById("lastName")
let emailEl = document.getElementById("email")
let staffIdEl=document.getElementById("staffId")
let dateEl = document.getElementById("date")
let fromEl = document.getElementById("from")
let toEl = document.getElementById("to")
let eEl = document.getElementById("error")


let myArray= JSON.parse(localStorage.getItem('saveData'));

let searchDataEl = document.getElementById("searching")

let ulEl = document.getElementById("unorderedList")

if(searchDataEl.key===undefined){
   if(myArray)
   {
        for(let each of myArray){
            let v0a=each.split('@');
            let listItem = document.createElement("li")
            listItem.classList.add("mb-2")
            listItem.classList.add("list-item-style")
            listItem.textContent=v0a[0]
            listItem.setAttribute('value',v0a[1]);
            ulEl.appendChild(listItem)
        
        }
   }
}


let ulEl2 = document.getElementById("unorderedList2")
searchDataEl.addEventListener("keydown", function(event){
     let a;
     if((event.key==="Enter")&&(event.target.value!=="")){
        ulEl.classList.add("d-none")
        a = myArray.filter(each => each.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log(a)

        ulEl2.innerHTML="";
        searchDataEl.value="";
       
        for(let each of a){
            let b = each.split("@")
            console.log(b)
            let listItem = document.createElement("li")
            listItem.classList.add("mb-2")
            listItem.classList.add("list-item-style")
            listItem.textContent=b[0]
            listItem.setAttribute('id',b[1]);
            ulEl2.appendChild(listItem) 
        }
     }
}
)

document.getElementById("reservationForm").addEventListener("submit", function(event){
    event.preventDefault()
    console.log(FirstNameEl.value)
    if(FirstNameEl.value==="" || lastNameEl.value==="" || emailEl.value==="" || dateEl.value==="" || fromEl.value==="" || toEl.value===""){
        eEl.textContent="Please Enter Required Details !!"
        eEl.classList.add("error-element")
        
    }
    else{
            var params = { 
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                date: document.getElementById("date").value,
                from: document.getElementById("from").value,
                to: document.getElementById("to").value,
                // room1: document.getElementById("101").checked,
                // room2: document.getElementById("102").checked,
                // room3: document.getElementById("103").checked,
                // room4: document.getElementById("104").checked,
            }
            const serviceID ="service_mp6pigs"
            const templateID = "template_dcgujub"
        
            emailjs.send(serviceID,templateID,params)
            .then(res=>{
                alert("Your are done !!")
                document.getElementById("final-heading").textContent=`Hello ${params.name} !`
                document.getElementById("final").classList.remove("d-none")
                document.getElementById("reservationForm").classList.add("d-none")
            })
            .catch(e=>console.log(e)
            )
            eEl.textContent=""

        //    if(params.room1===true){
            if(btn1Clicked===true){

                
                document.getElementById("final-heading2").textContent=`Conerence Room 1 is Booked for You.`
           
                let displayText =  `Conference Room 1 is Booked by ${params.name} on ${params.date}, From: ${params.from} To: ${params.to} @${Math.random()*1000}`
                let locs=localStorage.getItem('saveData');
               
                if(locs)
                {
                    let newarr=JSON.parse(locs);
                    newarr.push(displayText)
                    localStorage.setItem("saveData", JSON.stringify(newarr))  
                }
                else{
                    locsrray.push(displayText);
                    localStorage.setItem("saveData", JSON.stringify(locsrray))
                }  
            }
            // else if(params.room2===true){ 
             else if(btn2Clicked===true){
                document.getElementById("final-heading2").textContent=`Conerence Room 2 is Booked for You.`
                let displayText =  `Conference Room 2 is Booked by ${params.name} on ${params.date}, From: ${params.from} To: ${params.to} @${Math.random()*1000}`
                let locs=localStorage.getItem('saveData');
               
                if(locs)
                {
                    let newarr=JSON.parse(locs);
                    newarr.push(displayText)
                    localStorage.setItem("saveData", JSON.stringify(newarr))

                }
                else{
                    locsrray.push(displayText);
                    localStorage.setItem("saveData", JSON.stringify(locsrray))
                }    
            }
            // else if(params.room3===true){
            else if(btn3Clicked===true){
                document.getElementById("final-heading2").textContent=`Conerence Room 3 is Booked for You.`
                let displayText =  `Conference Room 3 is Booked by ${params.name} on ${params.date}, From: ${params.from} To: ${params.to} @${Math.random()*1000}`
                let locs=localStorage.getItem('saveData');
               
                if(locs)
                {
                    let newarr=JSON.parse(locs);
                    newarr.push(displayText,Math.random()*1000)
                    localStorage.setItem("saveData", JSON.stringify(newarr))
                }
                else{
                 
                    locsrray.push(displayText);
                    localStorage.setItem("saveData", JSON.stringify(locsrray))
                }
            }
            // else if(params.room4===true){
            else if(btn4Clicked===true){
                document.getElementById("final-heading2").textContent=`Conerence Room 4 is Booked for You.`
                let displayText =  `Conference Room 4 is Booked by ${params.name} on ${params.date}, From: ${params.from} To: ${params.to} @${Math.random()*1000}`
                let locs=localStorage.getItem('saveData');
               
                if(locs)
                {
                    let newarr=JSON.parse(locs);
                    newarr.push(displayText)
                    localStorage.setItem("saveData", JSON.stringify(newarr))
                }
                else{
                    locsrray.push(displayText);
                    localStorage.setItem("saveData", JSON.stringify(locsrray))
                }    
            }
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
    document.getElementById("final").classList.add("d-none")
    document.getElementById("homePage").classList.remove("d-none")
    
}



