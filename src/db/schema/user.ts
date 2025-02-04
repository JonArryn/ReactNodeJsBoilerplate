import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../helpers";

const user = pgTable("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 99 }).notNull(),
  ...timestamps,
});

export { user as default };
