import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const Index = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Index;
