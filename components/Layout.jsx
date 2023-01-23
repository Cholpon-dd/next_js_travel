import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="h-screen grid grid-rows-layout ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
