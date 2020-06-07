window.onload=function(){
   // this.document.write("Hello JavaScript!");

};


$(document).ready(function(){
    $("#select").click(function(){
        let number0fListItem=$("li").length;
        let randomChildNumber=Math.floor(Math.random()*number0fListItem);
        $("H1").text($("li").eq(randomChildNumber).text()); //改文字
        
        $("img").attr("src", pictures[randomChildNumber]); //改圖片
        $("#cool").width(400);
        $("#cool").height(250);
    });
});


