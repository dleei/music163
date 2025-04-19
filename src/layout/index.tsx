import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LayoutWrapper from "./style";

const Layout = () => {
  return (
    <LayoutWrapper>
      <div className="layout-container min-h-screen">
        <header className="header">
          <Header></Header>
        </header>
        <main className="flex-1">
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </main>
        <Footer></Footer>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
