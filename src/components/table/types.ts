import React, { ReactNode } from "react";
import { IWithChildren, IWithClass } from "../../types";

export interface ITableHead extends IWithClass {
  children?: ReactNode;
}

export interface ITableBody extends IWithClass, IWithChildren {}

export interface ITableRow extends IWithClass, IWithChildren {
  onClick?: () => void;
  isHover?: boolean;
}

export interface ITableCell
  extends IWithClass,
    IWithChildren,
    React.TdHTMLAttributes<HTMLTableCellElement> {
  colspan?: number;
}

export interface ITable extends IWithClass, IWithChildren {
  loading?: boolean;
  empty?: boolean;
  pagination?: ReactNode;
}
