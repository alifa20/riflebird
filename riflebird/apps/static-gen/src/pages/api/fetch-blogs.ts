// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

const fetchBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("called");

  const result = await fetch(
    "https://riflebirdagency.com.au/wp-json/wp/v2/posts"
  ).then((res) => res.json());
  res.statusCode = 200;
  // res.json({ name: "John Doe" });
  res.json(result);
};

export default fetchBlogs;
