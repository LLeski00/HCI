CREATE TABLE "blogs" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"resort_id" uuid NOT NULL,
	"text" text
);
--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "images" SET DATA TYPE jsonb[];--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "images" DROP DEFAULT;