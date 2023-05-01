import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
    MAN = "MAN",
    WOMAN = "WOMAN"
}


registerEnumType(Gender, { name: 'Gender', description: undefined })
