
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Gender {
    MAN = "MAN",
    WOMAN = "WOMAN"
}

export class CreateAuthorInput {
    name: string;
    email: string;
    gender?: Nullable<Gender>;
}

export class UpdateAuthorInput {
    id: string;
    name: string;
    gender?: Nullable<Gender>;
}

export class CreateBookInput {
    name: string;
    type?: Nullable<string>;
    authorId: string;
}

export class UpdateBookInput {
    id: string;
    name: string;
}

export class Author {
    id: string;
    name: string;
    gender?: Nullable<Gender>;
    email: string;
    books?: Nullable<Book[]>;
}

export abstract class IQuery {
    abstract authors(): Nullable<Author[]> | Promise<Nullable<Author[]>>;

    abstract author(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;

    abstract book(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract createAuthor(createAuthorInput: CreateAuthorInput): Author | Promise<Author>;

    abstract updateAuthor(updateAuthorInput: UpdateAuthorInput): Author | Promise<Author>;

    abstract removeAuthor(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract createBook(createBookInput: CreateBookInput): Book | Promise<Book>;

    abstract updateBook(updateBookInput: UpdateBookInput): Book | Promise<Book>;

    abstract removeBook(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export class Book {
    id: string;
    name: string;
    type?: Nullable<string>;
    author: Author;
}

type Nullable<T> = T | null;
