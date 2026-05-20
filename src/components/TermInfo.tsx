import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>lucaconte.xyz</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
