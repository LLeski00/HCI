CREATE TABLE "resorts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"country" text NOT NULL,
	"description" text,
	"elevation" text,
	"easy-slopes" text,
	"intermediate-slopes" text,
	"difficult-slopes" text,
	"ski-lift" text,
	"adult-price" text,
	"youth-price" text,
	"review" text,
	"images" text
);
