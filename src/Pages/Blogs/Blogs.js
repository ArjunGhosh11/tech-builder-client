import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-accent' >BLOGS</h2>
            <div className='p-20'>
                <h2 className='font-bold text-lg'>14.1 How will you improve the performance of a React Application?</h2>
                <p>=</p>
                <h2 className='font-bold text-lg'>14.2 What are the different ways to manage a state in a React application?</h2>
                <p>=There are a few ways how we can manage states in our react applications. For example, hooks, context api and apollo link state.  With hooks we can manage the states locally in our files and directories. This is maybe by far the simplest way to manage state in a react app. Although when it comes to larger applications hooks may not be enough. There we can use Context Api or solutions like apollo links.</p>
                <h2 className='font-bold text-lg'>14.3 How does prototypical inheritance work?</h2>
                <p>= Prototypical inheritance comes in handy when we want to create a object which properties and methods are almost similar to a class we have already created. For example we have a class called user and we want some object too for admins and moderators whose properties and methods will be slightly different from user class.  So when we use prototypical inheritance the child automatically gets the property of the parent class and can expand and modify the properties and methods according to it’s needs.</p>
                <h2 className='font-bold text-lg'>14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProduct</h2>
                <p>= React uses a unidirectional data flow method, meaning everything should be in a loop. To ensure this react provide us a function setState and takes a object and compare previous and current state to make the change happen in the UI. If we were to mutate the state directly the change would not have happened because react would have had only one state and thus react wouldn’t be able to compare both states and update the UI.</p>
                <h2 className='font-bold text-lg'>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>=I will implement a search using the name property of all the product. So If I search with a sentence with 3 words, first of all I will run a loop to find the products if any product match the exact search, then I will run another 3 loops for 3 different words and show those products too</p>
                <h2 className='font-bold text-lg'>14.6 What is a unit test? Why should write unit tests?</h2>
                <p>=The smallest part of our application which can be tested in a systemic manner is called a unit. And when each unit of a production level application is tested per unit according to the production need that is called a unit test.  Unit test ensures the quality of a production build. That’s why unit testing is very important.</p>
            </div>
        </div>
    );
};

export default Blogs;