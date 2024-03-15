import React from "react";
import Slider from "../../components/slider/Slider";
import Update from "../../components/updates/Update";
import Members from "../../components/members/Members";
import CTA from "../../components/cta/Cta";
import Categories from "../../components/categories/Categories";

const HomeUi = () => {
  return (
    <>
      <Slider />
      <Update />
      <Members />

      <CTA />
      <Categories />
    </>
  );
};

export default HomeUi;
