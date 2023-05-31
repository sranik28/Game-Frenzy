import React from 'react';
import useTitle from '../hooks/UseTitle';

const Blog = () => {

    useTitle('Blog')
    return (
        <main>
            <div  data-aos="fade-up" className='container mb-20'>
                <h1 className='text-3xl font-bold text-center my-5 underline'>Question's <span className='text-[#B2A4FF]'>Answer....</span></h1>
                <div className='grid md:grid-cols-2 gap-4 mt-10 mb-20'>
                    <div className='p-3 border-2 border-[#B2A4FF] rounded-md w-full h-[100%] '>
                        <h1 className='text-3xl py-3'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p>
                            A secure key is a temporary authorization credential utilized to gain access to particular resources, whereas a renewal key is a more long-lasting authorization credential employed to acquire new secure keys. Access keys are included in requests made to protected resources, while renewal keys are utilized to request fresh access keys once the previous ones have expired. It is imperative to store both keys securely on the client-side. </p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#B2A4FF]'>
                        <h1 className='text-3xl font-semibold py-3'>Compare SQL and NoSQL databases?</h1>
                        <p>Relational databases, such as SQL databases, adhere to a structured, relational data model characterized by predefined schemas. On the other hand, NoSQL databases provide flexibility by supporting various data models, including key-value, document, columnar, or graph. Unlike SQL databases, NoSQL databases excel in horizontal scalability, allowing for easy distribution of data across multiple nodes.</p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#B2A4FF]'>
                        <h1 className='text-3xl py-3'>What is express js? What is Nest JS ?</h1>
                        <p>
                            Express.js is a minimalistic and flexible web framework for Node.js. It is designed to simplify the process of building web applications and APIs. Express.js provides a lightweight and unopinionated approach, allowing developers to have more control over the structure and components of their applications. It offers a set of functionalities and middleware that help with routing, handling requests and responses, managing sessions, and integrating with databases.</p>
                    </div>
                    <div className='p-3 border-2 border-[#B2A4FF] rounded-md '>
                        <h1 className='text-3xl py-3'>What is MongoDB aggregate and how does it work ?</h1>
                        <p>MongoDB's aggregation framework is a powerful feature that allows you to process and analyze data stored in a MongoDB database. It provides a way to perform complex queries, transformations, and aggregations on the data in a flexible and efficient manner.The aggregation framework in MongoDB provides a flexible and efficient way to perform advanced querying, data transformations, and aggregations, making it a powerful tool for analyzing and manipulating data in a MongoDB database.</p>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Blog;