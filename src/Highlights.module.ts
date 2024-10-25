import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Highlight, HighlightSchema } from './highlights.schema';
import { HighlightsService } from './highlights.service';
import { HighlightsController } from './highlights.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Highlight.name, schema: HighlightSchema },
    ]), // Register Highlight schema
  ],
  controllers: [HighlightsController],
  providers: [HighlightsService],
})
export class HighlightsModule {}
