const Name = document.getElementById('Name');
const Subs = document.getElementById('Subs');
const thumbnail = document.getElementById('thumbnail');
const Button = document.getElementById("SubmitButton");
const TotalViews = document.getElementById("TotalViews");
const TotalVideos = document.getElementById("TotalVideos");

const center = document.getElementById("center");
const left = document.getElementById("left");
const right = document.getElementById("right");


let ytid, ytapikey = "";

Button.addEventListener("click", function() {
    ytapikey = document.getElementById("ytapikey").value;
    ytid = document.getElementById("ytid").value;
    setInterval(YoutubeData, 10000);
})

function YoutubeData() {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${ytid}&key=${ytapikey}`)
    .then(res => res.json())
    .then(result => {
        thumbnail.src = result.items[0].snippet.thumbnails.medium.url;
        Name.innerHTML = result.items[0].snippet.title;
        Subs.innerHTML = result.items[0].statistics.subscriberCount;
        center.style.display = "block";
        
        TotalViews.innerHTML = result.items[0].statistics.viewCount;
        left.style.display = "block";
        
        TotalVideos.innerHTML = result.items[0].statistics.videoCount;
        right.style.display = "block";
    });
}