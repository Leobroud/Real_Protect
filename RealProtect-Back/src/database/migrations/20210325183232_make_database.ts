import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(`
    create table db(
      id uuid primary key, 
      month varchar(50),
      day int,
      hour varchar(255),
      ip varchar(255),
      ssd varchar(255),
      message varchar(255)
  );
    `)
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.raw(`delete from db;`)
}

