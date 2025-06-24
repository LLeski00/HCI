ALTER TABLE "ratings" RENAME TO "reviews";--> statement-breakpoint
ALTER TABLE "reviews" RENAME COLUMN "score" TO "rating";