CREATE TYPE "public"."reaction" AS ENUM('like', 'dislike');--> statement-breakpoint
CREATE TABLE "coordinates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"latitude" double precision NOT NULL,
	"longitude" double precision NOT NULL
);
--> statement-breakpoint
CREATE TABLE "review-comments" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"review_id" uuid NOT NULL,
	"text" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "review-reactions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"review_id" uuid NOT NULL,
	"reaction" "reaction" NOT NULL
);
--> statement-breakpoint
ALTER TABLE "reviews" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "resorts" ADD COLUMN "coordinates_id" uuid;--> statement-breakpoint
ALTER TABLE "resorts" ADD CONSTRAINT "resorts_coordinates_id_coordinates_id_fk" FOREIGN KEY ("coordinates_id") REFERENCES "public"."coordinates"("id") ON DELETE no action ON UPDATE no action;