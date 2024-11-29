import { useState } from "react";
import SearchInput from "../Components/SearchInput";

function Channels() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h2 className="mb-4">Channels</h2>
      <SearchInput
        placeholder="Search Channels.."
        updateQuery={(receivedQuery) => {
          setQuery(receivedQuery);
        }}
        navigateToQuery={true}
      />

      {query.length === 0 ? <h3>Creator Search</h3> : null}
    </div>
  );
}

export default Channels;
