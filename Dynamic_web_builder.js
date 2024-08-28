function createCard(videoTitle, channelName, view, monthsOld, vidThumbnail, vidDuration){

    // Create the card container
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    document.querySelector(".container").append(card);

    // Create and set up the thumbnail
    let thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail");
    thumbnail.style.backgroundImage = `url(${vidThumbnail})`;
    card.append(thumbnail); // Use 'card' instead of querying the DOM

    
    // Create and set up the duration 
    let duration = document.createElement("div");
    duration.setAttribute("class", "duration");
    duration.innerHTML = `${vidDuration}`;
    thumbnail.append(duration); // Use 'thumbnail' instead of querying the DOM

    // Create and set up the info container
    let info = document.createElement("div");
    info.setAttribute("class", "info");
    card.append(info); // Use 'card' instead of querying the DOM

    // Create and set up the title
    let title = document.createElement("div");
    title.setAttribute("class", "title");
    title.innerHTML = videoTitle;
    info.append(title); // Use 'info' instead of querying the DOM

    // Create and set up the info2 container
    let info2 = document.createElement("div");
    info2.setAttribute("class", "info2");
    info.append(info2); // Use 'info' instead of querying the DOM

    // Create and set up the channel name
    let cName = document.createElement("div");
    cName.setAttribute("class", "cName");
    cName.innerHTML = channelName;
    info2.append(cName); // Use 'info2' instead of querying the DOM

    // Create and set up the views
    let views = document.createElement("div");
    views.setAttribute("class", "views");
    let formattedViews;
    if (view < 1000) {
        formattedViews = `${view} views`;
    } else if (view < 1000000) {
        formattedViews = `${(view / 1000).toFixed(1)}k views`; // Added rounding for cleaner display
    } else if (view < 1000000000) {
        formattedViews = `${(view / 1000000).toFixed(1)}M views`; // Added rounding for cleaner display
    } else {
        formattedViews = `${(view / 1000000000).toFixed(1)}B views`; // Added rounding for cleaner display
    }
    views.innerHTML = formattedViews;
    info2.append(views); // Use 'info2' instead of querying the DOM

    // Create and set up the months ago
    let month = document.createElement("div");
    month.setAttribute("class", "month");
    month.innerHTML = `${monthsOld} months ago`;
    info2.append(month); // Use 'info2' instead of querying the DOM

}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 2200000, 10, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ", "12:30");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 2300000, 9, "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg", "18:00");


console.log(document.body);


// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     // Finish this function
//     let viewStr
//     if (views < 1000) {
//         viewStr = views;
//     }
//     else if (views > 1000000) {
//         viewStr = views / 1000000 + "M";
//     }
//     else {
//         viewStr = views / 1000 + "K";
//     }
//     let html = `<div class="card">
//     <div class="image">
//         <img src="${thumbnail}"
//             alt="">
//         <div class="capsule">${duration}</div>
//     </div>
//     <div class="text">
//         <h1>${title}</h1>
//         <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
//     </div> 
// </div>`

//     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


// harry's solution 