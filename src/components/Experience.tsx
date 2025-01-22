import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Aug 2024 - Present",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">
              Junior Software Associate
            </h3>
            <h4 className="text-blue-400 mb-4">SNS iHUB</h4>
            <p className="text-neutral-300 text-sm mb-6">
              Developed scalable, high-performance web apps with Next.js and
              MERN, optimizing SEO, APIs, CI/CD, and user experience.{" "}
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  {" "}
                  Designed and developed scalable web applications using Next.js
                  and the MERN stack, delivering optimized, high- performance
                  solutions tailored to business needs.{" "}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Built server-side rendered and static applications to improve
                  SEO and reduce load times, while implementing secure
                  authentication and robust RESTful/GraphQL APIs for seamless
                  front-end and back-end integration.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Collaborated with cross-functional teams to define
                  requirements, write clean, reusable code, and debug full-
                  stack issues. Enhanced database performance with optimized
                  queries and schemas, and automated deployment pipelines using
                  CI/CD tools like GitHub Actions and Docker to ensure efficient
                  releases.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                Regularly monitored application performance and applied
                optimizations to deliver exceptional user experiences.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              React
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Next.js
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Node.js
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Express.js
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
            RESTful API's
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
            Git/GitHub
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Postman
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Swagger
            </span>
          </div>

        </div>
      ),
    },
    {
      title: "Dec 2023 - Jun 2024",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">
            Software Developer Intern
            </h3>
            <h4 className="text-blue-400 mb-4">Mobility Intelligence</h4>
            <p className="text-neutral-300 text-sm mb-6">
            Developed and maintained web applications, enhancing functionality, integrating data, generating dynamic outputs, testing APIs, and improving user experience.
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                Developed and maintained web applications using Laravel,
Ajax, and jQuery, enhancing the user interface and ensuring
seamless functionality for various features. 
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                Integrated Excel data into web applications , generated
dynamic PDFs and invoices, and used Swagger and Postman
to perform API testing for reliability and performance. 
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                Implemented version control using Git , integrated email
functionality via APIs, and enabled social media
authentication with Laravel Socialite to enhance user
registration and login experiences.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Laravel
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              AJAX
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              MySQL
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              JQuery
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Postman
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Swagger
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "March 2021 - May 2023",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">
              Web Developer Intern
            </h3>
            <h4 className="text-blue-400 mb-4">Techvolt Software pvt.ltd</h4>
            <p className="text-neutral-300 text-sm mb-6">
            Completed a web development internship, gaining experience in building and deploying dynamic web applications.
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                Web Application Development: Gained hands-on experience in designing and developing dynamic, user-friendly web applications, focusing on front-end and back-end integration.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                Database Management: Worked with databases to store, manage, and retrieve data efficiently, ensuring seamless application functionality.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                Problem-Solving and Deployment: Developed and deployed web solutions while troubleshooting issues to enhance performance and user experience.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Bootstrap
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              MySQL
            </span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">
              Flask
            </span>
          </div>

        </div>
      ),
    }
  ];

  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
