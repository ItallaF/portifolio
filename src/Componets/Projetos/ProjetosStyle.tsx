import styled from 'styled-components';

export const ProjetoSection = styled.section`
  display: grid;
  background-color: #b37fb3;
  width: 100%;
`;

export const ProjetoDiv = styled.div`
  align-items: center;
  display: flex;
  height: 125vh;
  justify-content: center;
  margin-left: 4%;
  margin-top: 1%;
  width: 90vw;
  @media screen and (max-width: 320px){
		height: 107vh;
	}
  @media screen and (min-width: 321px) and (max-width: 375px){
		height: 102vh;
	}
	@media screen and (min-width: 376px) and (max-width: 576px){
		height: 94vh;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		height: 115vh;
	}
	@media screen and (min-width: 769px) and (max-width: 1024px){
		height: 137vh;
	}
`;

export const Carouseltem = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
  font-size: 4rem;
  margin-left: 5.5%;
  height: 100%;
  width: 80vw;  
`;

export const SubTitle = styled.h3`
  color: #b01289;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5%;
  margin-left: 4%;
  margin-top: 1%;
  text-align: justify;
  @media screen and (max-width: 576px){
		text-align: start;
	}
`;

export const DivImg = styled.div`
  align-items: center;
  display: flex;  
  justify-content: center;
`;

export const Img = styled.img`
  border-radius: 5%;
  height: 80vh;
  margin-left: 4%;
  @media screen and (max-width: 576px){
		height: 30vh;
	}
	@media screen and (min-width: 577px) and (max-width: 768px){
		height: 55vh;
	}
`;

export const Text = styled.text`
  color: #f5fffa;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: normal;
  margin-left: 4%;
  margin-right: 4%;
  text-align: justify;
  @media screen and (max-width: 576px){
		font-size: 1rem;
    text-align: start;
	}
	@media screen and (min-width: 577px) and (max-width: 768px){
		
	}
	@media screen and (min-width: 769px) and (max-width: 1024px){
		
	}
`;

export const TextDestac = styled.text`
  color: #9b2f80;
  font-family: Open Sans, sans-serif;
  font-size: 1.2rem;
  font-weight: 625;
  margin-left: 4%;
  margin-top: 1.5%;
  margin-right: 4%;
  text-align: justify;
  @media screen and (max-width: 576px){
		font-size: 1rem;
    text-align: start;
	}  
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2%;
  justify-content: center;
`;

export const ButtonLink = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #b0128954;
  border: 2px solid #bd55a3;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #f5fffa;
  display: flex;
  font-size: 1.2rem;
  font-weight;
  gap: 0.5em;
  height: 8vh;
  justify-content: center;
  text-align: center;
  width: 10vw;
  @media screen and (max-width: 576px){
    font-size: 1rem;
		width: 20vw;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
    font-size: 1rem;
		width: 12vw;
	}
`;
