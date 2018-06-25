var num =1;
var listItem = document.getElementById("our-list").getElementsByTagName("li");
var headLine = document.getElementById("our-heading");
var ourButton = document.getElementById("our-button");
var ourList = document.getElementById("our-list");


//listItem[0].innerHTML = " something

for(i = 0;i<listItem.length; i++){
  listItem[i].addEventListener("click",activateItem);
}

function activateItem(){

  //alert("click Detected!");
  headLine.innerHTML = this.innerHTML;

}

ourButton.addEventListener("click",addItem);

function addItem(){

  ourList.innerHTML += "<li> Something New... " + num +"</li>";
  num++;
}
