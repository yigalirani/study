"use strict"; //attemt to find leap seconds. it does not work, seems like leap seoends silliness affect unix time itself
var last_sec=59
for (let i=0;i<2000000000;i++){
  var date = new Date(i * 1000);
  let sec=date.getUTCSeconds();
  const diff=Math.abs(sec-last_sec)
  const is_leap=diff!=1&&diff!=59
  if (is_leap||i%10000000==0)
    console.log(is_leap,diff,i,date.toISOString(),sec,last_sec)
  last_sec=sec
}
