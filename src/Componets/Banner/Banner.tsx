import { Linkedin, GitHub } from '../../Icons';
import { BannerDiv, BannerSection, Button, ButtonDiv, ButtonLink, ButtonSvg, TextBanner, TitleBanner } from './BannerStyle';

export function Banner() {
  return (
    <BannerSection id='home'>
      <BannerDiv>
        <TitleBanner>Italla Felyne</TitleBanner>
        <TextBanner>Desenvolvedora Front-End e Mobile</TextBanner>
        <ButtonDiv>
          <ButtonLink href='https://www.linkedin.com/in/italla-felyne/'>
            <Button>
              Linkedin
              <ButtonSvg>
                <Linkedin />
              </ButtonSvg>
            </Button>
          </ButtonLink>
          <ButtonLink href='https://github.com/'>
            <Button>
              GitHub
              <ButtonSvg>
                <GitHub />
              </ButtonSvg>
            </Button>
          </ButtonLink>
        </ButtonDiv>
      </BannerDiv>
    </BannerSection>
  );
};