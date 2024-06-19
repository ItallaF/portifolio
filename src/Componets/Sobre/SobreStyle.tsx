import styled from 'styled-components';

export const SobreSection = styled.section`
  display: grid;
  background-color: #b37fb3;
  width: 100%;
`;

export const Title = styled.h2`
  align-items: center;
  display: flex;
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 2em;
  font-weight: bold;
  justify-content: center;
  margin-top: 4%;
  margin-bottom: 0%;
`;

export const DivText = styled.div`
  column-gap: 4%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  justify-items: start;
  margin: 1% 0% 2% 4%;
`;

export const Text = styled.text`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1em;
  font-weight: normal;
  text-align: justify;
`;

export const ImgDiv = styled.div`
  align-items: center;
  display: flex;
  margin-left: 20%;
  width: 20vw;
`;