ALTER TABLE "resorts" ALTER COLUMN "easy-slopes" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "intermediate-slopes" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "difficult-slopes" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "ski-lift" SET DATA TYPE smallint;--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "adult-price" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "youth-price" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "review" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "images" SET DATA TYPE jsonb[];--> statement-breakpoint
ALTER TABLE "resorts" ALTER COLUMN "images" DROP DEFAULT;