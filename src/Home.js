import { useState } from 'react';

const Home = () => {
    const [blog, setBogs] = useState([
        //id is used to reference
        {title: 'UX Website', body: 'lorem ipsum ...', author: 'Hitarth', id: 1},
        {title: 'Dev Website', body: 'lorem ipsum ...', author: 'Eric', id: 2},
        {title: 'Research Website', body: 'lorem ipsum ...', author: 'Abhishek', id: 3},
    ]);
    return ( 
        <div className="Home">
            {blog.map((blog) => (
                <div className="Blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;