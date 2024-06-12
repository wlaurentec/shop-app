const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-light">01.02.2023</span>
          <span className="font-light">{totalProducts} articles</span>
        </div>
        <span className="font-medium text-2xl">${totalPrice}</span>
      </div>
    </div>
  );
};

export default OrdersCard;
