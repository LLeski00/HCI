CREATE TABLE "ratings" (
	"id" integer PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"resort_id" integer NOT NULL,
	"score" integer,
	"text" varchar
);
--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "images" SET DATA TYPE jsonb[];--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "images" DROP DEFAULT;