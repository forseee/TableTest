"use client";

import classNames from "classnames";
import { ITable, ITableBody, ITableCell, ITableHead, ITableRow } from "./types";

import s from "./style.module.scss";

export function Table({
  className,
  children,
  loading = false,
  pagination,
  empty = false,
}: ITable) {
  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={classNames(className)}>
      <table className="w-full">{children}</table>
      {empty ? (
        <div className="flex justify-center p-10">
          <p className="">По вашему фильтру ничего не найдено</p>
        </div>
      ) : (
        <div className="mt-[10px]">{pagination}</div>
      )}
    </div>
  );
}

const Head: React.FC<ITableHead> = ({ className, children }) => {
  return <thead className={classNames(s.header, className)}>{children}</thead>;
};

const Body: React.FC<ITableBody> = ({ className, children }) => (
  <tbody className={classNames(s.tbody, className)}>{children}</tbody>
);

const Row: React.FC<ITableRow> = ({ className, children, onClick }) => (
  <tr onClick={onClick} className={className}>
    {children}
  </tr>
);

const Cell: React.FC<ITableCell> = ({ className, children, ...props }) => (
  <td className={classNames("py-[16px] px-[14px]", className)} {...props}>
    {children}
  </td>
);

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
