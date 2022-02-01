const like = document.getElementById("feedback-like");
let counter = document.getElementById("feedback-count");

like.addEventListener('click', function() {
    let clicks = 0;

    if (counter.innerText !== '') {
        clicks = +counter.innerText;
    }

    counter.innerText = clicks + 1;
});