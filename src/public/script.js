async function getData(id) {
    let response = await fetch(`http://localhost:30001/api/data/${id}`);
    let responseObj = await response.json();
    return responseObj.data;
}
