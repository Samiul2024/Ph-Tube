// alert("index connected")
function loadCategories() {
    // console.log("category is loading")
    //1- fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        //2- convert promise to json
        .then((res) => res.json())
        //3- send data to displayCategory
        .then((data) => displayCategories(data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}

function displayCategories(categories) {
    // console.log(categories);
    // get the container
    const categoryContainer = document.getElementById("category-container")
    //Loop operation on Array of object
    for (let cat of categories) {
        // console.log(cat)
        // create element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    
        `
        // Append the element
        categoryContainer.append(categoryDiv)
    }
}

// {
//     "category_id": "1003",
//     "video_id": "aaak",
//     "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
//     "title": "Beyond The Pale",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
//             "profile_name": "Jim Gaffigan",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "2.6K",
//         "posted_date": "15400"
//     },
//     "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."
// }
const displayVideos = (videos) => {
    // console.log(videos)
    const videoContainer = document.getElementById("video-container");
    videos.forEach(video => {
        // console.log(video)
        // create element 
        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
<div class="card bg-base-100  ">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded">3hrs 56 min ago</span>
            </figure>
            <div class="py-5 flex gap-3 px-0">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-semibold">Shape of You</h2>
                    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}
                        <img  class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                    </p>
                    <p class="text-sm text-gray-400">${video.others.views}</p>
                </div>
            </div>
        </div>  `;
        videoContainer.append(videoCard)

    })
}

loadCategories();
loadVideos();