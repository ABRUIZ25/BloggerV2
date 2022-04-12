
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://6239ddb128bcd99f02763cfe.mockapi.io/blogs?limit=${limit}&page=${page}`
      );

      const json = await data.json();
      setBlogs(json);
      return json;


    };
    console.log(fetchData())


    fetchData();
  }, [limit, page]);


  return (
    <div className="App">
      <header className="App-header">
        Limit: {limit} Page: {page} Blogs Length: {blogs.length}
        <input
          type="number"
          value={limit}
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        />
        <input
          type="number"
          value={page}
          onChange={(e) => {
            setPage(e.target.value);
          }}
        />
        {blogs.map((blog) => {
          return (
            <div>
              <div>
                <h1>Author: {blog.title}</h1>
                {blog.id}
              </div>
              <div>
                {blog.text}
              </div>
            </div>
          );
        })}

      </header>
    </div>
  );
}

export default App;
