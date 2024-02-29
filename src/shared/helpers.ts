import { JSONArr, JSONObjectType, TableArr, TableObjectType } from "@/types";

export function sortDataForTable(data: JSONArr) {
  let headers = new Set<string>();
  let values: TableArr = [];

  data.forEach((element) => {
    const newData = parserWrapper(element);
    values.push(newData);
  });

  function parserWrapper(data: JSONObjectType) {
    const parsedData: TableObjectType = {};
    (function parser(data: JSONObjectType, parantName?: string) {
      for (let [key, value] of Object.entries(data)) {
        if (typeof value === "object" && value != null) {
          parser(value, key);
        } else {
          const newKey = parantName ? parantName + "-" + key : key;
          headers.add(newKey);
          parsedData[newKey] = value;
        }
      }
    })(data);
    return parsedData;
  }

  return { headers, values };
}

export function isValidDate(dateObject: string) {
  const regex = /^\d{4}\-\d{2}\-\w{5}\:\d{2}\:\d{2}\.\w{2}$/;
  return regex.test(dateObject);
}

export type ReadyForTableType = ReturnType<typeof sortDataForTable>;
