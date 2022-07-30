export interface ForeignKey {
  key: string;
  fields: any;
  type: string;
  endpoint: string;
}

export interface JsonResponse {
  type: string;
  id: number;
  attributes: any;
  relationships: any;
}