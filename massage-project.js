var todaySetOfLuck =  [];
function Rand(index){
    return Math.floor(Math.random() * index);

}

let set = {
    love: ["*","**","***","****","*****"] ,
    luck: ["*","**","***","****","*****"] ,
    health: ["*","**","***","****","*****"] ,
    work: ["*","**","***","****","*****"] ,
}

// Iterate over the object
for(let a in set){
    switch(a){ 
    case `love`:
     todaySetOfLuck.push(`Love: ${set.love[Rand(5)]}`)
     break;
    case `luck`:
        todaySetOfLuck.push(`Luck: ${set.luck[Rand(5)]}`)
       break
    case `health`:
        todaySetOfLuck.push(`Health: ${set.health[Rand(5)]}`)
         break
    case `work`:
        todaySetOfLuck.push(`Work: ${set.work[Rand(5)]}`)
         break
        default:
             console.log("Something goes wrong")
             break

}
}
// Make new lines in our set of lucks
function format(today){
let format = todaySetOfLuck.join(`\n`)
console.log(format);
}



format(todaySetOfLuck);
