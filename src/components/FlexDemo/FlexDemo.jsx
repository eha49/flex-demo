import React from "react";
import styled from "styled-components";
import Select from "../Select/Select.jsx";
import DemoArea from "../DemoArea/DemoArea.jsx";
import {
  FLEX_DIRECTION,
  JUSTIFY_CONTENT,
  ALIGN_ITEMS,
} from "../constants.js";

function reducer(layout, action) {
  if (action.type === "flex-direction") {
    return {
      ...layout,
      flexDirection: action.value,
    };
  } else if (action.type === "justify-content") {
    return {
      ...layout,
      justifyContent: action.value,
    };
  } else if (action.type === "align-items") {
    return {
      ...layout,
      alignItems: action.value,
    };
  }
}

function FlexDemo() {
  // const [flexDirection, setFlexDirection] = React.useState("row");
  // const [justifyContent, setJustifyContent] =
  //   React.useState("flex-start");
  // const [alignItems, setAlignItems] = React.useState("stretch");

  const [layout, dispatch] = React.useReducer(reducer, {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
  });

  return (
    <MaxWidthWrapper>
      <DemoArea
        flexDirection={layout.flexDirection}
        justifyContent={layout.justifyContent}
        alignItems={layout.alignItems}
      />
      <InputWrapper>
        <FlexSelect
          label="flex-direction"
          value={layout.flexDirection}
          onChange={(event) =>
            dispatch({
              type: "flex-direction",
              value: event.target.value,
            })
          }
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
          value={layout.justifyContent}
          onChange={(event) =>
            dispatch({
              type: "justify-content",
              value: event.target.value,
            })
          }
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
          value={layout.alignItems}
          onChange={(event) =>
            dispatch({
              type: "align-items",
              value: event.target.value,
            })
          }
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
