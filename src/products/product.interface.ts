export interface Products {
  success: boolean;
  data: Data;
}
interface Data {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
}
