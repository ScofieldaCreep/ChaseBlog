import ActiveResource from "./ActiveResource";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <ActiveResource></ActiveResource>
            {children}
        </div>
    );
};

export default Layout;
