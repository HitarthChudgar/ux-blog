const Home = () => {
    const handleClick = (e) => {
        console.log('This button was clicked', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ', name, e.target);
    }

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Show More</button>
            <button onClick={(e) => {
                handleClickAgain('Hitarth', e);
            }}>Show Name</button>
        </div>
     );
}
 
export default Home;