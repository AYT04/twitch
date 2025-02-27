import { Fragment, useState } from "react";
import useCategoryId from "../hooks/useCategoryId";

function Home() {
  const [query] = useState("");
  useCategoryId(query);

  return (
    <Fragment>
      <h2 className="mb-4">AYTWiki</h2>
      <p>
        <b>Welcome to AYTWiki!</b>
        <br /><br />
        This is a Creator Wiki that's designed to help organize the public
        information related to content creators on the internet, from
        various of services. Currently, we only support Twitch, but are
        working on more services soon.
        <br /><br />
        <img src="\public\Screenshot_27-2-2025_6142_localhost.jpeg" width={450} alt="" />
        <br />
        <img src="\public\Screenshot_27-2-2025_64623_localhost.jpeg" width={450} alt="" />
      </p>
    </Fragment>
  );
}

export default Home;