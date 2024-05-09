let post = document.getElementById("post9");
let likq = document.getElementById("likq");
let heart = document.getElementById("heart");
let heart1 = document.getElementById("heart1");
let heart2 = document.getElementById("heart2");
let heart3 = document.getElementById("heart3");
let heart4 = document.getElementById("heart4");
let heart5 = document.getElementById("heart5");






likq.innerText = 'No likes';
let counter = 0;

post.addEventListener('dblclick', () => {
    counter++;
    if (counter == 1) likq.innerText = counter + ' like';
    else likq.innerText = counter + ' likes';

    heart.classList.add('many-like');
    setTimeout(()=>{
        heart.classList.remove('many-like')
    }, 1000)
});

let post1 = document.getElementById("post10");
let likq1 = document.getElementById("likq1");

likq1.innerText = 'No likes';
let counte = 0;

post1.addEventListener('dblclick', () => {
    counte++;
    if (counte == 1) likq1.innerText = counte + ' like';
    else likq1.innerText = counte + ' likes';
    heart1.classList.add('many-like');
    setTimeout(() => {
        heart1.classList.remove('many-like')
    }, 1000)
});

let post2 = document.getElementById("post11");
let likq2 = document.getElementById("likq2");

likq2.innerText = 'No likes';
let count = 0;

post2.addEventListener('dblclick', () => {
    count++;
    if (count == 1) likq2.innerText = count + ' like';
    else likq2.innerText = count + ' likes';
    heart2.classList.add('many-like');
    setTimeout(() => {
        heart2.classList.remove('many-like')
    }, 1000)
});

let post3 = document.getElementById("post12");
let likq3 = document.getElementById("likq3");

likq3.innerText = 'No likes';
let coun = 0;

post3.addEventListener('dblclick', () => {
    coun++;
    if (coun == 1) likq3.innerText = coun + ' like';
    else likq3.innerText = coun + ' likes';
    heart3.classList.add('many-like');
    setTimeout(() => {
        heart3.classList.remove('many-like')
    }, 1000)
});

let post4 = document.getElementById("post13");
let likq4 = document.getElementById("likq4");

likq4.innerText = 'No likes';
let cou = 0;

post4.addEventListener('dblclick', () => {
    cou++;
    if (cou == 1) likq4.innerText = cou + ' like';
    else likq4.innerText = cou + ' likes';

    heart4.classList.add('many-like');
    setTimeout(() => {
        heart4.classList.remove('many-like')
    }, 1000)
});

let post5 = document.getElementById("post14");
let likq5 = document.getElementById("likq5");

likq5.innerText = 'No likes';
let co = 0;

post5.addEventListener('dblclick', () => {
    co++;
    if (co == 1) likq5.innerText = co + ' like';
    else likq5.innerText = co + ' likes';

    heart5.classList.add('many-like');
    setTimeout(() => {
        heart5.classList.remove('many-like')
    }, 1000)
});

function addComment1(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text1');
    const newComment = document.createElement('div');
    newComment.classList.add('comment1');
    newComment.textContent = commentText;
    const commentsSection1 = document.querySelector('.comments1');
    commentsSection1.appendChild(newComment);
}
function addComment2(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text2');
    const newComment = document.createElement('div');
    newComment.classList.add('comment2');
    newComment.textContent = commentText;
    const commentsSection2 = document.querySelector('.comments2');
    commentsSection2.appendChild(newComment);
}
function addComment3(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text3');
    const newComment = document.createElement('div');
    newComment.classList.add('comment3');
    newComment.textContent = commentText;
    const commentsSection3 = document.querySelector('.comments3');
    commentsSection3.appendChild(newComment);
}
function addComment4(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text4');
    const newComment = document.createElement('div');
    newComment.classList.add('comment4');
    newComment.textContent = commentText;
    const commentsSection4 = document.querySelector('.comments4');
    commentsSection4.appendChild(newComment);
}
function addComment5(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text5');
    const newComment = document.createElement('div');
    newComment.classList.add('comment5');
    newComment.textContent = commentText;
    const commentsSection5 = document.querySelector('.comments5');
    commentsSection5.appendChild(newComment);
}
function addComment6(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text6');
    const newComment = document.createElement('div');
    newComment.classList.add('comment6');
    newComment.textContent = commentText;
    const commentsSection6 = document.querySelector('.comments6');
    commentsSection6.appendChild(newComment);
}
