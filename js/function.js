var intro = introJs().setOptions({
    hidePrev: true,
    hideNext: true,
    exitOnOverlayClick: false,
    exitOnEsc: false,
    steps: [
        {
            element: document.querySelector("#content"),
            intro: "This whole area does something."
        },
        {
            element: document.querySelectorAll("li")[0],
            intro: "This is the first item in the list. It also does something."
        },
        {
            element: document.querySelectorAll("li")[1],
            intro: "This second item probably does something as well"
        },
        {
            element: document.querySelector("button"),
            intro:
                "<p>This is a button that needs a good clicking</p>" +
                '<video src="https://media.giphy.com/media/l41YbDNR4q8BZJ7tm/giphy.mp4" autoplay loop />',
            tooltipClass: "wideo"
        }
    ]
}).oncomplete(() => document.cookie = "intro-complete=true");

var start = () => intro.start();

window.addEventListener("load", () =>
    document.querySelector("#starter").addEventListener("click", e => {
        e.preventDefault();
        start();
    })
);

if (document.cookie.split(";").indexOf("intro-complete=true") < 0)
    window.setTimeout(start, 1000);