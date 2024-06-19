import styled from 'styled-components';

export const ProjetoSection = styled.section`
  display: grid;
  background-color: #b37fb3;
  width: 100%;
`;

export const ItemDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export const ProjetoDiv = styled.div`
  display: grid;
  gap: 4%;
  grid-template-columns: 1fr 1fr; 
  margin-bottom: 4%; 
  margin-left: 4%;
  width: 90vw;
`;

export const SubTitle = styled.h3`
  color: #b01289;
  font-family: Open Sans, sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  text-align: justify;
`;

export const DivImg = styled.div`
  align-items: center;
  display: flex;  
  justify-content: center;
`;

export const Img = styled.img`
  border-radius: 5%;
  height: 35vh;
  width: 60vh;
`;

export const Text = styled.text`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1em;
  font-weight: normal;
  text-align: justify;
`;

export const TextDestac = styled.text`
  color: #9b2f80;
  font-family: Open Sans, sans-serif;
  font-size: 1em;
  font-weight: 625;
  text-align: justify;
  margin-top: 1.5%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1.5em;
  margin-top: 2%;
`;

export const ButtonLink = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #9b2f8075;
  border-color: #bd55a3;
  border-radius: 0.5em;
  border: 1px solid transparent;
  cursor: pointer;
  color: #f5fffa;
  display: flex;
  font-size: 1rem;
  font-weight;
  gap: 0.5em;
  height: 8vh;
  justify-content: center;
  text-align: center;
  width: 10vw;
`;