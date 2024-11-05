import { IOption } from "@/types";
import { UseFormReturn } from "react-hook-form";

export interface IFilmFormData {
  nameOfProject: string;
  genre: IOption | string;
  format: IOption | string;
  UNF: number;
  country: IOption | string;
  cost: number;
  synopsis: string;
}

export interface IFilmFormStep {
  formObject: UseFormReturn<IFilmFormData, any, undefined>;
}
