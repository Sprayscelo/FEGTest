import { CustomText } from "@components/CustomText/CustomText";

import Group from "@assets/Group.svg";
import Circle from "@assets/Circle.svg";

import { CustomerContainer, UserImageWrapper, Wrapper } from "./style";

export type CustomerProps = {
  id: number;
  name: string;
  cpf: string;
};

export function Customer({ id, name, cpf }: CustomerProps) {
  return (
    <CustomerContainer>
      <UserImageWrapper>
        <Circle style={{ position: "absolute" }} />
        <Group />
      </UserImageWrapper>
      <Wrapper>
        <CustomText fontSize="14px" text={name} />
        <CustomText
          style={{ lineHeight: 16, opacity: 0.5 }}
          fontSize="12px"
          text={cpf}
        />
      </Wrapper>
    </CustomerContainer>
  );
}
