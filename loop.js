"use strict";
function loop_over_set(){
  s=new Set(['david','jason','james','robert'])
  for (const x of s)
    console.log(x)
}
function loop_over_object(){
  var h={
    david:1969,
    jason:1971,
    james:1974,
    robert:1979
  }
  for (const x in h) //for of wont work here it will complain that h is not iterable. this is the only place where in is usefull: loop over object keys
    console.log(x)
  for (const f of [Object.entries,Object.keys,Object.values]){
    console.log('---',f.name)
    for (const x of f(h)) //to uee of to loop over object, must use Object.entries
      console.log(x)    
  }
}

loop_over_object()