import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { toalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>01.02.2023</span>
        <span>{totalProducts}</span>
        <span>${toalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
