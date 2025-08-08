import { getGuidePageContent } from "@/app/api/contentful";
import { GuidePageContent as GuidePageContentType } from "@/types/contentful";
import ResortDecisionSection from "../resort-decision-section/ResortDecisionSection";
import SkiLevelSection from "../ski-levels-section/SkiLevelsSection";
import GearSection from "../gear-section/GearSection";
import SafetySection from "../safety-section/SafetySection";
import LearningSection from "../learning-section/LearningSection";
import FacilitiesSection from "../facilities-section/FacilitiesSection";
import WeatherSection from "../weather-section/WeatherSection";
import RulesSection from "../rules-section/RulesSection";
import FaqSection from "../faq-section/FaqSection";

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
            <SafetySection
                safetySectionHeader={content.safetySectionHeader}
                safetySectionItem1={content.safetySectionItem1}
                safetySectionItem2={content.safetySectionItem2}
                safetySectionItem3={content.safetySectionItem3}
                safetySectionItem4={content.safetySectionItem4}
                safetySectionItem5={content.safetySectionItem5}
            />
            <LearningSection
                learningSectionHeader={content.learningSectionHeader}
                learningSectionParagraph={content.learningSectionParagraph}
            />
            <FacilitiesSection
                facilitiesSectionHeader={content.facilitiesSectionHeader}
                facilitiesSectionParagraph={content.facilitiesSectionParagraph}
            />
            <WeatherSection
                weatherSectionHeader={content.weatherSectionHeader}
                weatherSectionParagraph={content.weatherSectionParagraph}
            />
            <RulesSection
                rulesSectionHeader={content.rulesSectionHeader}
                rulesSectionItem1={content.rulesSectionItem1}
                rulesSectionItem2={content.rulesSectionItem2}
                rulesSectionItem3={content.rulesSectionItem3}
                rulesSectionItem4={content.rulesSectionItem4}
            />
            <FaqSection
                faqSectionHeader={content.faqSectionHeader}
                faqSectionQuestion1={content.faqSectionQuestion1}
                faqSectionAnswer1={content.faqSectionAnswer1}
                faqSectionQuestion2={content.faqSectionQuestion2}
                faqSectionAnswer2={content.faqSectionAnswer2}
                faqSectionQuestion3={content.faqSectionQuestion3}
                faqSectionAnswer3={content.faqSectionAnswer3}
            />
        </article>
    );
};

export default GuidePageContent;
