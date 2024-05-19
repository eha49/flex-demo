import React from "react";
import styled from "styled-components";
import Chevron from "../Chevron/Chevron.jsx";

import { COLORS } from "../constants.js";

function Select({ label, value, onChange, className, children }) {
  const id = React.useId();
  return (
    <Wrapper className={className}>
      <label htmlFor={id}>{label}</label>
      <SelectWrapper>
        <NativeSelect id={id} value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalSelect>
          {value}
          <Chevron size={20} strokeWidth={2} />
        </PresentationalSelect>
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SelectWrapper = styled.div`
  position: relative;
  margin-top: 4px;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const PresentationalSelect = styled.div`
  font-size: ${16 / 16}rem;
  padding: 12px;
  padding-right: 6px;
  border: 2px solid ${COLORS.secondary};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 2px solid currentColor;
  }
`;

export default Select;
