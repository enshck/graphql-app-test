import React, { BaseSyntheticEvent } from "react";

import { CheckBoxMainContainer, CheckboxInput, CheckboxSpan } from "./styles";

interface IAuthStyledCheckbox {
  name: string;
  onChange: (e: BaseSyntheticEvent, name: string) => void;
  checked: boolean;
}

const StyledCheckbox = ({ name, onChange, checked }: IAuthStyledCheckbox) => {
  return (
    <CheckBoxMainContainer>
      <CheckboxInput
        type={"checkbox"}
        name={name}
        id={name}
        onChange={(e) => onChange(e, name)}
        checked={checked}
      />
      <CheckboxSpan />
    </CheckBoxMainContainer>
  );
};

export default StyledCheckbox;
