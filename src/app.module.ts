import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { HhModule } from './hh/hh.module';
import { ConfigService } from './configs/config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HhModule,
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
