import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

const FirstPage = () => {
  return (
    <div className="first-page">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default FirstPage;