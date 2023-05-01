import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.$connect();
  const [res1, res2] = await Promise.all([
    prisma.author.create({
      data: {
        name: '吴承恩',
        email: 'aasdsd@qq.com',
        gender: 'MAN',
        books: {
          createMany: {
            data: [
              { name: '西游记222', type: 'sad222' },
              { name: '西游记333', type: 'sad333' },
            ],
          },
        },
      },
    }),
    prisma.author.create({
      data: {
        name: '施耐庵',
        email: 'asssssd@qq.com',
        gender: 'MAN',
        books: {
          createMany: {
            data: [
              { name: '水浒传222', type: 'sad222' },
              { name: '水浒传333', type: 'sad333' },
            ],
          },
        },
      },
    }),
  ]);
  console.log(res1, res2);
  // 如果现有数据库记录满足where条件，它会更新该记录
  // 如果没有数据库记录满足where条件，它将创建一个新的数据库记录
  // const alice = await prisma.book.upsert({
  //   where: { id: 3 },
  //   update: {
  //     name: 'Viola the Magnificent',
  //   },
  //   create: {
  //     name: '红楼梦',
  //     type: 'sad',
  //     author: { // 在Author表创建 用户
  //       create: {
  //         name: '曹雪芹',
  //         email: 'asd@qq.com',
  //         gender: 'MAN'
  //       }
  //     }
  //   },
  // })

  // console.log({ alice })
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
