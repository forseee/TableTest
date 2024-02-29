import Button from "@/components/button";
import { Table } from "@/components/table";
import { isValidDate } from "@/shared/helpers";

import { StandartTableProps } from "./type";

const StandartTable: React.FC<StandartTableProps> = ({
  data,
  loading,
  onEdit,
  empty,
}) => {
  const headersOfTable = Array.from(data.headers);
  const values = data.values;

  //Можно вынести в отдельный компонент
  const rows = () => {
    const rows = values.map((colValue, index) => {
      return (
        <Table.Row key={index}>
          {headersOfTable.map((cell, key) => {
            const entries = Object.entries(values[index]);
            const findKeyInHeaders = entries.find((item) => item[0] === cell);
            const findKey = findKeyInHeaders && findKeyInHeaders[0]?.toString();
            if (findKey) {
              let value = colValue[findKey];
              if (typeof value === "string" && isValidDate(value)) {
                value = new Intl.DateTimeFormat("ru-RU").format(
                  new Date(value)
                );
              }
              if (typeof value === "boolean") {
                value = value.toString();
              }

              return <Table.Cell key={key}>{value}</Table.Cell>;
            }
            return <Table.Cell key={key}>-</Table.Cell>;
          })}
          <Table.Cell>
            <Button
              text="Edit"
              onClick={() => colValue && colValue.id && onEdit(+colValue.id)}
            />
          </Table.Cell>
        </Table.Row>
      );
    });
    return rows;
  };

  return (
    <Table className={"rounded-xl bg-white"} loading={loading} empty={empty}>
      <Table.Head>
        <Table.Row>
          {headersOfTable.map((name, index) => (
            <Table.Cell key={index}>
              <p className="font-bold">{name}</p>
            </Table.Cell>
          ))}
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{rows()}</Table.Body>
    </Table>
  );
};

export default StandartTable;
