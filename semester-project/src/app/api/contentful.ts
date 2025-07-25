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
        resortDecisionSectionHeader: fields.resortDecisionSectionHeader,
        resortDecisionSectionParagraph: fields.resortDecisionSectionParagraph,
        skiLevelSectionHeader: fields.skiLevelSectionHeader,
        skiLevelSectionItem1: fields.skiLevelSectionItem1,
        skiLevelSectionItem2: fields.skiLevelSectionItem2,
        skiLevelSectionItem3: fields.skiLevelSectionItem3,
        gearSectionHeader: fields.gearSectionHeader,
        gearSectionItem1: fields.gearSectionItem1,
        gearSectionItem2: fields.gearSectionItem2,
        gearSectionItem3: fields.gearSectionItem3,
        gearSectionItem4: fields.gearSectionItem4,
        gearSectionItem5: fields.gearSectionItem5,
        gearSectionItem6: fields.gearSectionItem6,
        gearSectionItem7: fields.gearSectionItem7,
        safetySectionHeader: fields.safetySectionHeader,
        safetySectionItem1: fields.safetySectionItem1,
        safetySectionItem2: fields.safetySectionItem2,
        safetySectionItem3: fields.safetySectionItem3,
        safetySectionItem4: fields.safetySectionItem4,
        safetySectionItem5: fields.safetySectionItem5,
        learningSectionHeader: fields.learningSectionHeader,
        learningSectionParagraph: fields.learningSectionParagraph,
        facilitiesSectionHeader: fields.facilitiesSectionHeader,
        facilitiesSectionParagraph: fields.facilitiesSectionParagraph,
        weatherSectionHeader: fields.weatherSectionHeader,
        weatherSectionParagraph: fields.weatherSectionParagraph,
        rulesSectionHeader: fields.rulesSectionHeader,
        rulesSectionItem1: fields.rulesSectionItem1,
        rulesSectionItem2: fields.rulesSectionItem2,
        rulesSectionItem3: fields.rulesSectionItem3,
        rulesSectionItem4: fields.rulesSectionItem4,
        faqSectionHeader: fields.faqSectionHeader,
        faqSectionQuestion1: fields.faqSectionQuestion1,
        faqSectionAnswer1: fields.faqSectionAnswer1,
        faqSectionQuestion2: fields.faqSectionQuestion2,
        faqSectionAnswer2: fields.faqSectionAnswer2,
        faqSectionQuestion3: fields.faqSectionQuestion3,
        faqSectionAnswer3: fields.faqSectionAnswer3,
    };
}
