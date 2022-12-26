import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function App() {
  // const [content, setContent] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
     axios.get("http://localhost:3000/md")
      .then((res) => setHtml(res.data))
  }, []);

  return (

    <article class="markdown-body">
      {parse(`${html}`)}
    </article>
  );
}