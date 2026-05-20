import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
       <HighlightSpan>Luca Conte</HighlightSpan> (a.k.a. “incandenza”, “3ll3c1”) is a nerd by deep and intimate vocation.
      </p>
      <p>
        He forges fluid ecologies with machines, coaxing circuits and code into sensorial mirages.
      </p>
      <p>
        Modular synthesis, creative coding, audiovisual installations, and latent diffusion 
      </p>
      <p>
        — his tools are not instruments, <HighlightSpan>but partners in error and emergence</HighlightSpan>.
      </p>
    </AboutWrapper>
  );
};

export default About;
