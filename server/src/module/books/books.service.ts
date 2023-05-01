import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
// 导出Book model
import { Book } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(book: CreateBookDto): Promise<any> {
    const createRes = await this.prisma.book.create({
      data: book,
      include: { author: true },
    });
    console.log(createRes);
    const author = await this.prisma.author.findUnique({
      where: { id: book.authorId },
    });

    return {
      id: createRes.id,
      name: createRes.name,
      type: createRes.type,
      author: author,
    };
  }

  findAll(): Promise<Book[]> {
    return this.prisma.book.findMany({
      include: {
        author: true, // Return all fields
      },
    });
  }

  findOne(id: string): Promise<Book> {
    return this.prisma.book.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
