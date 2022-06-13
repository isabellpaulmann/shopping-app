import StyledHeader from "./styled/StyledHeader";
import StyledList from "./styled/StyledList";
import StyledButton from "./styled/StyledButton";
import StyledSearchBar from "./styled/StyledSearchBar";
import { useEffect, useState } from "react";

function App() {
  const apiUrl = "https://fetch-me.vercel.app/api/shopping/items";
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  useEffect(() => {
    function loadData() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then(({ data }) => {
          setProducts(data);
        });
    }

    loadData();
  }, [apiUrl]);

  function onSubmit(event) {
    event.preventDefault();
    setProductSearch(event.target.value);
  }
  return (
    <>
      <StyledButton>DE</StyledButton>
      <StyledButton>EN</StyledButton>
      <StyledHeader>Shopping List</StyledHeader>
      <StyledSearchBar>
        <label hmtlFor="header-search">
          <span>Was möchtest du kaufen?</span>
        </label>
        <input
          type="text"
          id="header-search"
          name="search"
          onChange={onSubmit}
        />
      </StyledSearchBar>
      <StyledList>
        {products
          .filter((product) => product.name.de.includes(productSearch))
          .map((product) => (
            <li key={product._id}>{product.name.de}</li>
          ))}
      </StyledList>
    </>
  );
}

export default App;
