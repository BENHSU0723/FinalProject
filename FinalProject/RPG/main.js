
let mapArray ,ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain ,imgEnemy;

$(document).ready(function(){
    mapArray=[0,1,1,0,0,0,3,1,2];  //game map
    ctx=$("#myCanvas")[0].getContext("2d");

    imgMain= new Image();  //擺主角
    imgMain.src ="images/spriteSheet.png";
    currentImgMainX=0;
    currentImgMainY=0;
    imgMain.onload=function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };

    imgMountain= new Image();
    imgMountain.src="images/material.png";
    imgEnemy =new Image();
    imgEnemy.src= "images/Enemy.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(let x in mapArray){
                if(mapArray[x]==1){
                    ctx.drawImage(imgMountain,65,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                }else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy,625,55,90,130,x%3*200+30,Math.floor(x/3)*200,200,200);
                }
            }
        }
    };
});

$(document).keydown(function(event){
    let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;

    event.preventDefault();

    switch(event.code){
        case "ArrowLeft": //向左
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=175;
            break;
        case "ArrowUp": //向上
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;
            cutImagePositionX=355;
            break;
        case "ArrowRight": //向右
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=540;
            break;
        case "ArrowDown": //向下
            targetImgMainX=currentImgMainX;
            targetImgMainY =currentImgMainY+200;
            cutImagePositionX=0;
            break;
        default:
            return;
}
            //在邊界內
        if(targetImgMainX<=400&&targetImgMainX>=0 &&
            targetImgMainY<=400 && targetImgMainY>=0){
                targetBlock=targetImgMainX/200+targetImgMainY/200*3;
        }else{ //超出邊界
            targetBlock=-1;
        }
        //清除主角所在的位置
        ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
        if(targetBlock==-1 ||mapArray[targetBlock]==1 ||mapArray[targetBlock]==3){
            //所有異常(出界/遇到敵人/遇到障礙物都不能動)
        }else{  //正常狀況就設定新位置  
            $("#talkBox").empty();
            currentImgMainX=targetImgMainX;
            currentImgMainY=targetImgMainY;
        }
        //在新位置上畫上主角
        ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);

        switch(mapArray[targetBlock]){
            case undefined:
                $("#talkBox").text("外面有水!!");
                break;
            case 1:
                $("#talkBox").text("有好吃的番茄");
                break;
            case 2:
                $("#talkBox").text("arrived");
                break;
            case 3:
                $("#talkBox").text("Hey Nacked Bro");
                break;
        } 
});