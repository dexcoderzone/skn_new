import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
                position="Solution Architect"
                company="Tech Mahindra"
                companyLink="https://hcltech.com"
                time="December 2022 - Present"
                address="Bhubaneswar, Odisha, IN."
                work="Developed and executed SAP Analytics Cloud solutions, enabling real-time data visualization and analysis
                for business stakeholders. Built embedded SAC queries, consuming data from S4HANA.
                Incorporated mixed modelling from BW/4HANA to SAP HANA, resulting in improved performance and
                reduced data latency. Designed and optimized data models in SAP BW/4HANA, enhancing data warehousing capabilities.
                Created and maintained SAP CDS Views for efficient data retrieval and reporting.
                Conducted workshops and training sessions to educate end-users on SAP analytics tools and best practices."
              />

            <Details
              position="Software Engineer"
              company="HCL Technologies"
              companyLink="https://hcltech.com"
              time="February 2021 - December 2022"
              address="Bangalore, Karnataka, IN."
              work="Apply SAP technical and functional skills to coordinate and resolve client issues with the help of support vendor.
              Developed complex end to end reporting solutions from BW to HANA to SAC story.
              Lead technical staff and vendors and consultants to identify and resolve complex SAP problems impacting availability and performance of the SAP systems.
              Follow the appropriate change management process for production releases and projects
              Ensure Quality Control and Assurance procedures are consistent with project specifications, client
              requirements and corporate policies"
            />

            <Details
              position="Freelancer"
              company="Skillmad"
              companyLink="https://skillmadtech.com"
              time="December 2017 - January 2021"
              address="Bhubaneswar, Odisha, IN."
              work="Worked on multiple SAP, Non-SAP, Blockchain, AI & Web Application Development projects for both Domestic & International Client.
              Managed a team of 30+ consultants. Managed project timelines, budgets, and resources to ensure successful project delivery.
              Coordinate with business users and technical companies to customize analytical solutions to meet business
              needs. Drive continuous improvement initiatives and also visit clients protectively (Customer Outreach) to improve
              efficiencies and also resolve chronic client issues. Providing consultancy and support for our internal clients and business/functions departments.
              Development of several internal and customer-facing demos at various stages of the product cycle.
              Liaise with mission analysis and technical requirements teams to ensure completeness across the acquisition"
            />

            <Details
              position="Senior SAP BI Consultant"
              company="Semtech Corporation"
              companyLink="https://www.semtech.com"
              time="August 2015 - December 2017"
              address="Bhubaneswar, Odisha, IN."
              work="Lead the BI & BO Offshore team. Worked on various time critical & complex data warehousing flows.
              Helped customers to achieve competitive advantage and deep market insight by applying statistical analysis
              and machine learning algorithms, using the modern Reporting/Analytical tools.
              Ensured the solution is properly designed and implemented according to the relevant project methodology
              and approach agreed with customer. Defined and implemented innovative approaches and solutions that require dramatic changes within and
              across business environments"
            />

            <Details
              position="Programmer Analyst"
              company="CSC Corporation"
              companyLink="https://dxc.com"
              time="May 2013 - July 2015"
              address="Noida, Delhi, IN."
              work="End to End Development of BW & BI system for project related to Beverage industry.
              Lead SAP BW team in multimillion SAP BW Transformation project. 
              Analyze business/technical needs and translate process into practice through SAP Business Warehouse (BI/BW)"
            />

            <Details
              position="Senior System Engineer"
              company="TCS"
              companyLink="https://www.tcs.com/"
              time="August 2010 - April 2013"
              address="Kolkata, West Bengal, IN."
              work="Design & Development of BW & BI systems for multiple projets related to Energy, utility & Retail.
              Support application and implement enhancements based on day-to-day operations and customer needs."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
