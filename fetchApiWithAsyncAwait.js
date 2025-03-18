


async function getData() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?format=txt')
        console.log("Response object:", response);
        // again another request
        const data = await response.text()
        console.log("Data fetched:", data);
    }
    catch(error) {
        console.log(error);
    }
}

getData();