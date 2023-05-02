import { AbstractDocument } from "@app/common/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
     @Prop()
     name: string;

     @Prop()
     price: string;

     @Prop()
     mobile: string;
}
export const OrderSchema = SchemaFactory.createForClass(Order);