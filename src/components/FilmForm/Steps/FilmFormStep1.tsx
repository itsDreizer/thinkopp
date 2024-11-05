import Input from "@/components/UI/Input/Input";
import Label from "@/components/UI/Label/Label";
import React from "react";

import CustomSelect from "@/components/UI/CustomSelect/CustomSelect";
import TextArea from "@/components/UI/TextArea/TextArea";
import { IFilmFormStep } from "../types";

const FilmFormStep1: React.FC<IFilmFormStep> = ({
  formObject: {
    register,
    control,
    formState: { errors },
  },
}) => {
  return (
    <div className="film-form-step-1">
      <div className="film-form-step-1__item film-form-step-1__first-item">
        <Label isError={!!errors.nameOfProject} text="Название проекта">
          <Input
            errorMessage={errors.nameOfProject?.message}
            placeholder="Название"
            {...register("nameOfProject", { required: "Заполните поле" })}
            type="text"
          />
        </Label>
        <Label isError={!!errors.genre} text="Жанр">
          <CustomSelect
            errorMessage={errors.genre?.message}
            rules={{ required: "Заполните поле" }}
            placeHolder="Жанры"
            control={control}
            options={[
              { value: "Ужасы", label: "Ужасы" },
              { value: "Фантастика", label: "Фантастика" },
              { value: "Триллер", label: "Триллер" },
            ]}
            name={"genre"}
          />
        </Label>
        <Label isError={!!errors.format} text="Формат (для онлайн-платформ, большого экрана, интернета, другое)">
          <CustomSelect
            errorMessage={errors.format?.message}
            rules={{ required: "Заполните поле" }}
            placeHolder="Формат"
            control={control}
            options={[
              { value: "Онлайн-платформа", label: "Онлайн-платформа" },
              { value: "Большой Экран", label: "Большой Экран" },
              { value: "Интернет", label: "Интернет" },
            ]}
            name={"format"}
          />
        </Label>
        <Label text="№ УНФ или отсутствует">
          <Input
            mask="890-___-___-__-___"
            replacement={{ _: /\d/ }}
            placeholder="890-000-000-00-000"
            {...register("UNF")}
            type="text"
          />
        </Label>
      </div>
      <div className="film-form-step-1__item film-form-step-1__second-item">
        <Label isError={!!errors.country} text="Страна-производитель">
          <CustomSelect
            errorMessage={errors.country?.message}
            rules={{ required: "Заполните поле" }}
            placeHolder="Страна-производитель (копродукция)"
            control={control}
            options={[
              { value: "Россия", label: "Россия" },
              { value: "США", label: "США" },
              { value: "Япония", label: "Япония" },
            ]}
            name={"country"}
          />
        </Label>
        <Label text="Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть">
          <Input placeholder="Сметная стоимость" {...register("cost")} type="number" />
        </Label>
        <Label text="Синопсис">
          <TextArea {...register("synopsis")} placeholder="Напишите краткое изложение" rows={6} />
        </Label>
      </div>
    </div>
  );
};

export default FilmFormStep1;
