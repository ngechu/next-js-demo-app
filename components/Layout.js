import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container w-3/4 mx-auto bg-gray-100 h-auto box-border pb-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
