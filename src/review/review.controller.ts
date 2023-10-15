import {
  Body,
  Controller,
  Param,
  Post,
  Delete,
  Get,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {
    return dto;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return id;
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string): Promise<string> {
    return productId;
  }
}
