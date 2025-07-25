import { contentfulClient } from "@/lib/contentful/client";
import { GuidePageContent, HomePageContent } from "@/types/contentful";

export async function getHomePageContent(): Promise<HomePageContent | null> {
    const entry = await contentfulClient.getEntry(
        process.env.CONTENTFUL_HOMEPAGE_CONTENT_ID!
    );

    if (!entry) {
        console.error("There was an error fetching the homepage content.");
        return null;
    }

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

export async function getGuidePageContent(): Promise<GuidePageContent | null> {
    const entry = await contentfulClient.getEntry(
        process.env.CONTENTFUL_GUIDE_PAGE_CONTENT_ID!
    );

    if (!entry) {
        console.error("There was an error fetching the guide page content.");
        return null;
    }

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
