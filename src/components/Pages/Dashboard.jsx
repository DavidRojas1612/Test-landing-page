import React from "react";
import WelcomeSection from '../Templates/WelcomeSection';
import TechnologySection from '../Templates/TechnologySection';
import FollowSection from '../Templates/FollowSection';
import BenefitsSection from "../Templates/BenefitsSection";
import RequirementsSection from "../Templates/RequirementsSection";
import Footer from "../Organisms/Footer";
const Dashboard = () => (
  <>
    <WelcomeSection />
    <TechnologySection />
    <FollowSection />
    <BenefitsSection />
    <RequirementsSection />
    <Footer />
  </>
);

export default Dashboard;
