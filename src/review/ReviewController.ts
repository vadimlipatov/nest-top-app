import { Body, Controller, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';


@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {
		return dto;
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<string> {
		return id;
	}
}
