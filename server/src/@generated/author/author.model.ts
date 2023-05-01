import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Book } from '../book/book.model';
import { AuthorCount } from './author-count.output';

@ObjectType()
export class Author {

    @Field(() => ID, {nullable:false})
    id!: string;

    /**
     * User's name
     */
    @Field(() => String, {nullable:false,description:"User's name"})
    name!: string;

    @Field(() => Gender, {nullable:false,defaultValue:'MAN'})
    gender!: keyof typeof Gender;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => [Book], {nullable:true})
    books?: Array<Book>;

    @Field(() => AuthorCount, {nullable:false})
    _count?: AuthorCount;
}
