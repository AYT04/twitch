import { useState } from "react";
import SearchInput from "../Components/SearchInput";

function Channels() {
  const [query, setQuery] = useState("");

  return (
    <div>
      {/* Here can could change this to the name of the streamer,
      I'm too new to this NPM stuff (mainy .TSX) */}
      {/* <h2 className="mb-4">Channels</h2> */}
      <br />
      <SearchInput
        placeholder="Search a Creator"
        updateQuery={(receivedQuery) => {
          setQuery(receivedQuery);
        }}
        navigateToQuery={true}
      />

      {query.length === 0 ? <h3></h3> : null}
    </div>
  );
}

export default Channels;
