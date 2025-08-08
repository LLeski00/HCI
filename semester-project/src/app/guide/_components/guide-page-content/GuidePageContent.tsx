import { getGuidePageContent } from "@/app/api/contentful";
import { GuidePageContent as GuidePageContentType } from "@/types/contentful";
import ResortDecisionSection from "../resort-decision-section/ResortDecisionSection";
import SkiLevelSection from "../ski-levels-section/SkiLevelsSection";
import GearSection from "../gear-section/GearSection";
import SafetySection from "../safety-section/SafetySection";
import FaqSection from "../faq-section/FaqSection";
import PassesSection from "../passes-section/PassesSection";
import ActivitiesSection from "../activities-section/ActivitiesSection";
import TimeSection from "../time-section/TimeSection";

const GuidePageContent = async () => {
    const content: GuidePageContentType | null = await getGuidePageContent();
    if (!content) {
        return <p>Error loading content.</p>;
    }

    return (
        <article className="guide-page-container">
            <ResortDecisionSection
                resortDecisionSectionHeader={
                    content.resortDecisionSectionHeader
                }
                resortDecisionSectionParagraph={
                    content.resortDecisionSectionParagraph
                }
            />
            <TimeSection
                timeSectionHeader={content.timeSectionHeader}
                timeSectionItem1={content.timeSectionItem1}
                timeSectionItem2={content.timeSectionItem2}
                timeSectionItem3={content.timeSectionItem3}
            />

            <SkiLevelSection
                skiLevelSectionHeader={content.skiLevelSectionHeader}
                skiLevelSectionItem1={content.skiLevelSectionItem1}
                skiLevelSectionItem2={content.skiLevelSectionItem2}
                skiLevelSectionItem3={content.skiLevelSectionItem3}
            />
            <GearSection
                gearSectionHeader={content.gearSectionHeader}
                gearSectionItem1={content.gearSectionItem1}
                gearSectionItem2={content.gearSectionItem2}
                gearSectionItem3={content.gearSectionItem3}
                gearSectionItem4={content.gearSectionItem4}
                gearSectionItem5={content.gearSectionItem5}
                gearSectionItem6={content.gearSectionItem6}
                gearSectionItem7={content.gearSectionItem7}
            />
            <PassesSection
                passesSectionHeader={content.passesSectionHeader}
                passesSectionItem1={content.passesSectionItem1}
                passesSectionItem2={content.passesSectionItem2}
                passesSectionItem3={content.passesSectionItem3}
                passesSectionItem4={content.passesSectionItem4}
            />
            <ActivitiesSection
                activitiesSectionHeader={content.activitiesSectionHeader}
                activitiesSectionItem1={content.activitiesSectionItem1}
                activitiesSectionItem2={content.activitiesSectionItem2}
                activitiesSectionItem3={content.activitiesSectionItem3}
                activitiesAction1={content.activitiesAction1}
                activitiesAction2={content.activitiesAction2}
                activitiesAction3={content.activitiesAction3}
                activitiesAction4={content.activitiesAction4}
                activitiesAction5={content.activitiesAction5}

            />

            <SafetySection
                safetySectionHeader={content.safetySectionHeader}
                safetySectionItem1={content.safetySectionItem1}
                safetySectionItem2={content.safetySectionItem2}
                safetySectionItem3={content.safetySectionItem3}
                safetySectionItem4={content.safetySectionItem4}
                safetySectionItem5={content.safetySectionItem5}
            />

            <FaqSection
                faqSectionHeader={content.faqSectionHeader}
                faqSectionQuestion1={content.faqSectionQuestion1}
                faqSectionAnswer1={content.faqSectionAnswer1}
                faqSectionQuestion2={content.faqSectionQuestion2}
                faqSectionAnswer2={content.faqSectionAnswer2}
                faqSectionQuestion3={content.faqSectionQuestion3}
                faqSectionAnswer3={content.faqSectionAnswer3}
                faqSectionQuestion4={content.faqSectionQuestion4}
                faqSectionAnswer4={content.faqSectionAnswer4}
                faqSectionQuestion5={content.faqSectionQuestion5}
                faqSectionAnswer5={content.faqSectionAnswer5}
            />
        </article>
    );
};

export default GuidePageContent;
