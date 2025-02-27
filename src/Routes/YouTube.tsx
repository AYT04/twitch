import { Fragment, useState } from "react";
import useCategoryId from "../hooks/useCategoryId";

function YouTube() {
  const [query] = useState("");
  useCategoryId(query);

  return (
    <Fragment>
        <br />
      <h2 className="mb-4">AYTClips</h2>
      <p>
        This page is a work in progress. We plan on converting HTML
        code to TSX (Type Script), if anyone can help us out, We'd
        love that!
      </p>
      <br />
      <center>
      <iframe src="https://ayt04.github.io/AYTClips/" width={450} height={450} frameBorder="0"></iframe>
      </center>
    </Fragment>
  );
}

export default YouTube;