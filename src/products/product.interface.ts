import { ApiResponse } from 'src/interfaces/response.interface';

export interface Products<T extends ApiResponse> {
  success: 'true';
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  message: 'Fetched products successfully';
}
