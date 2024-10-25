import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight, HighlightDocument } from './highlights.schema';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectModel(Highlight.name)
    private highlightModel: Model<HighlightDocument>,
  ) {}

  // Create a new highlight
  async create(value: string, position: number) {
    const newHighlight = new this.highlightModel({ value, position });
    return newHighlight.save();
  }

  // Get all highlights
  async findAll() {
    return (await this.highlightModel.find().exec()).sort(
      (a, b) => a.position - b.position,
    );
  }

  // Update a highlight by ID
  async update(id: string, value: string, position: number) {
    return this.highlightModel
      .findByIdAndUpdate(id, { value, position }, { new: true })
      .exec();
  }

  // Delete a highlight by ID
  async delete(id: string) {
    return this.highlightModel.findByIdAndDelete(id).exec();
  }
}
