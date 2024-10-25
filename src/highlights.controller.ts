import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HighlightsService } from './highlights.service';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Get()
  findAll() {
    return this.highlightsService.findAll();
  }

  @Post()
  create(@Body('value') value: string, @Body('position') position: number) {
    return this.highlightsService.create(value, position);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('value') value: string,
    @Body('position') position: number,
  ) {
    return this.highlightsService.update(id, value, position);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.highlightsService.delete(id);
    return { message: 'Item deleted successfully' };
  }
}
