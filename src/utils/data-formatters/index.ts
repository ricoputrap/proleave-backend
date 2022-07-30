import { ForeignKey, JsonResponse } from "../../types/utils";
import { APIError } from "../app-errors";

const populateForeignKeysData = (
  responseItem: any,
  data: any,
  foreignKeys: ForeignKey[],
): void => {
  foreignKeys.forEach(({ key, fields, type, endpoint }) => {
    const value = data[key];

    if (!!value) {
      responseItem.relationships[key] = {
        data: { 
          id: value[fields.id],
          name: value[fields.name],
          type
        },
        url: `${endpoint}/${value.id}`
      };
    }
  });
} 

const formatResponsePerItem = (
  data: any,
  dataType: string,
  foreignKeys: ForeignKey[]
): JsonResponse => {
  const item: JsonResponse = {
    type: dataType,
    id: data.id,
    attributes: { ...data },
    relationships: {}
  }; 

  populateForeignKeysData(item, data, foreignKeys);

  return item;
}

export const formatData = (data: any) => {
  if (!!data)
    return { data };
  else
    throw new APIError("Data Not Found");
}

export const formatResponseMultiple = (
  data: any[],
  dataType: string,
  foreignKeys: ForeignKey[],
) => {
  const items: JsonResponse[] = [];

  for (let i = 0; i < data.length; i++) {
    const singleData: any = data[i];
    const item: JsonResponse = formatResponsePerItem(singleData, dataType, foreignKeys);
    items.push(item);
  }

  return formatData(items);
}

export const formatResponseSingle = (
  data: any,
  dataType: string,
  foreignKeys: ForeignKey[]
) => {
  const item: JsonResponse = formatResponsePerItem(data, dataType, foreignKeys);
  return formatData(item);
}