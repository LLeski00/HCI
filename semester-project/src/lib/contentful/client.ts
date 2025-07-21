// lib/contentful.ts
import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface HomePageContent {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    sectionOneTitle: string;
    sectionOneDescription: string;
}

export async function getHomePageContent(): Promise<HomePageContent> {
    const entry = await client.getEntry("homePageContentId");
    const fields = entry.fields as { [key: string]: any };
    return {
        heroTitle: fields.heroTitle ?? "",
        heroSubtitle: fields.heroSubtitle ?? "",
        heroDescription: fields.heroDescription ?? "",
        sectionOneTitle: fields.sectionOneTitle ?? "",
        sectionOneDescription: fields.sectionOneDescription ?? "",
    };
}
