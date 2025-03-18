// we have function return an array , this is an synchronous funct 
// convert this synchronous func to async function and display inside getUser

console.log("Before");

getUser(1, function(user) {
    console.log(user);
    console.log("Username of user:",user.userName);
    getRepos(user.userName, function(repodetails) {
        console.log(repodetails);
        getCommits(repodetails[0], function(message) {
            console.log(message);
        })
    })
    
})

// There are multiple functions inside one function
// callback hells : Multiple function inside one function
// This callback hell is a drawback of callbacks

console.log("After");

// Getting all details from the server
function getUser(id, callback){
    setTimeout(function() {
        console.log("Feching data from server")
        callback({id, userName: "abc"});
    });
};

// get repositorys of the particular github user
function getRepos(userName, callback){
    setTimeout(function() {
        console.log(`Repos of the user  ${userName}`)
        callback(['rep1','rep2','repo3']);
    });
};

// getCommit message of the particular repo
function getCommits(rep, callback) {
    setTimeout(function() {
        console.log("Commit message");
        callback("My first commit");
    })
}