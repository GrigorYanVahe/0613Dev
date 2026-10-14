const scrol = document.getElementById("scrol")

let isDragging = false;
let startX;
let scrollLeft;

scrol.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrol.offsetLeft;
    scrollLeft = scrol.scrollLeft;
    console.log("mousedown");

});

scrol.addEventListener("mouseup", (e) => {
    isDragging = false;
    
    console.log("mouseup");
})

scrol.addEventListener("mouseleav", (e) => {
    isDragging = false;
    console.log("mouseleav");
})

scrol.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrol.offsetLeft;
    const distance = x - startX;

    scrol.scrollLeft = scrollLeft - distance;
    console.log("mousemove");
})

const rawData = [
    {
        imgUrl: "image/woman.png",
        username: "Your Story"
    },
    {
        imgUrl: "image/user.png",
        username: "User 1"
    },
    {
        imgUrl: "image/boy.png",
        username: "User 2"
    },
    {
        imgUrl: "image/profile.png",
        username: "User 3"
    },
    {
        imgUrl: "image/profile (1).png",
        username: "User 4"
    },
    {
        imgUrl: "image/human.png",
        username: "User 5"
    },
    {
        imgUrl: "image/user.png",
        username: "User 6"
    },
    {
        imgUrl: "image/boy.png",
        username: "User 7"
    },
    {
        imgUrl: "image/profile.png",
        username: "User 8"
    },
    {
        imgUrl: "image/profile (1).png",
        username: "User 9"
    },
    {
        imgUrl: "image/human.png",
        username: "User 10"
    }
];

let stories = rebuildStories()

function rebuildStories() {
    let result = []
    for (let i = 0; i < rawData.length; i++) {
        const story = rawData[i]
        let newStory = new StoryMaker(story.imgUrl, story.username)
        result.push(newStory)
    }
    return result
}

function StoryMaker(imgUrl, username) {
    this.imgUrl = imgUrl;
    this.username = username;
}

function renderStory() {
    let storyContainer = document.getElementById("scrol")
    if (!storyContainer) {
        return;
    }
    storyContainer.replaceChildren();

    for (let i = 0; i < stories.length; i++) {
        let data = stories[i];
        console.log(data.imgUrl)
        let card = document.createElement("div")

        card.addEventListener("click", (event) => {
            alert(data.username)
        });

        let image = document.createElement("img")
        image.src = data.imgUrl
        card.appendChild(image)

        let name = document.createElement("p")
        name.textContent = data.username
        card.appendChild(name)

        storyContainer.append(card)

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        card.appendChild(deleteButton)

        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation()
            stories.splice(i, 1)
            renderStory()
        })
    }
}

renderStory()

// console.log(JSON.stringify(stories))

