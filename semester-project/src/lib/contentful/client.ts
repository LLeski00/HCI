// lib/contentful.ts
import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface HomePageContent {
    homeSectionHeader: string;
    homeSectionParagraph: string;
    homeDestinationsSectionHeader: string;
    plannerSectionHeader: string;
    plannerSectionParagraph: string;
    stepSectionHeader: string;
    stepSectionHeader1: string;
    stepSectionParagraph1: string;
    stepSectionHeader2: string;
    stepSectionParagraph2: string;
    stepSectionHeader3: string;
    stepSectionParagraph3: string;
    reviewSectionHeader: string;
    reviewSectionArticle: string;
    reviewSectionParagraph1: string;
    reviewSectionParagraph2: string;
    reviewSectionParagraph3: string;
}

export async function getHomePageContent(): Promise<HomePageContent> {
    const entry = await client.getEntry(
        process.env.CONTENTFUL_HOMEPAGE_CONTENT_ID!
    );

    if (!entry) throw new Error("Failed to fetch homepage content");

    const fields = entry.fields as { [key: string]: any };
    return {
        homeSectionHeader: fields.homeSectionHeader,
        homeSectionParagraph: fields.homeSectionParagraph,
        homeDestinationsSectionHeader: fields.homeDestinationsSectionHeader,
        plannerSectionHeader: fields.plannerSectionHeader,
        plannerSectionParagraph: fields.plannerSectionParagraph,
        stepSectionHeader: fields.stepSectionHeader,
        stepSectionHeader1: fields.stepSectionHeader1,
        stepSectionParagraph1: fields.stepSectionParagraph1,
        stepSectionHeader2: fields.stepSectionHeader2,
        stepSectionParagraph2: fields.stepSectionParagraph2,
        stepSectionHeader3: fields.stepSectionHeader3,
        stepSectionParagraph3: fields.stepSectionParagraph3,
        reviewSectionHeader: fields.reviewSectionHeader,
        reviewSectionArticle: fields.reviewSectionArticle,
        reviewSectionParagraph1: fields.reviewSectionParagraph1,
        reviewSectionParagraph2: fields.reviewSectionParagraph2,
        reviewSectionParagraph3: fields.reviewSectionParagraph3,
    };
}
