import styled from 'styled-components';

export const CertificacoesSection = styled.section`
  display: flex;
  background-color: #a784a7;
  flex-direction: column;
  justify-content: center;
`;

export const CertificacoesDiv = styled.div`
  display: grid;
  justify-content: center;
  gap: 2%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2% 0% 2% 4%;
  width: 90%;
`;

export const ItemDiv = styled.div`
  border: 1px solid;
  border-color: #b01289;
  display: grid;
  justify-content: center;
  padding: 5%;
`;

export const SubTitle = styled.h3`
  color: #b01289;
  font-family: Open Sans, sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
`;

export const Text = styled.p`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1em;
  font-weight: normal;
  text-align: start;
  margin: 2%
`;