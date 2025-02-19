/*function promiseExample(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{ 
            if(value)
                resolve('The Promise is resolved');
            else
                reject('The Promise is rejected');
        },3000);
    })
}
promiseExample(false).then((res) => {
    console.log(res);
})
.catch((res) => {
    console.log(res);
});*/

//Location Finder
//1. Promise(locationFound, locationNotFound)
//2. Chennai, 2000

/*function locationFinder(loc, time) {
    var location = new Promise((locfound, locNotFound) => {
        setTimeout(() => {
            if(isLocationFound(loc, time))
                locfound('Location Found');
            else
                locNotFound('Location Not Found');
        }, 3000);
    });
    return location;
}

isLocationFound = (loc, t) => {
    location = "Chennai";
    time = 1000;
    if(loc === location && t >= time )
        return true;
    else
        return false;
}

locationFinder("Chennai", 2000).then((found) => {
    console.log(found);
}).catch((notfound) => {
    console.log(notfound);
});*/

// Instagram console demo for post like comment share

likeCode = async () => {
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost('liked the post successfully');
        }, 5000);
    });
}
commentCode = async () => {
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost('commented the post successfully');
        }, 5000);
    });
}
shareCode = async () => {
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost('shared the post successfully');
        }, 5000);
    });
}

async function postCode(){
    var post = new Promise((posted) => {
        setTimeout(() => {
            posted('posted the post successfully');
        }, 5000);
    });

    // console.log(await post);
    // console.log(await likeCode());
    // console.log(await commentCode());
    // console.log(await shareCode());

    const [pos, like, comment, share] = await Promise.all([post, likeCode(), commentCode(), shareCode()]);
    console.log(pos);
    console.log(like);
    console.log(comment);
    console.log(share);
}postCode()