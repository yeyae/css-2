// const title document.querySelector("#hello");

// console.log(title);

const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(title);
// title.style.color="blue";

function handTitleClick(){
    h1.style.color = "blue";
//     console.log("title was clicked!");
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
//or title.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
//or title.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseEnter);
//나중에 .removeEventListener을 사용할 수 있기 때문에 .addEventListener을 사용하는 게 좋음

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);