import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="Nav">
            <h1>UX Blog</h1>
            <div className="Links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;