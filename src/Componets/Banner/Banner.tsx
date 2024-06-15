import { Linkedin, GitHub } from '../../Icons';
import { BannerDiv, BannerSection, Button, ButtonDiv, ButtonSvg, TextBanner, TitleBanner } from './BannerStyle';

export function Banner() {
  return (
    <BannerSection>
      <BannerDiv>
      <TitleBanner>Italla Felyne</TitleBanner>
      <TextBanner>Desenvolvedora Front-End e Mobile</TextBanner>
      <ButtonDiv>
        <Button>
          Linkedin
          <ButtonSvg>
            <Linkedin />
          </ButtonSvg>
        </Button>
        <Button>
          GitHub
          <ButtonSvg>
            <GitHub />
          </ButtonSvg>
        </Button>
      </ButtonDiv>
      </BannerDiv>
    </BannerSection>
  );
};