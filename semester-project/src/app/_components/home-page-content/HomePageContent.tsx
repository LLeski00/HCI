import TearEffect from "@/components/tearEffect/tearEffect";
import HomeSection from "../home-section/HomeSection";
import DestinationsSection from "../destinations-section/DestinationsSection";
import PlannerSection from "../planner-section/PlannerSection";
import ReviewsSection from "../reviews-section/ReviewsSection";
import {
    getHomePageContent,
    HomePageContent as HomePageContentType,
} from "@/lib/contentful/client";

const HomePageContent = async () => {
    const content: HomePageContentType | null = await getHomePageContent();
    if (!content) {
        return <p>Error loading content.</p>;
    }

    return (
        <>
            <HomeSection
                header={content.homeSectionHeader}
                paragraph={content.homeSectionParagraph}
            />
            <TearEffect blueBackground={true} />
            <DestinationsSection
                header={content.homeDestinationsSectionHeader}
            />
            <TearEffect />
            <PlannerSection
                header={content.plannerSectionHeader}
                paragraph={content.plannerSectionParagraph}
                stepSectionHeader={content.stepSectionHeader}
                stepSectionHeader1={content.stepSectionHeader1}
                stepSectionParagraph1={content.stepSectionParagraph1}
                stepSectionHeader2={content.stepSectionHeader2}
                stepSectionParagraph2={content.stepSectionParagraph2}
                stepSectionHeader3={content.stepSectionHeader3}
                stepSectionParagraph3={content.stepSectionParagraph3}
            />
            <TearEffect blueBackground={true} />
            <ReviewsSection
                header={content.reviewSectionHeader}
                article={content.reviewSectionArticle}
                paragraph1={content.reviewSectionParagraph1}
                paragraph2={content.reviewSectionParagraph2}
                paragraph3={content.reviewSectionParagraph3}
            />
        </>
    );
};

export default HomePageContent;
