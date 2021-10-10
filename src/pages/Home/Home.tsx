import {
  Container,
  Title,
  SearchSection,
  NewsSection,
  Content,
} from "./Home.styles";

import { SearchInput } from "../../components/SearchInput";

export const Home = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Title>What pokemon are you looking for?</Title>
          <SearchInput />
        </SearchSection>
        <NewsSection>Pokemon news</NewsSection>
      </Content>
    </Container>
  );
};
