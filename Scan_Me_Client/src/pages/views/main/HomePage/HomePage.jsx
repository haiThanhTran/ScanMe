import BannerSlider from "./BannerSlider";
import ProductLayout from "../../../../components/ProductList/ProductList";
import Footer from "../../../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <BannerSlider />
      <ProductLayout />
      <Footer />
    </div>
  );
};
export default HomePage;