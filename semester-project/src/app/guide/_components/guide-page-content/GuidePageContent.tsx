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
        <article>
            <ResortDecisionSection />
            <SkiLevelSection />
            <GearSection />
            <SafetySection />
            <LearningSection />
            <FacilitiesSection />
            <WeatherSection />
            <RulesSection />
            <FaqSection />
        </article>
    );
};

export default GuidePageContent;
