import ChooseUs from "./ChooseUs";
import LandingImages from "./LandingImages";
import Products from "./Products";
import Services from "./Services";
import WorkedWith from "./WorkedWith";

function All() {
  return (
    <div>
      {/* <Header /> */}
      <LandingImages />
      <Services />
      <ChooseUs />
      <Products />
      <WorkedWith />
    </div>
  );
}

export default All;
