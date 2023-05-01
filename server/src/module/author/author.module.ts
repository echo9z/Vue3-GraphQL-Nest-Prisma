import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AuthorResolver, AuthorService],
  imports: [PrismaModule], // 引入Prisma模块
})
export class AuthorModule {}
