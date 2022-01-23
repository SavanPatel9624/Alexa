import React from "react";
import { withRouter } from "react-router";
import HostMenubar from "../Host/components/Menubar";
import HostFooter from "../Host/components/Footer";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";

const WrapperLayout = (props) => {

  return props.isHost ? (
    <>
      <HostMenubar />
      {props.children}
      <HostFooter />
    </>
  ) : (
    <>
      <Menubar />
      {props.children}
      <Footer />
    </>
  );
};

export default withRouter(WrapperLayout);
