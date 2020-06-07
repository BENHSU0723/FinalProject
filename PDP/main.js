$(document).ready(function(){
    
    console.log($("[type=range]").val());
    $("LABEL").text($("[type=range]").val());
    
    $("[type=range]").change(function(e){
        //console.log("Somebody change it!");
        console.log(e);
        $("LABEL").text($("[type=range]").val());
    });
 
 
    let currentQuiz = null;
    $("#startButton").click(function(){
        
    });
 
});
