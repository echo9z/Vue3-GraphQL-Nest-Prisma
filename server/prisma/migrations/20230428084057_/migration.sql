/*
  Warnings:

  - The primary key for the `Author` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- AlterTable
ALTER TABLE "Author" DROP CONSTRAINT "Author_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Author_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Author_id_seq";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "authorId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
