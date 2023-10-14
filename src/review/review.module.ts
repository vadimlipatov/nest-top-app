import { Module } from '@nestjs/common';
import { ReviewController } from './ReviewController';

@Module({
  controllers: [ReviewController],
})
export class ReviewModule {}
