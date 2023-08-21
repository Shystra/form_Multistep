import { ReactElement, useState } from 'react';

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function back() {
    setCurrentStepIndex((i) => Math.max(i - 1, 0));
  }

  function goTo(index: number) {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  }

  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    progress,
    goTo,
    next,
    back
  };
}
