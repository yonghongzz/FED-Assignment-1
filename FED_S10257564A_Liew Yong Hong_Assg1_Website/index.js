/*
This javascript function is to change the picture of comingsoon block every 3 seconds
I first store all the image in the two-dimension array
then use the get id to get the image of each comingsoon image on html
the function is to iterate the images array and replace the current
image on html to be the iterated image in array
Add 1 to index after one complete for loop
Make the changes repeat by changing the index to 0 
when it finish iterate the array
lastly set the time interval to 3000ms = 3seconds.
*/

document.addEventListener('DOMContentLoaded', function () {
    const images = [
        ['Image/comingsoon8.jpg', 'Image/comingsoon9.jpg', 'Image/comingsoon1.jpg'],
        ['Image/js1.jpg', 'Image/js2.jpg', 'Image/comingsoon2.jpg'],
        ['Image/js3.jpg', 'Image/js4.jpg', 'Image/comingsoon3.jpg'],
        ['Image/js5.jpg', 'Image/js6.jpg', 'Image/comingsoon4.jpg'],
        ['Image/js7.jpg', 'Image/js8.jpg', 'Image/comingsoon5.jpg'],
        ['Image/js9.jpg', 'Image/js10.jpg', 'Image/comingsoon6.jpg'],
        ['Image/js11.jpg', 'Image/js12.jpg', 'Image/comingsoon7.jpg']
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