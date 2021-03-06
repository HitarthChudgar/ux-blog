import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Hitarth');
    const [age, setAge] = useState(20);

    const handleClick = () =>{
        setName('Hitu');
        setAge(21);
    }
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <p>Hi I am { name } and am { age } years old!</p>
            <button onClick={handleClick}>Show Name and Age</button>
        </div>
     );
}
 
export default Home;