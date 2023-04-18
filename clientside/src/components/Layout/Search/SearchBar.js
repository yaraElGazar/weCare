import { Search } from "react-bootstrap-icons";
import classes from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className="container gap-5 d-flex justify-content-between align-items-center">
      <form className="flex-grow-1 d-flex py-3 me-0 justify-content-center">
        <input
          className={classes.search}
          // class="form-control me-2 search shadow-none"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className={classes.searchBtn} type="submit">
          <Search></Search>
        </button>
      </form>
      <a href="#login" className="mybtn mybtnLightSolid">
        Login/Register
      </a>
    </div>
  );
}
export default SearchBar;
