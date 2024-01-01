var adpopupbutton=document.getElementById("ad-popup-button")
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")

adpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbook=document.getElementById("cancel-book")
cancelbook.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.getElementsByClassName("container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var booktextareainput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2><h5>${bookauthorinput.value}</h5><p>${booktextareainput.value}</p><button onclick="deletebook(event)">Delete</button>`;
    container[0].append(div);
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    
})

function deletebook(event)
{
    event.target.parentElement.remove()
}