import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HighlightDocument = Highlight & Document;

@Schema()
export class Highlight {
  @Prop({ required: false, type: String })
  value: string;

  @Prop({ required: true })
  position: number;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const HighlightSchema = SchemaFactory.createForClass(Highlight);
