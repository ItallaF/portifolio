import styled from 'styled-components';
import img from '../../assets/img/background.jpg';

export const BannerSection = styled.section`
  align-items: center;
  background-image: url(${img});
  background-position: bottom;
  background-repeat: no-repeat;  
  background-size: cover;
  display: flex;
  flex-direction: column;  
  text-align: center;
  margin-top: 0%;
  opacity: 90%;
  height: 65vh;
  @media screen and (max-width: 576px){
		height: 49vh;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		height: 52vh;
	}
`;

export const BannerDiv = styled.div`
  align-items: center;
  display: grid;
  justify-items: center;
  margin-top: 5.5%;
  @media screen and (max-width: 576px){
		margin-top: 13.5%;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		margin-top: 6.5%;
	}
`;

export const TitleBanner = styled.h1`
  color: #f5fffa;
  font-family: 'Great Vibes';
  font-size: 4rem;
  font-synthesis: none;
  font-weight: bold;
  height: 6vh;
  margin-top: 4%;
  text-align: center;
  @media screen and (max-width: 576px){
		font-size: 3rem;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		font-size: 3rem;
	}
`;

export const TextBanner = styled.p`
  color: #f5fffa;
  font-family: Work Sans, sans-serif;
  font-size: 1.2rem;
  margin-top: 0%;
  @media screen and (max-width: 576px){
		font-size: 1rem;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		font-size: 1rem;
	}
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const ButtonLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #bd55a3;
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
  @media screen and (max-width: 576px){
		width: 35vw;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		width: 15vw;
	}
  @media screen and (min-width: 769px) and (max-width: 1024px){
		width: 13vw;
	}
`;

export const ButtonSvg = styled.div`
  width: 2vw;
  @media screen and (max-width: 576px){
		width: 6vw;
	}
  @media screen and (min-width: 577px) and (max-width: 768px){
		width: 3vw;
	}
  @media screen and (min-width: 769px) and (max-width: 1024px){
		width: 2.5vw;
	}
`;
