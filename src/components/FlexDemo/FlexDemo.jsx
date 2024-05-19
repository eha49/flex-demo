import React from "react";
import styled from "styled-components";
import Select from "../Select/Select.jsx";
import DemoArea from "../DemoArea/DemoArea.jsx";
import {
  FLEX_DIRECTION,
  JUSTIFY_CONTENT,
  ALIGN_ITEMS,
} from "../constants.js";

function FlexDemo() {
  const [flexDirection, setFlexDirection] = React.useState("row");
  const [justifyContent, setJustifyContent] =
    React.useState("flex-start");
  const [alignItems, setAlignItems] = React.useState("stretch");

  return (
    <MaxWidthWrapper>
      <DemoArea
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
      />
      <InputWrapper>
        <FlexSelect
          label="flex-direction"
          value={flexDirection}
          onChange={(event) => setFlexDirection(event.target.value)}
        >
          {FLEX_DIRECTION.map((item) => {
            return (
              <option value={item.value} key={item.value}>
                {item.value}
              </option>
            );
          })}
        </FlexSelect>
        <FlexSelect
          label="justify-content"
          value={justifyContent}
          onChange={(event) => setJustifyContent(event.target.value)}
        >
          {JUSTIFY_CONTENT.map((item) => {
            return (
              <option value={item.value} key={item.value}>
                {item.value}
              </option>
            );
          })}
        </FlexSelect>
        <FlexSelect
          label="align-items"
          value={alignItems}
          onChange={(event) => setAlignItems(event.target.value)}
        >
          {ALIGN_ITEMS.map((item) => {
            return (
              <option value={item.value} key={item.value}>
                {item.value}
              </option>
            );
          })}
        </FlexSelect>
      </InputWrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.div`
  width: 700px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const FlexSelect = styled(Select)`
  flex: 1;
  flex-basis: 150px;
`;

export default FlexDemo;
