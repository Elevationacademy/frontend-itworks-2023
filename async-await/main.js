
// function getNumberOfBreeds(callback) {
//     axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
//         const breedsNum = Object.keys(response.data.message).length
//         callback(breedsNum);
//     });
// }

// getNumberOfBreeds(function(result) {
//     console.log(result);
// });

// function getNumberOfBreeds() {
//     return new Promise((resolve, reject) => {
//         axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
//             const breedsNum = Object.keys(response.data.message).length
//             resolve(breedsNum);
//         }).catch(err => {
//             reject(err);
//         });
//     })
// }

async function getNumberOfBreeds() {
    // const res1 = await axios.get('url1');
    // const res2 = await axios.get('url2');

    // const promise1 = axios.get('url1');
    // const promise2 = axios.get('url2');
    // const promise3 = axios.get('url3');
    // const responses = await Promise.all([promise1, promise2]);
  
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    const breedsNum = Object.keys(response.data.message).length
    return breedsNum;
}


// const result = await getNumberOfBreeds();

getNumberOfBreeds().then(result => {
    console.log(result);
})