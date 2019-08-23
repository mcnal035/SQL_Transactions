CREATE TABLE "books"(
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR (250) NOT NULL,
  "author" VARCHAR (100) NOT NULL,
  "published" DATE
);

CREATE TABLE "tags"(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (50) NOT NULL
);

CREATE TABLE "books_tags" (
  "id" SERIAL PRIMARY KEY,
  "book_id" INT REFERENCES "books",
  "tag_id" INT REFERENCES "tags"
);

INSERT INTO "books" ("title", "author", "published") VALUES ('Another Brooklyn', 'Jacqueline Woodson', '8-9-2016');
INSERT INTO "books" ("title", "author", "published") VALUES ('The Girl on the Train', 'Paula Hawkins', '1-13-2015');
INSERT INTO "books" ("title", "author", "published") VALUES ('Blue', 'Danielle Steel', '1-19-2016');
INSERT INTO "books" ("title", "author", "published") VALUES ('Sour Heart', 'Jenny Zhang', '8-1-2017');
INSERT INTO "books" ("title", "author", "published") VALUES ('Brotherhood In Death', 'J. D. Robb', NULL);
INSERT INTO "books" ("title", "author", "published") VALUES ('Me Before You', 'Jojo Moyes', '1-5-2012');
INSERT INTO "books" ("title", "author", "published") VALUES ('Fire Touched', 'Patricia Briggs', '3-8-2016');
INSERT INTO "books" ("title", "author", "published") VALUES ('One with you', 'Sylvia Day', NULL);
INSERT INTO "books" ("title", "author", "published") VALUES ('The Kite Runner', 'Khaled Hosseini', '5-1-2004');
INSERT INTO "books" ("title", "author", "published") VALUES ('The Black Widow', 'Daniel Silva', NULL);
INSERT INTO "books" ("title", "author", "published") VALUES ('The Stone Sky', 'N. K. Jemisin', '8-15-2017');
INSERT INTO "books" ("title", "author", "published") VALUES ('Insidious', 'Catherine Coulter', NULL);
INSERT INTO "books" ("title", "author", "published") VALUES ('A Great Reckoning', 'Louise Penny', NULL);
INSERT INTO "books" ("title", "author", "published") VALUES ('What It Means When a Man Falls from the Sky', ' Lesley Nneka Arimah', '4-4-2017');
INSERT INTO "books" ("title", "author", "published") VALUES ('The Girl Who Smiled Beads: A Story of War and What Comes After', 'Clemantine Wamariya', '4-24-2018');

INSERT INTO "tags" VALUES ('Fiction');
INSERT INTO "tags" VALUES ('Non Fiction');
INSERT INTO "tags" VALUES ('Mystery');
INSERT INTO "tags" VALUES ('Fantasy');
INSERT INTO "tags" VALUES ('Sci-Fi');
INSERT INTO "tags" VALUES ('Romance');
INSERT INTO "tags" VALUES ('Thriller');
INSERT INTO "tags" VALUES ('Suspense');
INSERT INTO "tags" VALUES ('Horror');

INSERT INTO "books_tags" ("book_id", "tag_id") VALUES (1, 1);
INSERT INTO "books_tags" ("book_id", "tag_id") VALUES (1, 10);
INSERT INTO "books_tags" ("book_id", "tag_id") VALUES (2, 1);
INSERT INTO "books_tags" ("book_id", "tag_id") VALUES (2, 3);
INSERT INTO "books_tags" ("book_id", "tag_id") VALUES (2, 7);