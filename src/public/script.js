async function getData(hostBaseUrl, id) {
    let response = await fetch(`${hostBaseUrl}/api/data/${id}`);
    let responseObj = await response.json();
    return responseObj.data;
}
