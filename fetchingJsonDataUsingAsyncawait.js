
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // We need json data
        //console.log(response.json())
        // returns a promsise with array of data
        const data = await response.json();
        // console.log("Promise with arrayof data:", data);
        for( let i = 0; i < data.length; i++){
            console.log(data[i].name);
        }
    }
    catch(error) {
        console.log(error);
    }
}

getData();