import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart . Increment quantity
  const [count, setCount] = useState(0);

  // Product detail . Open and close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

   // Checkout Side Menu . Open and close
   const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
   const openCheckoutSideMenu  = () => setIsCheckoutSideMenuOpen(true);
   const closeCheckoutSideMenu   = () => setIsCheckoutSideMenuOpen(false);

  // Product detail . Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping cart . Add product
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart . Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);




  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle

      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
