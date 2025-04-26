/*
   This is a scaffold JavaScript file for the image carousel project.
   You'll need to implement the functionality of the carousel here.
   Consider the following steps:

   1. Define an array of image URLs for your carousel
   2. Keep track of the current image index
   3. Select and store references to your HTML elements (image container, prev/next buttons)
   4. Implement a function to update the displayed image
   5. Add event listeners to the prev/next buttons to change the current image
   6. Initialize the carousel with the first image

   Remember to use appropriate variable names and comments to make your code readable.
   Feel free to add any additional features or improvements to enhance the user experience!
*/

const imgArr = ['https://images.pistonheads.com/nimg/47438/blobid0.jpg','https://roadwaycars.in/wp-content/uploads/2022/10/E34-2.jpg','https://i.guim.co.uk/img/media/00632053338d2764fc06b35443ae4b69da0a98cc/0_91_3500_2099/master/3500.jpg?width=1200&quality=85&auto=format&fit=max&s=acb9732110a51c54eb2dec22e1f0acb9','https://www.usnews.com/object/image/0000018c-6ea6-d7c8-a1cf-7fbf48ee0001/01-2024-ford-bronco-angular-front-jms.JPG?update-time=1702663605171&size=responsive640','https://c4.wallpaperflare.com/wallpaper/69/743/592/mini-morris-mini-cooper-s-car-old-car-red-car-hd-wallpaper-preview.jpg'];

let imgIndex = 0;

//Store Element references
const image = document.querySelector('#carouselImage');
const prevBt = document.querySelector('#prevButton');
const nextBt = document.querySelector('#nextButton');

// console.log(image);

//Display the image
function displayImage(){
   image.src = imgArr[imgIndex];
}

prevBt.addEventListener('click', function(){
   imgIndex = (imgIndex-1+imgArr.length) % imgArr.length;
   displayImage();
})

nextBt.addEventListener('click', function(){
   imgIndex = (imgIndex+1) % imgArr.length;
   displayImage();
})
displayImage();