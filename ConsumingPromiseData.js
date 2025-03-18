
console.log("Before");

// async promise
// const p = getUser(id) console.log(p) will return promise with fetched data
// p.then(function(user) { console.log(user)})

const p = getUser(1);
console.log("Object data:", p);
// Promise { { id: 1, userName: 'abc' } }
console.log("Object data:", getUser(1));
//  Promise { { id: 1, userName: 'abc' } }



function getUser(id){
    return new Promise(function(resolve,reject) {
        console.log("Fetching data from server:");
        resolve({id, userName: "abc"});
    },2000);
}