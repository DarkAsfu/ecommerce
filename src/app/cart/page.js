import CartTable from "@/components/cart/CartTable";
import RelatedProducts from "@/components/products/RelatedProducts";
import SectionBanner from "@/components/reusable/SectionBanner";

const CartPage = () => {
  return (
    <div>
      <SectionBanner title="Shopping Cart" />
      <CartTable/>
      <RelatedProducts className="py-[120px]" />
    </div>
  );
};

export default CartPage;
