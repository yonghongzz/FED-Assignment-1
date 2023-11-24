document.addEventListener('DOMContentLoaded', function () {
    const images = [
        ['comingsoon8.jpg', 'comingsoon9.jpg', 'comingsoon1.jpg'],
        ['js1.jpg', 'js2.jpg', 'comingsoon2.jpg'],
        ['js3.jpg', 'js4.jpg', 'comingsoon3.jpg'],
        ['js5.jpg', 'js6.jpg', 'comingsoon4.jpg'],
        ['js7.jpg', 'js8.jpg', 'comingsoon5.jpg'],
        ['js9.jpg', 'js10.jpg', 'comingsoon6.jpg'],
        ['js11.jpg', 'js12.jpg', 'comingsoon7.jpg']
    ];

    const sliderImage = [
        document.getElementById('sliderImage1'),
        document.getElementById('sliderImage2'),
        document.getElementById('sliderImage3'),
        document.getElementById('sliderImage4'),
        document.getElementById('sliderImage5'),
        document.getElementById('sliderImage6'),
        document.getElementById('sliderImage7')
    ];

    let index = 0;

    function changeImage() {
        for (let i = 0; i < sliderImage.length; i++) {
            sliderImage[i].src = images[i][index];
        }
        index++;
        if (index === images[0].length) {
            index = 0;
        }
    }

    setInterval(changeImage, 3000);
});
