import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  /* background-color: black; */
  background-color: #f6f7fc;
`;

export const Content = styled.div`
  border-radius: 8px;
  width: 500px;
`;

export const Title = styled.h1`
  padding-top: 200px;
`;

export const SearchSection = styled.section`
  background-color: white;
  border-radius: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  margin-bottom: -20px;
  padding-bottom: 20px;
`;

export const NewsSection = styled.section`
  height: 100%;
  min-height: 300px;
  /* background-color: black; */
  background-color: #f2f1f6;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
