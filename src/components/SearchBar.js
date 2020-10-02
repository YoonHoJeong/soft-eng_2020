import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState({ category: "all", text: "" });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // handleSubmit = (event) => {
  //   // event가 발생했을 때 기본적으로 event를 인자로 가져온다.
  //   // submit event 발생 시 default로 page를 reload
  //   // 이를 없애주기 위해 event.preventDefault()를 사용한다.
  //   event.preventDefault();
  //   const { searchTerm } = this.state;
  //   if (searchTerm !== "") {
  //     this.searchByTerm();
  //   }
  // };

  //   <Form onSubmit={handleSubmit}>
  //   <Input
  //     placeholder="Search Movies or TV Shows..."
  //     value={searchTerm}
  //     onChange={updateTerm}
  //   />
  // </Form>
  //   searchByTerm = async () => {
  //     const { searchTerm } = this.state;
  //     this.setState({ loading: true });
  //     try {
  //       const {
  //         data: { results: movieResults },
  //       } = await moviesApi.search(searchTerm);
  //       const {
  //         data: { results: tvResults },
  //       } = await tvApi.search(searchTerm);
  //       this.setState({
  //         movieResults,
  //         tvResults,
  //       });
  //     } catch {
  //       this.setState({ error: "Can't find results." });
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   };

  return (
    <div className="search-bar">
      <div className="search-bar__cate">
        <select name="category" id="category" onChange={onChange}>
          <option value="all">All</option>
          <option value="beer">Beer</option>
          <option value="soju">Soju</option>
          <option value="wine">Wine</option>
        </select>
      </div>
      <div className="search-bar__input">
        <input name="text" type="text" onChange={onChange} autoComplete="off" />
        <Link to={`/search?c=${input.category}&t=${input.text}`}>
          <SearchIcon className="search-icon" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
