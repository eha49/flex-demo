import styled from "styled-components";
import { ChevronDown } from "react-feather";

function Chevron({ size, strokeWidth = 1, ...delegated }) {
  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}
    >
      <ChevronDown size={size} color="currentColor" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Chevron;
