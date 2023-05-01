import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutBooksInput } from '../author/author-create-nested-one-without-books.input';

@InputType()
export class BookCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => AuthorCreateNestedOneWithoutBooksInput, {nullable:true})
    author?: AuthorCreateNestedOneWithoutBooksInput;
}
