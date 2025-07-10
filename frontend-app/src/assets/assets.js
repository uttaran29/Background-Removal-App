import logo from './logo.png';
import video_banner from './home-page-banner.mp4';
import people from './people.png';
import people_org from './people-org.png';

export const assets = {
    logo,
    video_banner,
    people,
    people_org
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