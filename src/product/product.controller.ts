import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  HttpCode,
} from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {
    return dto;
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<string> {
    return id;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return id;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: ProductModel,
  ): Promise<string> {
    return id + dto;
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto): Promise<FindProductDto> {
    return dto;
  }
}
