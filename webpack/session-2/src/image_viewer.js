import '../styles/image_viewer.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const image = document.createElement('img');

image.src = image1

document.body.appendChild(image);


const image2Element = document.createElement('img');

image2Element.src = image2

document.body.appendChild(image2Element);