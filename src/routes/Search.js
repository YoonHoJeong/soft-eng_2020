import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";
import qs from "qs";
import { dbService } from "fbase";

import SearchBar from "components/SearchBar";
import ProductPreview from "components/ProductPreview";
import ReviewPreview from "components/ReviewPreview";
import Product from "components/Product";
import Loader from "components/Loader";

const Search = () => {
  const location = useLocation();
  const [category, setCategory] = useState("all");
  const [text, setText] = useState("");

  const [reviews, setReviews] = useState([]);

  const [products, setProducts] = useState([]);

  const [bsFlag, setBsFlag] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [categoryList, setCategoryList] = useState([]);

  const onChangeCategory = ({ target: { checked, name } }) => {
    if (checked) {
      setCategoryList(categoryList.concat(name));
    } else {
      setCategoryList(categoryList.filter((category) => category !== name));
    }
    console.log(categoryList);
  };

  const handleBSToggle = (flag) => {
    setBsFlag(flag);
  };

  const onPreviewClick = (id) => {
    handleBSToggle(true);
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
    });
    dbService.collection("review").onSnapshot((snapshot) => {
      const reviewList = snapshot.docs.map((doc, index) => ({
        id: index,
        ...doc.data(),
      }));
      setReviews(reviewList);
      setIsLoading(false);
    });
  }, [location]);

  return (
    <div className="search">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="search-bar-container">
            <SearchBar className="search-bar"/>
          </div>
          
          <div className="products-container">
            <h1 className="container-title">
              검색 결과
            </h1>
            <span className="container-subtitle">총 {products.length}건의 {text} 결과</span>
            <div className="products search-result">
              {products.map((product) => (
                <ProductPreview
                  key={product.id}
                  product={product}
                  onPreviewClick={onPreviewClick}
                />
              ))}
            </div>
          </div>
          <div className="products-container">
            <h1 className="container-title">#이런 술은 어때요?</h1>
            <div className="products">
              {products.map((product) => (
                <ProductPreview
                  key={product.id}
                  product={product}
                  onPreviewClick={onPreviewClick}
                />
              ))}
            </div>
          </div>

          {bsFlag && (
            <div className="backscreen">
              <Product
                key={clickedId}
                product={products[clickedId]}
                onBGToggle={handleBSToggle}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
