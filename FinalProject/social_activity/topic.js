let topicsArray=[
    "Jimmy's night show",
    "High咖 新影片上架",
    "Bill Burr morning podcast",
    "伯恩夜夜秀",
    "Conan O'brian show",
    "Allen's talkshow",
    "無任何節目"
];

let startDate=new Date();

function setMonthAndDay(startMonth,startDay){
    //依次設定好月份和日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);