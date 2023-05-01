import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 集成Graphql 客户端请求工具
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BooksModule } from './module/books/books.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorModule } from './module/author/author.module';
import { ConfigModule } from '@nestjs/config';
import parseEnv from '../config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [parseEnv.path],
    }),
    BooksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'], // 添加src下schema graphql文件
      playground: false, // false 禁用graphql 客户端页面
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'), // 所有的GraphQL SDL类型相对应的TypeScript定义（类和接口）
        outputAs: 'class',
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()], // 使用apolloV4
    }),
    PrismaModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
