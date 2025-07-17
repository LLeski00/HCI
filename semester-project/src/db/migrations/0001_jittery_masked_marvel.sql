CREATE TYPE "public"."reaction" AS ENUM('like', 'dislike');--> statement-breakpoint
CREATE TABLE "review-reactions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"review_id" uuid NOT NULL,
	"reaction" "reaction" NOT NULL
);
