import FaqItem from './FaqItem';
import { motion } from 'framer-motion';

const FaqList = () => {
return (
<motion.div>
    <FaqItem question = "What is Website Development?" answer = "Website development is the entire process of building and maintaining a website or web application, from the initial planning and design to the coding, content creation, and ongoing management. It involves both the visible aspects users interact with (front-end) and the behind-the-scenes functionality and data management (back-end) to create a functional, visually appealing, and user-friendly online presence." />
    <FaqItem question = "What is Wireframing?" answer = "Wireframing is the process of creating a visual blueprint for a website, app, or other digital product to outline its structure, content, and functionality without focusing on visual design elements like colors or images. It shows the layout and placement of essential components, such as navigation, text areas, and buttons, using simple shapes and lines." />
    <FaqItem question = "What is s Responsive Web Design?" answer = "Responsive web design is a design approach that allows a website to automatically adapt its layout, content, and appearance to fit the screen size of any device, from desktops and laptops to tablets and smartphones. This is achieved using techniques like flexible grids, responsive images, and CSS media queries, which enable content to resize, reposition, or be hidden to provide an optimal viewing and usability experience for the user across all devices with a single website." />
</motion.div>
);
};

export default FaqList;