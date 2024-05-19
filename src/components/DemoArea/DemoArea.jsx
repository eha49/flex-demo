import styled from "styled-components";
import { motion } from "framer-motion";
import { COLORS, ITEMS } from "../constants.js";

function DemoArea({ flexDirection, justifyContent, alignItems }) {
  return (
    <DemoWrapper
      style={{
        "--flex-direction": flexDirection,
        "--justify-content": justifyContent,
        "--align-items": alignItems,
      }}
    >
      {ITEMS.map((item) => {
        return (
          <FlexItem layout={true} key={item.id}>
            <TextContent layout="position">{item.label}</TextContent>
          </FlexItem>
        );
      })}
    </DemoWrapper>
  );
}

const DemoWrapper = styled.div`
  border: 2px solid ${COLORS.secondary};
  min-height: 200px;
  padding: 4px;
  display: flex;
  gap: 6px;
  flex-direction: var(--flex-direction);
  justify-content: var(--justify-content);
  align-items: var(--align-items);
`;

const FlexItem = styled(motion.div)`
  background: ${COLORS.secondary};
  padding: 8px;
`;

const TextContent = styled(motion.p)`
  margin: 0;
`;

export default DemoArea;
