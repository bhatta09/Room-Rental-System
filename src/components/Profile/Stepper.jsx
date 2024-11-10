import React from "react";

import { useState } from "react";
import { Stepper } from "@mantine/core";

const StepperModel = () => {
  const [active, setActive] = useState(1);
  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      orientation="vertical"
      color="yellow"
    >
      <Stepper.Step
        label="1. Basic Details"
        description="Enter basic details"
      />
      <Stepper.Step label="2. Amenities" description="Enter amenities" />
      <Stepper.Step label="3. More details" description="Enter more details" />
    </Stepper>
  );
};

export default StepperModel;
