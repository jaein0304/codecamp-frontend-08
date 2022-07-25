import { InnerWrapper, Wrapper } from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      {" "}
      Header
      <InnerWrapper></InnerWrapper>
    </Wrapper>
  );
}
