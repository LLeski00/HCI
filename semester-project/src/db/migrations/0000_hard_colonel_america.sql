CREATE TABLE IF NOT EXISTS "blogs" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"resort_id" uuid NOT NULL,
	"text" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"resort_id" uuid NOT NULL,
	"rating" integer NOT NULL,
	"text" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resorts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"country" text NOT NULL,
	"description" text,
	"elevation" text,
	"easy-slopes" real,
	"intermediate-slopes" real,
	"difficult-slopes" real,
	"ski-lift" smallint,
	"adult-price" real,
	"youth-price" real,
	"review" real,
	"images" jsonb[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"profile_image" text,
	"created_at" timestamp DEFAULT now()
);
