var blockEventsList = [];

// get and format the currentDay and display it on the page
var displayCurrentDay = function(){
    var tempText = moment().format("dddd, MMMM Do");
    $("#currentDay").text(tempText);
}

//create and display time block
var displayBlockEvents = function(){
  
    for(var i = 7; i <18; i++){
        tempRow = $("<div>").addClass("row");
        
        tempTimeOfDay = $("<div>")
        .addClass("col-2 pt-3 hour")
        .text(moment(i,"H")
        .format("ha"));

        var tempId = i - 7;
        tempTextarea = $("<textarea>").addClass("col past").attr("id",tempId);

        tempButtonDiv = $("<div>")
        .addClass("col-1 saveBtn")
        .append($("<span>")
        .addClass("oi oi-circle-check"));

        tempRow.append(tempTimeOfDay,tempTextarea,tempButtonDiv);
        blockEventsList.push(tempRow);
        $(".container").append(tempRow);
    }
    console.log(blockEventsList);
    
}

var addSavedEvents = function(){

}
var loadBlockEvents = function(){
    var tempList = JSON.parse(localStorage.getItem("events"));

    //events not empty
    if(tempList){
        addSavedEvents(tempList);
    }
    
}

var loadPage = function(){
    displayCurrentDay();
    displayBlockEvents();
    loadBlockEvents();

}

$(".container").on("click","textarea",function(){
  
  console.log($(this).attr("id"));
    
})

$(".container").on("blur","textarea",function(){
    console.log("blur");
})





loadPage();