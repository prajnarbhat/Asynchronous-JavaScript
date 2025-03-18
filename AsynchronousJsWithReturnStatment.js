console.log("Before");

const user = getUser(1); 
console.log(user);
// This logs '1'

console.log("After");

// Function to fetch user data from a serve
function getUser(id) {
    setTimeout(function() {
        return { id , getUserName: "abc"};
    },2000);
    return 1;
}

// output:

/* Before
1
After
Fetching data from serverr */

// But we want return { id , getUserName: "abc"}; this data
// so while getting data from database,server takes time in that time another one statement gets executed and after that DOM get faint


// To solve this issue 3 pattren
// 1.callback
// 2.promises
// 3.Asyncawait




