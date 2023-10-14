import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  HttpCode,
  Param,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {
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
    @Body() dto: TopPageModel,
  ): Promise<string> {
    return id + dto;
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto): Promise<FindTopPageDto> {
    return dto;
  }
}
