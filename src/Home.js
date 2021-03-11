import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        //id is used to reference
        {title: 'UX Website', body: 'lorem ipsum ...', author: 'Hitarth', id: 1},
        {title: 'Dev Website', body: 'lorem ipsum ...', author: 'Eric', id: 2},
        {title: 'Research Website', body: 'lorem ipsum ...', author: 'Abhishek', id: 3},
    ]);
    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs" /> 
        </div>
     );
}
 
export default Home;