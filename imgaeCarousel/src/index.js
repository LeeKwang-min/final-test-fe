const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const imageContainer = document.querySelector('.image-container');

let curIdx = 0;
const imageUrl = ['./assets/image_1.png', './assets/image_2.png', './assets/image_3.png', './assets/image_4.png', './assets/image_5.png'];

const makeImageList = () => {
    imageContainer.innerHTML = '';
    let newHTML = '';
    for(let i = 0; i<imageUrl.length; i++) {
        newHTML += `<ul class="carousel-image"><img src="${imageUrl[(3 + i + curIdx) % imageUrl.length]}"></ul>`;
    }
    imageContainer.innerHTML = newHTML;
}

window.addEventListener('DOMContentLoaded', () => {
    makeImageList();
})

prevBtn.addEventListener('click', (e) => {
    curIdx++;
    if(curIdx === 5) curIdx = 0;
    makeImageList();
});

nextBtn.addEventListener('click', (e) => {
    curIdx--;
    if(curIdx === -5) curIdx = 0;
    makeImageList();
});