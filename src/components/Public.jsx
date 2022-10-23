import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome Store!</h1>
            </header>
            <main>
                <p>Located in Beautiful City, Store provides a service ready to meet your needs.</p>
                <p>&nbsp;</p>
                <address>
                     Store<br />
                    st.555<br />
                  
                </address>
            </main>
            <footer>
                <Link to="/login">Staff Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public