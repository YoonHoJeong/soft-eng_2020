import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";
import qs from "qs";
import { dbService } from "fbase";

import SearchBar from "components/SearchBar";
import ProductPreview from "components/ProductPreview";
import Product from "components/Product";
import Loader from "components/Loader";

const Search = () => {
  const location = useLocation();
  const [category, setCategory] = useState("all");
  const [text, setText] = useState("");

  const [products, setProducts] = useState([]);

  const [bsFlag, setBsFlag] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const handleBSToggle = () => {
    setBsFlag(!bsFlag);
  };

  const onPreviewClick = (id) => {
    handleBSToggle();
    setClickedId(id);
    // setClickedId(e.target);
  };

  useEffect(() => {
    const { c, t } = qs.parse(location.search, { ignoreQueryPrefix: true });
    setCategory(c);
    setText(t);

    dbService.collection("product").onSnapshot((snapshot) => {
      const productList = snapshot.docs.map((doc, index) => ({
        id: index,
        ...doc.data(),
      }));
      setProducts(productList);
      setIsLoading(false);
    });
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="search">
          <header className="search-header">검색 결과</header>
          <main className="search-main">
            <div className="search-result">
              {products.map((product) => (
                <ProductPreview
                  key={product.id}
                  product={product}
                  onPreviewClick={onPreviewClick}
                />
              ))}
            </div>
          </main>
          {bsFlag && (
            <>
              <div className="backscreen">
                <Product
                  key={clickedId}
                  product={products[clickedId]}
                  onBGToggle={handleBSToggle}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
