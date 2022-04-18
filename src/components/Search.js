import { useContext, useRef } from "react";
import { MyContext } from "../context";
const Search = () => {
  const context = useContext(MyContext);
  const searchInput = useRef();
  return (
    <div className="search">
      <input
        ref={searchInput}
        onChange={() => context.search(searchInput.current.value)}
        type="text"
        id="search"
        placeholder="search"
      />
      {
        <div className="x_search" onClick={context.clearSearch}>
          &#10006;
        </div>
      }
    </div>
  );
};

export default Search;
