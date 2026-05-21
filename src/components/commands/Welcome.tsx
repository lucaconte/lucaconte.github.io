import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        

      ▜                   ▐     
      ▐ ▌ ▌▞▀▖▝▀▖▞▀▖▞▀▖▛▀▖▜▀ ▞▀▖
      ▐ ▌ ▌▌ ▖▞▀▌▌ ▖▌ ▌▌ ▌▐ ▖▛▀ 
       ▘▝▀▘▝▀ ▝▀▘▝▀ ▝▀ ▘ ▘ ▀ ▝▀▘

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    
      ▜                   ▐     
      ▐ ▌ ▌▞▀▖▝▀▖▞▀▖▞▀▖▛▀▖▜▀ ▞▀▖
      ▐ ▌ ▌▌ ▖▞▀▌▌ ▖▌ ▌▌ ▌▐ ▖▛▀ 
       ▘▝▀▘▝▀ ▝▀▘▝▀ ▝▀ ▘ ▘ ▀ ▝▀▘
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to Luca Conte's personal portfolio</div>
        <Seperator>----</Seperator>
        <div>
          For the impatients:{" "}
          <Link href="mailto:luca.conte@gmail.com">
            luca.conte@gmail.com
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          Looking for my socials ego extensions or other ways to contact me? Type `<Cmd>socials</Cmd>`.
        </div>
        <br/>
        <div>
         If you're terrified of interacting with a terminal<br/>(so don't expect an anniversary card from me), type `<Cmd>gui</Cmd>`
        </div>
        <br/>
        <div>
          For other infos about me feel free to explore...  how? Type `<Cmd>help</Cmd>`.
        </div>
        <br/>
        <br/>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
