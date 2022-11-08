const form = document.querySelector('#searchForm');



form.addEventListener('submit', async function(e){
    e.preventDefault(); 

const searchTerm = form.elements.query.value;
const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
// const imagesrc = res.data[0].show.image.medium;
 makeImages(res.data);
// const img = document.createElement('img');
// img.src = imagesrc;
// document.body.append(img);
    

})

const images=document.querySelector(".images");
const makeImages =(shows)=>{

    

    for(let result of shows)
    {
        if(result.show.image)
        {
        const img = document.createElement('img');
        img.classList.add("img");
        img.src = result.show.image.medium;
        images.append(img);
        
    }
}
}