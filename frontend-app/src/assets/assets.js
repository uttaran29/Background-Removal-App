import logo from './logo.png';
import video_banner from './home-page-banner.mp4';
import people from './people.png';
import people_org from './people-org.png';
import dollar from './dollar.png'

export const assets = {
    logo,
    video_banner,
    people,
    people_org,
    dollar
};

export const steps = [
    {
        step: "Step 1",
        title: "Select an image",
        description:
            "First, choose the image you want to remove the background from by clicking on 'Start from a photo'.\n" +
            "Your image format can be PNG or JPG.\n" +
            "We support high-resolution images."
    },
    {
        step: "Step 2",
        title: "Let magic remove the background",
        description:
            "Our toll automattically removes the background from your image. Next, you can choose a background color. Our most popular options are white and transparent background, but you can pick any color you like."
    },
    {
        step: "Step 3",
        title: "Download your image",
        description:
            "After selecting a new background or keeping it transparent, download your edited photo.\n" +
            "You can also save your image in the PhotoRoom App by creating an account."
    }
];

export const categories = ["People", "Product", "Animals", "Cars", "Graphics"];

export const plans = [
    {
        id: "Basic",
        name: "Basic Package",
        price: 99,
        credits: "100 credits",
        description: "Best for personal use.",
        popular: false
    },
    {
        id: "Premium",
        name: "Premium Package",
        price: 149,
        credits: "250 credits",
        description: "Best for business use.",
        popular: true
    },
    {
        id: "Ultimate",
        name: "Ultimate Package",
        price: 449,
        credits: "1000 credits",
        description: "Best for enterprise use.",
        popular: false
    }
];

export const testimonials = [
    {
        id: 1,
        quote: "This background remover saved me hours of editing. It is fast, accurate, and incredibly easy to use.",
        author: "Aarav Mehta",
        handle: "@aarav.designs"
    },
    {
        id: 2,
        quote: "A game-changer for my e-commerce store. Clean product images without the hassle!",
        author: "Sneha Kapoor",
        handle: "@snehascloset"
    },
    {
        id: 3,
        quote: "Perfect for content creators like me. Now I can quickly prepare visuals for all my platforms.",
        author: "Rohan Verma",
        handle: "@rohan.creates"
    }
];

export const FOOTER_CONSTANT = [
    {
        url: "https://www.facebook.com",
        logo: "https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
    },
    {
        url: "https://www.linkedin.com/in/uttaran-sarkar/",
        logo: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
    },
    {
        url: "https://www.instagram.com/__uttaran__?igsh=MTZzMGR2emwxaDJjdg==",
        logo: "https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000"
    },
    {
        url: "https://x.com/Uttaransarkar29?t=S6d35ZevaPPI2EVoAp7vhw&s=08 ",
        logo: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
    }
];