import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
  findByProductId(id: string) {
    return id;
  }
}
