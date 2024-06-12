import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css";
const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
        <XMarkIcon className="size-6 text-blue-500" />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
