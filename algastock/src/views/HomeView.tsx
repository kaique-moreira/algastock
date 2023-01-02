import React from "react";
import Header from "../components/Header";
import ProductsCRUD from "../components/Products/ProductsCRUD";
import Container from "../shared/Container";

declare interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  return (
    <>
      <Header title="AlgaStock" />
      <Container>
        <ProductsCRUD />
      </Container>
    </>
  );
};

export default HomeView;
