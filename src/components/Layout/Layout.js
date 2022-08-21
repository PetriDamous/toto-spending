import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

const Layout = ({ children }) => {
  console.log(children);
  return <Container>{children}</Container>;
};

export default Layout;
