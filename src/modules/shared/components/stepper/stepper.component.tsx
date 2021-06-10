import React from 'react';

import { Button, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

interface Props {
  totalSteps: number;
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
}

export const AhfStepperComponent: React.FC<Props> = ({
  totalSteps,
  currentStep,
  onNext,
  onBack,
}: Props) => {
  return (
    <MobileStepper
      variant="dots"
      steps={totalSteps}
      position="bottom"
      activeStep={currentStep}
      nextButton={
        <Button
          size="small"
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={onBack} disabled={currentStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
};
