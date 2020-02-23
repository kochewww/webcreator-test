import React from "react";

import {
  Header,
  Form,
  FlexWrapper,
  TextArea,
  Input,
  InputLabel,
  Button
} from "./styled";
import CheckBox from "./Checkbox";
export default props => {
  const mainFields = props.block.fields
    .filter(field => field.group === "main")
    .map(field => (
      <div key={field.name} className="col-md-6 padding">
        <InputLabel>{field.label}</InputLabel>
        <Input
          type={field.type}
          className="form-control"
          required={field.required}
        />
      </div>
    ));
  const additionalFields = props.block.fields
    .filter(field => field.group === "additional")
    .map(field => (
      <div key={field.name} className={props.block.field_groups.additional}>
        <InputLabel>{field.label}</InputLabel>
        <TextArea required={field.required} className="form-control" rows="4" />
      </div>
    ));

  return (
    <Form>
      <Header>{props.block.title}</Header>
      <div className="form-row">
        <div className={props.block.field_groups.main}>
          <FlexWrapper>
            {mainFields}
            <CheckBox fields={props.block.fields} />
            <Button
              type="submit"
              className="btn btn-primary gradient border-none text-bold"
            >
              {props.block.submit_button.text}
            </Button>
          </FlexWrapper>
        </div>
        {additionalFields}
      </div>
    </Form>
  );
};
