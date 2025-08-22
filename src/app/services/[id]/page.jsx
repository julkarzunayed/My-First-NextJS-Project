import React from 'react'


export default async function ServiceDetails({ params }) {
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
    const id = await params?.id;
    const data = servicesData.find(d => d.id == id)
    // console.log(data)
    return (
        <div className='mt-20 text-center'>
            <h2 className="text-3xl font-bold text-lime-500">
                Service Details Page
            </h2>
            <div className="max-w-2xl mt-10 mx-auto text-left flex gap-5">
                <div className="">
                    <p className="">
                        ID:  {id}
                    </p>

                    <h2 className="text-3xl font-bold">{data?.title}</h2>
                    <p className="">
                        {data?.details}
                    </p>
                </div>
                <div className="">
                    <img src={data?.image} className='rounded-2xl' alt="" />
                </div>
            </div>
        </div>
    )
}
