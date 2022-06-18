import { SideBar } from "../components/header/SideBar";
import { RouterConfig } from "../root/Rooter";

export const MainLayout = (): JSX.Element => {
  return (
    <>
      <SideBar />
      <RouterConfig />
    </>
  );
};
