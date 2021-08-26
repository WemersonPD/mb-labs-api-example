export interface UserDto {
  id?: number;
  name: string;
  businessName: string;
  category: string;
  email: string;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
