
let closurefunc = ()=>{

    let count = 0;
    let increment =()=>{
        count += 1;
        console.log(count);
    }

    let decrement =()=>{
        count -= 1;
        console.log(count);
    }

    // return{increment, decrement};
    // return()=>{increment();decrement();}
    increment();
    increment();
    increment();
    increment();
    increment();
    decrement();
};

closurefunc();

// console.log(closurefunc()); 
// clossure function shows data only not read able it works on abstraction and encapsulation

//lexical scoping

let func = (a,b, callback) =>{
    console.log()

    console.log("lexical scope callback:"+ callback(a,b));

};

let func2 =(a,b)=> a+b;
func(1,2,func2);//virtual dom vs real dom 