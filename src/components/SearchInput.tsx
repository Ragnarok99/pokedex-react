import { FaSearch } from "react-icons/fa";

import { Wrapper, Input } from "./SearchInput.styles";
export const SearchInput = (props) => {
  return (
    <Wrapper>
      <FaSearch />
      <Input placeholder="Search..." {...props} />
    </Wrapper>
  );
};
