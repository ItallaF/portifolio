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
  font-size: 2rem;
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
  @media screen and (max-width: 576px){
		grid-template-columns: 2fr;
    width: 90%;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
    grid-template-columns: 2fr;
		width: 90%;
	}
`;

export const Text = styled.text`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: normal;
  text-align: justify;
  @media screen and (max-width: 576px){
		font-size: 1rem;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
    font-size: 1rem;
	}
  @media screen and (min-width: 769px) and (max-width: 1024px){
		font-size: 1rem;
	}
`;

export const ImgDiv = styled.div`
  align-items: center;
  display: flex;
  margin-left: 20%;
  width: 55%;
  @media screen and (min-width: 577px) and (max-width: 768px){
		width: 50%;
	}
`;