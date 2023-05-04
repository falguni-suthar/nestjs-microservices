import { 
     IsPhoneNumber,
     IsPositive,
     IsString,
     IsNotEmpty
} from "class-validator";

export class CreateOrderRequest {
     @IsString()
     @IsNotEmpty()
     name: string;

     @IsPositive()
     @IsNotEmpty()
     price: number;

     @IsPhoneNumber()
     @IsNotEmpty()
     mobile: string;
}