import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

 experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with various types of people's characteristics and mentality and, as far as I can tell about myself, I am able to work independently in busy environments and also within a team settings. \nI am a dedicated, organized and methodical individual.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Master Data Engineer",
					company: "Al Wefag Trading & Manufacturing Co. Ltd.",
					company_url: "https://alwefag.com/",
					logo_path: "wefag.jpg",
					duration: "Oct 2022 - PRESENT",
					location: "Jeddah, Saudi Arabia",
					description: "I'm working on creating a single master record for each customer, supplier, item or even employee in a business, from across internal and external data sources and applications. This information has been de-duplicated, reconciled and enriched, becoming a consistent, reliable source. Once created, I serve as a trusted view of business-critical data that can be managed and shared across the business to promote accurate reporting, reduce data errors, remove redundancy, and help workers make better-informed business decisions.",
					color: "#0879bf"
				}
				// ,{
				// 	title: "Android and ML Developer",
				// 	company: "Muffito Incorporation",
				// 	company_url: "https://www.linkedin.com/company/muffito-inc/about/",
				// 	logo_path: "muffito_logo.png",
				// 	duration: "May 2018 - Oct 2018",
				// 	location: "Pune, Maharashtra",
				// 	description:
				// 		"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
				// 	color: "#9b1578"
				// },
				// {
				// 	title: "Android Developer",
				// 	company: "FreeCopy Pvt. Ltd.",
				// 	company_url: "https://www.linkedin.com/company/freecopy/about/",
				// 	logo_path: "freecopy_logo.png",
				// 	duration: "Nov 2017 - Dec 2017",
				// 	location: "Ahmedabad, Gujarat",
				// 	description:
				// 		"FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
				// 	color: "#fc1f20"
				// }
			]
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Web/Software Developer ",
					company: "Smart Methods Est. ",
					company_url: "https://s-m.com.sa/",
					logo_path: "SM.jpg",
					duration: "Jun 2021 - Aug 2021",
					location: "Makkah, Saudi Arabia",
					description:
						"I have worked under IOT department on couple projects in total of +200 hours such as: (1) Building and designing UI/UX for a robot control system. (2) Synchronization embedded chat-bot technique using IBM Watson. (3) Design and testing (Text to Speech/Speech to Text) for robotic communication system. I have closely worked & dealt with the use of Python, HTML, CSS, JS, jQUERY and web techniques. At the end of internship, I got full score on final evaluation.",
					color: "#ee3c26"
				}
				// ,{
				// 	title: "Data Science Intern",
				// 	company: "Intel Indexer LLC",
				// 	company_url:
				// 		"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
				// 	logo_path: "intel_logo.jpg",
				// 	duration: "Nov 2018 - Dec 2018",
				// 	location: "Work From Home",
				// 	description:
				// 		"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
				// 	color: "#0071C5"
				// }
			]
		},
		{
			title: "Volunteerships",
			experiences: [
				// {
				// 	title: "Google Explore ML Facilitator",
				// 	company: "Google",
				// 	company_url: "https://about.google/",
				// 	logo_path: "google_logo.png",
				// 	duration: "June 2019 - April 2020",
				// 	location: "Hyderabad, Telangana",
				// 	description:
				// 		"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
				// 	color: "#4285F4"
				// },
				{
					title: "Microsoft Student Partner",
					company: "Microsoft",
					company_url: "https://www.microsoft.com/",
					logo_path: "microsoft_logo.png",
					duration: "July 2022 - PRESENT",
					location: "Study From Home",
					description:
						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on AZURE certification and pass their exam, still willing for more.",
					color: "#D83B01"
				},
				// {
				// 	title: "Mozilla Campus Captain",
				// 	company: "Mozilla",
				// 	company_url: "https://www.mozilla.org/",
				// 	logo_path: "mozilla_logo.png",
				// 	duration: "Oct 2019 - May 2020",
				// 	location: "Kurnool, Andhra Pradesh",
				// 	description:
				// 		"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
				// 	color: "#000000"
				// },
				// {
				// 	title: "Developer Students Club Member",
				// 	company: "DSC IIITDM Kurnool",
				// 	company_url:
				// 		"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
				// 	logo_path: "dsc_logo.png",
				// 	duration: "Jan 2018 - May 2020",
				// 	location: "Kurnool, Andhra Pradesh",
				// 	description:
				// 		"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
				// 	color: "#0C9D58"
				// },
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "Jun 2021 - PRESENT",
					location: "Work From Home",
					description:
						"I am kinda actively contributing to opensource projects. These contributions include searching for bugs to fix, playing around or mainly educational purposes.",
					color: "#181717"
				}
			]
		}
	]
};

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
