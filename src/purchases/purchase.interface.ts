export interface Purchases {
  success: boolean;
  id: string;
  customerName: string;
  purchaseDate?: number;
  items: Items;
  message: string;
}
interface Items {
  productTd: number;
  quantity: number;
  price: number;
}
