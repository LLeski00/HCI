"use server";
import { db } from "@/db/drizzle";
import { resorts } from "@/db/schemas/ski-resorts";
import { eq } from "drizzle-orm";
