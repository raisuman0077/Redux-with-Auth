import { Link } from "react-router-dom";

const Public = () => {
    <section className="Public">
        <header>
            <h1>Welcome to Store</h1>
        </header>
        <main>
            <p>Loaction in Beautiful Town, It provides the servies you need.</p>
            <p>&nbsp;</p>
            <address>
                Store Xyz <br/>
                007 prov.1 <br/>
                xyz city, 7262 <br/>
            </address>
        </main>
        <footer>
            <Link to={'/login'}>Employee Login</Link>
        </footer>
    </section>
}