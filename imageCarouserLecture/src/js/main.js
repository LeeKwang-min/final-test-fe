(() => {
    const carouselUl = document.querySelector('.carousel-list');
    const imageInput = document.querySelector('#image-upload-input');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function changeTransform() {
        const items = document.querySelectorAll('.carousel-item');
        let deg = 180 / items.length;
        if(items.length > 1) {
            items.forEach((item, idx) => {
                if(idx === 0) {
                    item.style.transform = 'rotateY(0deg) translateZ(250px)';
                } else {
                    item.style.transform = `rotateY(${deg * idx}deg) translateZ(250px) rotateY(-${deg * idx}deg)`;
                }
            })
        }

        if(items.length >= 5) {
            items.forEach((item, idx) => {
                if(idx === 0) {
                    item.style.transform = 'rotateY(0deg) translateZ(250px)';
                } else if(idx === 1) {
                    item.style.transform = `rotateY(72deg) translateZ(250px) rotateY(-72deg)`;
                } else if(idx === 2) {
                    item.style.transform = `rotateY(144deg) translateZ(250px) rotateY(-144deg) translateX(400px)`;
                } else if(idx === items.length - 2) {
                    item.style.transform = `rotateY(216deg) translateZ(250px) rotateY(-216deg) translateX(-400px)`;
                } else if(idx === items.length - 1) {
                    item.style.transform = `rotateY(288deg) translateZ(250px) rotateY(-288deg)`;
                } else {
                    item.style.transform = `rotateY(${deg * idx}deg) translateZ(250px) rotateY(-${deg * idx}deg)`;
                }
            })
        }
    }

    function movePrev() {
        const items = document.querySelectorAll('.carousel-item');

        if(items.length > 1) {
            const currentItem = document.querySelector('.now');
            const lastItem = carouselUl.lastElementChild;

            carouselUl.insertBefore(lastItem, items[0]);
            currentItem.classList.remove('now');

            lastItem.classList.add('now');
        }
        changeTransform();
    }

    function moveNext() {
        const items = document.querySelectorAll('.carousel-item');

        if(items.length > 1){
            const currentItem = document.querySelector('.now');
            const next = currentItem.nextElementSibling;

            carouselUl.appendChild(currentItem);
            currentItem.classList.remove('now');

            next.classList.add('now');
        }
        changeTransform();
    }

    function createTag(url) {
        const list = document.createElement('li');
        const img = document.createElement('img');

        list.classList.add('carousel-item');
        img.src = url;

        list.appendChild(img);
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item) => {
            item.classList.remove('now');
        });
        list.classList.add('now');

        return list;
    }

    function uploadImg(value) {
        const items = document.querySelectorAll('.carousel-item');

        if(value.files) {
            const reader = new FileReader();

            reader.onload = e => {
                const imgUrl = e.target.result;
                carouselUl.insertBefore(createTag(imgUrl), items[0]);
                changeTransform();
            }

            reader.readAsDataURL(value.files[0]);
        }
    }

    prevBtn.addEventListener('click', movePrev);
    nextBtn.addEventListener('click', moveNext);
    imageInput.addEventListener('change', e => {
        uploadImg(e.target);
    })

    window.onload = () => {
        changeTransform();
    }
})(); // IIFE 패턴