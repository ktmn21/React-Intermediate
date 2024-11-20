import React from 'react';
import PropsPractice from "./PropsPractice";
import image1 from "../images/images.jpg"
import image2 from "../images/marvel-movie-releases-2024-slate.webp"
import image3 from "../images/download.jpg"

const BlogPostPage = () => {
    const blogs = [
        {
            title: "Buildings",
            description: 'Photo of the building in the daytime',
            imageUrl: image1,
        },
        {
            title: 'Marvel MCU',
            description: 'Marvel stats record breaking 2024 slate',
            imageUrl: image2,
        },
        {
            title: 'Game of Thrones',
            description: 'Game of Thrones: Net Start sitting on the throne',
            imageUrl: image3,
        },
    ];

    return <PropsPractice blogs={blogs} />;

};

export default BlogPostPage;