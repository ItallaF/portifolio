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
`;

export const BannerDiv = styled.div`
  align-items: center;
  display: grid;
  justify-items: center;
  margin-top: 5.5%;
`;

export const TitleBanner = styled.h1`
  color: #f5fffa;
  font-family: 'Great Vibes';
  font-size: 5em;
  font-synthesis: none;
  height: 6vh;
  margin-top: 4%;
  text-align: center;
`;

export const TextBanner = styled.p`
  color: #f5fffa;
  font-family: Work Sans, sans-serif;
  font-size: 1.2em;
  margin-top: 0%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #bd55a3;
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

export const ButtonSvg = styled.div`
  width: 2vw;
`;
