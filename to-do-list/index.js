const inputBox = document.getElementById("input")
const listContainer = document.getElementById("list-container")


function addtask() {
    if(inputBox.value === ""){
        alert("please add text first.");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)

        savedata()
    }

    listContainer.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked")
            savedata()
        }

        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
            savedata()
        }
    },false)

    inputBox.value=""
    function savedata(){
        localStorage.setItem("data",listContainer.innerHTML)
    }

}

    function getdata(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    getdata()
