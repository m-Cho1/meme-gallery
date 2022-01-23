var gallery = document.querySelector('main');
var imageUrls = ['https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://b2cproductionsite-be80wkthrgjjkmzuip0.netdna-ssl.com/sites/b2c/files/styles/orange_blog_in_picture/public/generated/blog/memes.png?itok=lYWyPTc-',
  'https://www.passionweiss.com/wp-content/uploads/2015/12/nick-young-confused-face.jpg',
  'https://miro.medium.com/max/1200/1*RSuZC5ZglLe7zyVcYcrmBA.jpeg'];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
});

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}
updateGallery();
addImageButton.addEventListener('click', updateGallery);
