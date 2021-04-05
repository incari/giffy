import React, { useState } from "react";

function SearchForm({onSubmit}) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //ir a otra ruta
    onSubmit({keyword})
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        name=""
        id=""
        onChange={handleChange}
      />
    </form>
  );
}


export default React.memo(SearchForm)