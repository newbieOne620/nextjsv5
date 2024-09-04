import Header from "./header";
import Sidebar from "./sidebar";
const Mainlayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Header />
      <div className="flex ">
        <Sidebar />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Mainlayout;
