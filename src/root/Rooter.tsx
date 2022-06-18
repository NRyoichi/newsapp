import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Business } from "../pages/Business";
import { Entertainment } from "../pages/Entertainment";
import { HeadLine } from "../pages/HeadLine";
import { Sports } from "../pages/Sports";
import { Technology } from "../pages/Technology";
import { Page404 } from "../pages/Page404";
import { SideBar } from "../components/header/SideBar";

export const RouterConfig: FC = memo(() => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<HeadLine />} />
        <Route path="Business" element={<Business />} />
        <Route path="Entertainment" element={<Entertainment />} />
        <Route path="Sports" element={<Sports />} />
        <Route path="Technology" element={<Technology />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
