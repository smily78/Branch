

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Sidebar = ({ openClassName }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

//   useEffect(() => {
//     alert(openClassName);
//   }, [openClassName]);

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClassName}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <Link className="d-flex" href="/">
                <Image width={60} height={60} alt="IORI" src="/assets/logo/iaps-logo.svg" />
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <Tabs
                  defaultActiveKey="menu"
                  id="fill-tab-example"
                  className="nav nav-tabs nav-tabs-mobile mt-25"
                  fill
                >
                  <Tab eventKey="menu" title="Menu">
                    <div className="tab-pane">
                      <nav className="mt-15">
                        <ul className="mobile-menu font-heading">
                          <li
                            className={
                              isActive.key == 1
                                ? "has-children active"
                                : "has-children"
                            }
                            onClick={() => handleToggle(1)}
                          >
                            <span className="menu-expand">
                              <svg
                                className="w-6 h-6 icon-16"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </span>
                            <Link className="active" href="/">
                              Home
                            </Link>
                            <ul
                              className={
                                isActive.key == 1
                                  ? "sub-menu d-block"
                                  : "sub-menu d-none"
                              }
                            >
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/sectors/livelihoods-and-markets-for-growth/4865a860-2ab7-44c4-b426-e9d45431c840#">Why i-APS?</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/about-us">About i-APS</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/approach">i-APS Approach</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/our-mission">i-APS Mission</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/our-team">i-APS Team</Link>
                              </li>
                              
                            </ul>
                          </li>
                          <li
                            className={
                              isActive.key == 2
                                ? "has-children active"
                                : "has-children"
                            }
                            onClick={() => handleToggle(2)}
                          >
                            <span className="menu-expand">
                              <svg
                                className="w-6 h-6 icon-16"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </span>
                            <Link href="https://i-aps-nextjs.vercel.app/sectors/livelihoods-and-markets-for-growth/4865a860-2ab7-44c4-b426-e9d45431c840#">What we do</Link>
                            <ul
                              className={
                                isActive.key == 3
                                  ? "sub-menu d-block"
                                  : "sub-menu d-none"
                              }
                            >
                              <Link href="https://i-aps-nextjs.vercel.app/expertise">i-APS Expertise</Link>
                            <ul
                              className={
                                isActive.key == 2
                                  ? "sub-menu d-block"
                                  : "sub-menu d-none"
                              }
                             >
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/expertise/monitoring-and-evaluation">Monitoring & evaluation</Link>
                              </li>
                              
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/expertise/third-party-monitoring">Third party monitoring</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/expertise/organizational-development">Organizational development</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/expertise/knowledge-management">Knowledge management</Link>
                              </li>


                            </ul>
                            
                            <Link href="https://i-aps-nextjs.vercel.app/sectors">i-APS Sectors</Link>
                            <ul
                              className={
                                isActive.key == 2
                                  ? "sub-menu d-block"
                                  : "sub-menu d-none"
                              }
                             >
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/sectors/humanitarian-response-and-coorporation/e08382ef-8509-470b-81e1-c1ee56514dc8">Humanitarian response & coordination</Link>
                              </li>
                              
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/sectors/livelihoods-and-markets-for-growth/4865a860-2ab7-44c4-b426-e9d45431c840">Livelihoods & markets for growth</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/sectors/health-systems/bea1730d-9715-4bed-b5e7-97d9ce7b8b79">Health systems</Link>
                              </li>

                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/sectors/agriculture-and-food-security/ed206a03-4e3f-447e-8f89-6306a15cbcdb">Agriculture & food security</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/sectors/civil-society-organizations/7505fbe3-6cf0-4a71-9fa6-f386a30001d9">Civil society organization</Link>
                              </li>


                            </ul>

                            </ul>
                            
                          </li>
                          
                          <li
                            className={
                              isActive.key == 3
                                ? "has-children active"
                                : "has-children"
                            }
                            onClick={() => handleToggle(3)}
                          >
                            <span className="menu-expand">
                              <svg
                                className="w-6 h-6 icon-16"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </span>
                            <Link href="https://i-aps-nextjs.vercel.app/where-we-work">Where we work</Link>
                            <ul
                              className={
                                isActive.key == 3
                                  ? "sub-menu d-block"
                                  : "sub-menu d-none"
                              }
                            >
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/where-we-work">Where we work</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/clients">i-APS Clients</Link>
                              </li>
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/projects">i-APS Projects</Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            className={
                              isActive.key == 4
                                ? "has-children active"
                                : "has-children"
                            }
                            onClick={() => handleToggle(4)}
                          >
                            <span className="menu-expand">
                              <svg
                                className="w-6 h-6 icon-16"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </span>
                            <Link href="https://i-aps-nextjs.vercel.app/news">News & Reports</Link>
                            <ul
                              className={
                                isActive.key == 4
                                  ? "sub-menu d-block"
                                  : "sub-menu d-none"
                              }
                            >
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/news">i-APS News</Link>
                              </li>

                            </ul>
                          </li>
                          <li
                            className={
                              isActive.key == 5
                                ? "has-children active"
                                : "has-children"
                            }
                            onClick={() => handleToggle(5)}
                          >
                            <span className="menu-expand">
                              <svg
                                className="w-6 h-6 icon-16"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </span>
                            <Link href="https://i-aps-nextjs.vercel.app/technology">KAP product</Link>
                            <ul
                              className={
                                isActive.key == 5
                                  ? "sub-menu d-block"
                                  : "sub-menu d-none"
                              }
                            >
                              <li>
                                <Link href="https://i-aps-nextjs.vercel.app/technology">
                                Tecnology
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.kaporg.com/">
                                KAPorg
                                </Link>
                              </li>
                              <li>
                                <Link href="https://kapcourse.com/">
                                KAPcourse
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.kapsurvey.com/">
                                KAPsurvey
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            className={
                              isActive.key == 6
                                ? "has-children active"
                                : "has-children"
                            }
                            onClick={() => handleToggle(6)}
                          >
                            <span className="menu-expand">
                              <svg
                                className="w-6 h-6 icon-16"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </span>
                           
                           
                          </li>
                         
                        </ul>
                      </nav>
                    </div>
                  </Tab>


                </Tabs>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


