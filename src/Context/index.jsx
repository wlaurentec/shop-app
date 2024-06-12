import { createContext, useState } from "react";

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
        closeCheckoutSideMenu

      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
