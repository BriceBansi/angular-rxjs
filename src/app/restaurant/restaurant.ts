export interface Restaurant {
  id: number;
  productName: string;
  productCode: string;
  categoryId: number;
  category?: string;
  description: string;
  price: number;
  supplierIds?: number[];
}