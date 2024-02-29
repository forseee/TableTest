import { ReactNode, ReactElement } from "react";

export interface IWithClass {
  className?: string;
}

export interface IWithChildren {
  children?: ReactNode | ReactElement;
}

export type JSONPrimitimeType = string | number | boolean | null | undefined;
export type JSONArr = Array<JSONObjectType>;
export type TableArr = Array<TableObjectType>;

export type JSONValue = JSONPrimitimeType | JSONObjectType;
export type JSONObjectType = {
  [key: string]: JSONValue;
};

export type TableObjectType = {
  [key: string]: JSONPrimitimeType;
};
