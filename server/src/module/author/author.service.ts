import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAuthorInputDto } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author, Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  // : Promise<Author>
  create(createAuthorInput: Prisma.AuthorCreateInput ): Promise<Author>{
    console.log(createAuthorInput);
    return this.prisma.author.create({
      data: createAuthorInput
    });
  }

  findAll(): Promise<Author[]>{
    // 聚合查询 inner join
    return this.prisma.author.findMany({
      include: {
        books: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.author.findUnique({ where: { id }})
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
