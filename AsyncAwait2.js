// Async & Await   

console.log("Before");

async function displayData() {
    try {
        const user = await getUser(1);
        console.log("Data fetched successfully:", user);
        const repos = await getRepos(user.userName);
        console.log("Repos of the user:", repos);
        const message = await getCommitMessage(repos[0]);
        console.log("Commit message:", message);
    }
    catch(error) {
        console.log(error);
    }
}

// Calling the async function
displayData();

// Function returning a promise
function getUser(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ id, userName: "abc" });
        }, 2000);
    });
}

function getRepos(userName) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(["repo1", "repo2", "repo2"]);
        });
    });
};

function getCommitMessage(repo) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("My first commit");
        });
    });
};
