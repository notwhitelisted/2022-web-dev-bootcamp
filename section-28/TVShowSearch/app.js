const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value; //form contains elements contains query contain value of query
    const config = { params: { q: searchTerm } } //due to Axios. setting parameter: query: searchTerm (constant)
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = ''; //resets the query/input values 
})

//separate function to create images 
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG'); //creating new IMG tag
            img.src = result.show.image.medium; //getting src for that new IMG tag
            document.body.append(img) //appending body with new IMG 
        }
    }
}