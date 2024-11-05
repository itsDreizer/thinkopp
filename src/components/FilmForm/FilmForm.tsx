"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button/Button";
import Pagination from "../UI/Pagination/Pagination";
import FilmFormStep1 from "./Steps/FilmFormStep1";
import { IFilmFormData } from "./types";

import Image from "next/image";
import "./FilmForm.scss";

import arrowRight from "@/images/icons/arrow-right.svg";

const FilmForm = () => {
  const [step, setStep] = useState(1);
  const [isFormLoading, setIsFormLoading] = useState<boolean>(true);
  const formObject = useForm<IFilmFormData>({
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: {
      genre: "",
      country: "",
      format: "",
    },
  });
  const {
    formState: { isDirty },
    setValue,
    handleSubmit,
    reset,
    watch,
  } = formObject;

  const formValues = watch();

  const isFormValid = formValues.nameOfProject && formValues.format && formValues.country && formValues.genre;

  useEffect(() => {
    if (isDirty) {
      localStorage.setItem("formData", JSON.stringify(formValues));
    }
  }, [formValues]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof IFilmFormData, parsedData[key]);
      });
    }
    setIsFormLoading(false);
  }, []);

  const onSubmit: SubmitHandler<IFilmFormData> = (formData) => {
    alert(JSON.stringify(formData));
  };

  return (
    <form autoComplete="off" noValidate className="film-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="film-form__container">
        <header className="film-form__header">
          <h1 className="film-form__title">Производственные параметры фильма</h1>
          <Button className="film-form__reset" onClick={() => reset()}>
            Отменить заполнение
          </Button>
        </header>

        <div className="film-form__body">
          {isFormLoading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                fontSize: "20px",
                fontWeight: "500",
              }}
              className="">
              Загрузка...
            </div>
          ) : (
            <>
              {step === 1 && <FilmFormStep1 formObject={formObject} />}
              {step === 2 && <div className="">Вторая страница</div>}
              {step === 3 && <div className="">Третья страница</div>}
              {step === 4 && <div className="">Четвертая страница</div>}
            </>
          )}
        </div>

        <footer className="film-form-footer">
          <div className="film-form-footer__body">
            <Pagination className={"film-form-footer__pagination"} step={step} setStep={setStep} totalSteps={4} />
            <Button
              onClick={() => {
                alert(JSON.stringify(formValues));
              }}
              className="film-form-footer__button"
              disabled={!isFormValid}
              type="button">
              Следующий шаг
              <Image alt="arrow-right" src={arrowRight.src} width={arrowRight.width} height={arrowRight.height} />
            </Button>
          </div>
        </footer>
      </div>
    </form>
  );
};

export default FilmForm;
