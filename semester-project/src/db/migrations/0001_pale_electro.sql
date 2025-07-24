CREATE TABLE "favourite-resorts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"resort_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "favourite-resorts" ADD CONSTRAINT "favourite-resorts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favourite-resorts" ADD CONSTRAINT "favourite-resorts_resort_id_resorts_id_fk" FOREIGN KEY ("resort_id") REFERENCES "public"."resorts"("id") ON DELETE no action ON UPDATE no action;