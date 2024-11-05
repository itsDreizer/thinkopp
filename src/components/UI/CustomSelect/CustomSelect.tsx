"use client";
import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import Select, { GroupBase, OptionsOrGroups, Props as SelectProps } from "react-select";

import "./CustomSelect.scss";

interface ICustomSelect extends SelectProps {
  name: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  control: Control<any>;
  placeHolder?: string;
  rules?: Omit<RegisterOptions<any, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined;
  errorMessage?: string;
}

const CustomSelect: React.FC<ICustomSelect> = ({
  options,
  placeHolder,
  name,
  control,
  rules,
  errorMessage,
  ...otherProps
}) => {
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
      fontFamily: "var(--font-helvetica)",
      border: errorMessage
        ? "1px solid red"
        : state.isFocused
        ? "1px solid rgba(0, 0, 0, 0.19)"
        : "1px solid rgba(0, 0, 0, 0.19)",
      borderRadius: "6px",
      padding: "8px 6px",
      fontSize: "15px",
      boxShadow: state.isFocused ? (errorMessage ? "0 0 0 1px red" : "0 0 0 1px rgba(0, 0, 0, 0.19)") : "none",
      transition: "ease 0.5s",
      "&:hover": {
        borderColor: errorMessage ? "red" : "rgba(0, 0, 0, 0.25)",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: errorMessage ? "red" : "rgba(0, 0, 0, 0.5)",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: errorMessage ? "red" : "#000",
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "6px",
      overflow: "hidden",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontFamily: "var(--font-helvetica)",
      fontSize: "15px",
      color: state.isSelected ? "#fff" : "#000",
      backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.8)" : "#fff",
      "&:hover": {
        color: "black",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      paddingRight: "8px",
    }),
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref: fieldRef } }) => (
        <div className="select-wrapper">
          <Select
            styles={customStyles}
            {...otherProps}
            ref={fieldRef}
            placeholder={placeHolder}
            options={options}
            value={value}
            onChange={(selectedOption) => onChange(selectedOption)}
            onBlur={onBlur}
          />
          {errorMessage && <div className="select-wrapper__error">{errorMessage}</div>}
        </div>
      )}
    />
  );
};

export default CustomSelect;
