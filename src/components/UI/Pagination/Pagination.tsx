"use client";

import { Dispatch, SetStateAction } from "react";
import "./Pagination.scss";

import arrowRight from "@/images/icons/arrow-right.svg";
import Image from "next/image";
import classNames from "classnames";

console.log(arrowRight);

interface IPaginationProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  totalSteps: number;
  className?: string;
}

const Pagination: React.FC<IPaginationProps> = ({ step, setStep, totalSteps, className }) => {
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getPaginationButtons = () => {
    const buttons = [];

    buttons.push(1);

    if (step > 3) {
      buttons.push("...");
    }

    for (let i = Math.max(2, step - 1); i <= Math.min(totalSteps - 1, step + 1); i++) {
      buttons.push(i);
    }

    if (step < totalSteps - 2) {
      buttons.push("...");
    }

    buttons.push(totalSteps);

    return buttons;
  };

  return (
    <div className={classNames("pagination", className)}>
      {step !== 1 && (
        <button className="pagination__prev" type="button" onClick={handlePrevious}>
          <Image width={arrowRight.width} height={arrowRight.height} src={arrowRight.src} alt="arrow-left" />
        </button>
      )}

      {getPaginationButtons().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            type="button"
            className={classNames(`pagination__button ${step === page && "pagination__button--active"}`)}
            onClick={() => setStep(page)}>
            {page}
          </button>
        ) : (
          <span key={index} className="pagination__ellipsis">
            {page}
          </span>
        )
      )}

      {step !== totalSteps && (
        <button className="pagination__next" type="button" onClick={handleNext}>
          <Image width={arrowRight.width} height={arrowRight.height} src={arrowRight.src} alt="arrow-right" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
