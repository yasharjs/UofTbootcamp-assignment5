var blockEventsList = [];


var updateTime = function(){
    //check due date for each task
    for(var i = 7; i < 18; i++){
        if (i < moment().format("H")){
            var tempClass = "past";
        }
        else if (i > moment().format("H")){
            var tempClass = "future";
        }
        else{
            var tempClass = "present";
        }
        
        var index = i -7;
        $("#"+index).addClass(tempClass);
}

}
    
   
    
   
    
//format the currentDay and display it on the page
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

        if(blockEventsList[tempId]){
            var tempText = blockEventsList[tempId];
        }
        else{
            var tempText = "";
        }
        
        tempTextarea = $("<textarea>").addClass("col").attr("id",tempId).text(tempText);
        

        tempButtonDiv = $("<div>")
        .addClass("col-2 col-md-1 saveBtn")
        .append($("<span>")
        .addClass("oi oi-circle-check"));

        tempRow.append(tempTimeOfDay,tempTextarea,tempButtonDiv);
        $(".container").append(tempRow);
    }
    
}

//load saved events from localStorage
var loadBlockEvents = function(){
    var tempList = JSON.parse(localStorage.getItem("events"));

    //events not empty
    if(tempList){
        blockEventsList = tempList;
    }
    
}






loadBlockEvents();
displayCurrentDay();
displayBlockEvents();
updateTime();
setInterval(updateTime,6000);
  
//save the current task on click
$(".saveBtn").on("click",function(){
    var tempText = $(this).siblings("textarea").val();
    var tempId = $(this).siblings("textarea").attr("id");

    blockEventsList[tempId] = tempText;

    localStorage.setItem("events", JSON.stringify(blockEventsList));

  });
