const filterOutOdds = (...values)=>values.filter(v=>v%2==0);
//console.log(filterOutOdds(1,2,5,7,8,11,14,13));

const findMin = (...nums) => Math.min(...nums);
//console.log(findMin(3,1));

const mergeObjects =(a,b)=>({...a,...b});
//console.log(mergeObjects({a:1,b:2},{c:3,d:4}));

const doubleAndReturnArgs = (arr,...args)=>[...arr,...args.map(v=>v*2)]

const removeRandom = (items) =>{
    let idx = Math.floor(Math.random()*items.length);
    return [...items.slice(0,idx),...items.slice(idx+1)];
}

const extend = (a,b) => ([...a,...b]);

const addKeyVal = (obj,key,val)=>{
    let newObj={...obj};
    newObj[key]=val;
    return newObj;
}

const removeKey = (obj,key){
    let newObj={...obj};
    delete newObj[key]; //delete operator not working in my vsCode?
    return newObj;
}

const combine = (a, b) => {
    return {...a, ...b};
  }

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}