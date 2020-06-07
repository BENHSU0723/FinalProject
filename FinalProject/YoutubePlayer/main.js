var player;  //youtube撥放器
var currentPlay=0;

//當youtube API準備好時
function onYouTubeIframeAPIReady(){
    player=new YT.Player("player",
        {
            height:"390",
            width:"640",
            videoId:playList[currentPlay],
            playerVars:{
            "autoplay":0, //不自動撥放
            "controls":0, //不顯示控制項
            "start":playTime[currentPlay][0],  //起始秒數
            "end":playTime[currentPlay][1],   //結束秒數
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3  //不顯示影片註解式行銷
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
      }
    );
 }

 //當YOUTUBE撥放器準備好時
function onPlayerReady(event){ 
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
$(document).ready(function(){

$("#stopButton").click(function(){
    if(currentPlay<playList.length-1){
        currentPlay++;
        player.loadVideoById({
            "videoId":playList[currentPlay],
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
        });
    }else{ //已經撥到最後一首的話，將第一手準備好，並且停止撥放
        currentPlay=0;
        player.cueVideoById({
            "videoId":playList[currentPlay],
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
        });
    } //影片開始時抓取影片標題來顯示
    if(player.getVideoLoadedFraction()>0){
    $("h2").text(player.getVideoData().title);}
    });
});

//當YOUTUBE撥放器狀態改變時
function onPlayerStateChange(event){ 
    //當目前撥放秒數與預期撥放結束秒數相同時，去撥下一首
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        //正常撥下一首
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{ //已經撥到最後一首的話，將第一手準備好，並且停止撥放
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    } //影片開始時抓取影片標題來顯示
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }
}
