import styled from 'styled-components';

export const ExperienciaSection = styled.section`
  display: flex;
  background-color: #a784a7;
  flex-direction: column;
  justify-content: center;
`;

export const DivTitle = styled.div`
  align-items: center;
  display: grid;
  justify-items: center;
  margin-bottom: 0%;
  width: 100%;
`;

export const DivText = styled.div`
  border-block-end: 1px solid;
  border-color: #b01289;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0% 4% 2%;
`;
export const SubTitle = styled.h3`
  align-items: center;
  color: #b01289;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: justify;
  margin-left: 4%;
  margin-top: 2%;
  margin-bottom: 1.5%;
  @media screen and (max-width: 576px){
		display: flex;
    font-size: 1rem;
    text-align: start;
	}
`;

export const Text = styled.text`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: normal;
  margin-left: 4%;
  text-align: justify;
  width: 65%;
  @media screen and (max-width: 576px){
		display: flex;
    font-size: 1rem;
    justify-content: center;
    width: 90%;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		display: flex;
    font-size: 1rem;
    justify-content: center;
    width: 90%;
	}
  @media screen and (min-width: 769px) and (max-width: 1024px){
		font-size: 1rem;
	}
`;

export const TextDestac = styled.p`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: justify;
  margin-left: 4%;
  margin-top: 1.5%;
`;
