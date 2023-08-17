import React, { useState } from "react";
import { Button } from "ui";

const BlogFetcher = () => {
  const [result, setResult] = useState([]);

  const onClick = () => {
    fetch("/api/fetch-blogs")
      .then((res) => res.json())
      .then(setResult);
  };

  return (
    <div>
      <Button onClick={onClick} />
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default BlogFetcher;
