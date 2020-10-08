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
      console.log(reviewList);
    });
  }, [location]);

  return (
    <div className="search">
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
            <hr />
            <div className="search-reviews">
              {reviews.map((review) => (
                <ReviewPreview key={review.id} review={review} />
              ))}
            </div>
          </main>
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
