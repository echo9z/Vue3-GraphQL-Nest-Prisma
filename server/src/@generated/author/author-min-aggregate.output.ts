import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';

@ObjectType()
export class AuthorMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => String, {nullable:true})
    email?: string;
}
