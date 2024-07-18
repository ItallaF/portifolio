import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid;
  border-color: #b01289;
  border-radius: 5px;
  border-width: medium;
  box-shadow:  0.1em 0.1em 1em #ff00c0a1;
  display: grid;
  height: 60vh;
  justify-content: center;
  margin-left: 14%;
  padding: 5%;
  width: 18vw !important;
  @media screen and (max-width: 576px){
		width: 50vw !important;
	}
  @media screen and (min-width: 577px) and (max-width: 768px) {
		width: 25vw !important;
    height: 65vh;
	}
  @media screen and (min-width: 769px) and (max-width: 1024px) {
		width: 17vw !important;
    height: 65vh;
	}
`;

export const SubTitle = styled.h3`
  color: #b01289;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0%;
`;

export const InfoRow = styled.p`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  text-align: start;
  margin-top: 2%;
`;