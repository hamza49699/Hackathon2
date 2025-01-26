
export default interface IProduct {
    quantity: number;
    productName: string;
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    image: string;
    description: string;
    available: boolean;
  }