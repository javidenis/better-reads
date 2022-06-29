import "./search.css";

const Search = () => {
  return (
    <div className="search_component">
      <form className="search_book">
        <input
          type="text"
          placeholder="Discovery a new story...."
          // value={"#"}
        />
        <button className="search_boo_submit">
          <i className="fa fa-book"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
