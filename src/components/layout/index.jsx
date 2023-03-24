import { LayoutComponent } from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutComponent>{children}</LayoutComponent>
    </>
  );
};

export default Layout;
