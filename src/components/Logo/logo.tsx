import theme from "@theme/theme";

import { LogoContainer, LogoText, Wrapper } from "./styles";

export function Logo() {
  return (
    <LogoContainer>
      <LogoText fontSize="20px" color={theme.colors.primary}>
        {"</>"}
      </LogoText>
      <Wrapper>
        <LogoText fontSize="20px" color="black">
          CADASTRO
        </LogoText>
        <LogoText fontSize="14px" color={theme.colors.primary}>
          clientes
        </LogoText>
      </Wrapper>
    </LogoContainer>
  );
}
