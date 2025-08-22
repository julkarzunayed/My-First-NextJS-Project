import Link from 'next/link';
import React from 'react'


export default function ServiceAbout() {
    const servicesData = [
        {
            id: 1,
            title: "Web Development",
            details: "Crafting modern, responsive, and high-performance websites using the latest technologies. Our team specializes in building custom solutions tailored to your business needs.",
            image: "https://placehold.co/600x400/2196F3/ffffff?text=Web+Dev"
        },
        {
            id: 2,
            title: "Mobile App Development",
            details: "Creating intuitive and feature-rich mobile applications for both iOS and Android platforms. We focus on user experience and seamless functionality.",
            image: "https://placehold.co/600x400/4CAF50/ffffff?text=Mobile+App"
        },
        {
            id: 3,
            title: "UI/UX Design",
            details: "Designing user-centric interfaces that are not only beautiful but also easy to navigate. We ensure your digital product provides an excellent user experience.",
            image: "https://placehold.co/600x400/FFC107/000000?text=UI%2FUX"
        },
        {
            id: 4,
            title: "Digital Marketing",
            details: "Developing comprehensive digital marketing strategies to boost your online presence. Our services include SEO, social media marketing, and content creation.",
            image: "https://placehold.co/600x400/E91E63/ffffff?text=Digital+Marketing"
        },
        {
            id: 5,
            title: "Cloud Solutions",
            details: "Providing secure and scalable cloud infrastructure services. We help you migrate, manage, and optimize your applications in the cloud for maximum efficiency.",
            image: "https://placehold.co/600x400/9C27B0/ffffff?text=Cloud+Solutions"
        },
        {
            id: 6,
            title: "Data Analytics",
            details: "Turning raw data into actionable insights. Our data analytics services help you make informed decisions and drive business growth.",
            image: "https://placehold.co/600x400/00BCD4/000000?text=Data+Analytics"
        }
    ];
    return (
        <div className='grid grid-cols-3 gap-5 max-w-3xl mx-auto mt-10'>
            {
                servicesData?.map(d =>
                    <Link
                        key={d.id}
                        href={`/services/${d.id}`}
                    >
                        <div className="flex items-center ">
                            {/* <div className="">
                            {d.title}
                        </div> */}
                            <img src={d.image} className='max-w-40 mx-auto rounded-xl' alt="" />
                        </div>
                    </Link>
                )
            }
        </div>
    )
}
