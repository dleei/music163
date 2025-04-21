import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { BackTop } from "@arco-design/web-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import LayoutWrapper from "./style";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);

  const test = () => {
    // console.log("test")
    setShowModal(true);
  }
  
  return (
    <LayoutWrapper>
      <div className="layout-container min-h-screen">
        <header className="header">
          <Header onLoginClick={test}></Header>
        </header>
        <main className="flex-1">
          <Suspense fallback="">
            <Outlet />
          </Suspense>

          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </main>
        <Footer></Footer>
      </div>
      <BackTop visibleHeight={500}></BackTop>
    </LayoutWrapper>
  );
};

export default Layout;
