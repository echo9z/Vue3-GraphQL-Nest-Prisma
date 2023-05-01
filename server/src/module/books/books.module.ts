import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [BooksResolver, BooksService],
  imports: [PrismaModule], // 引入Prisma模块
})
export class BooksModule {}
