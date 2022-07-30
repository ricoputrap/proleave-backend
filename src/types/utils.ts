export interface ForeignKey {
  field: string;
  type: string;
  endpoint: string;
}

export interface JsonResponse {
  type: string;
  id: number;
  attributes: any;
  relationships: any;
}