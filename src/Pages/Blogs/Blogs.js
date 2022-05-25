import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-accent' >BLOGS</h2>
            <div className='p-20'>
                <h2 className='font-bold text-lg'>14.1 How will you improve the performance of a React Application?</h2>
                <p>=</p>
                <h2 className='font-bold text-lg'>14.2 What are the different ways to manage a state in a React application?</h2>
                <p>=</p>
                <h2 className='font-bold text-lg'>14.3 How does prototypical inheritance work?</h2>
                <p>=</p>
                <h2 className='font-bold text-lg'>14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProduct</h2>
                <p>=</p>
                <h2 className='font-bold text-lg'>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>=</p>
                <h2 className='font-bold text-lg'>14.6 What is a unit test? Why should write unit tests?</h2>
                <p>=</p>
            </div>
        </div>
    );
};

export default Blogs;