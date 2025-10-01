import React from "react"
import { Link } from "gatsby"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const UnderConstruction = () => {
  return (
    <>
      <Metatags
        title="About | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div style={{ height: "26px" }} />
      <div id="content-body"  className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-2">
            <div
              className="text-base bg-mc-green text-white px-2 mb-3"
              style={{ width: "159px" }}
              id="title"
            >
              About
            </div>
            <div style={{ width: "159px" }} className="mb-3">
              <Link to="/project-overview/" className="text-base py-0.5 px-2">
                Project overview
              </Link>
            </div>
            <div style={{ width: "159px" }} className="mb-3">
              <Link to="/participants/" className="text-base py-0.5 px-2">
                Participants
              </Link>
            </div>
          </div>

          <div className="col-span-9 px-4">
            <div className="h-10" />
            <p>
              The{" "}
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                Marie Skłodowska-Curie Actions
              </a>{" "}
              (MSCA) is part of 
              <a
                href="https://ec.europa.eu/info/research-and-innovation/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                Horizon Europe
              </a>{" "}
              the EU’s key funding programme for research and innovation that
              tackles climate change, helps to achieve the UN’s Sustainable
              Development Goals and boosts the EU’s competitiveness and growth.
              The MSCA are the European Union’s flagship funding programme for
              doctoral education and postdoctoral training of researchers.
            </p>
            <p> </p>
            <p className="font-semibold">OBJECTIVES OF THE MSCA</p>
            <p>
              The Marie Skłodowska-Curie Actions fund excellent research and
              innovation and equip researchers at all stages of their career
              with new knowledge and skills, through mobility across borders and
              exposure to different sectors and disciplines. The MSCA help build
              Europe’s capacity for research and innovation by investing in the
              long-term careers of excellent researchers.
            </p>
            <p>
              The MSCA also fund the development of excellent doctoral and
              postdoctoral training programmes and collaborative research
              projects worldwide. By doing so, they achieve a structuring impact
              on higher education institutions, research centres and
              non-academic organisations.
            </p>
            <p>
              The MSCA promote excellence and set standards for high-quality
              researcher education and training in line with the European
              Charter for Researchers and the Code of Conduct for the
              recruitment of researchers.
            </p>
            <p> </p>
            <p className="font-semibold">
              THE PRINCIPLES UNDERLYING THE PROGRAMME ARE
            </p>
            <div>Excellence</div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  The MSCA support excellent researchers. They also foster
                  excellence in research and innovation collaborations,
                  knowledge transfer, methodologies and content, as well as in
                  training, supervision and career guidance.
                </p>
              </div>
            </div>
            <div>Mobility</div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  The MSCA support the mobility of researchers between
                  countries, sectors and disciplines to acquire new knowledge,
                  skills and competences.
                </p>
              </div>
            </div>
            <div>Bottom-up and open to the world</div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  The MSCA are open to all domains of research and innovation
                  and encourage international cooperation to set-up strategic
                  collaborations.
                </p>
              </div>
            </div>
            <div>
              Excellent recruitment, working conditions and inclusiveness
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  The MSCA promote the principles of the{" "}
                  <a
                    href="https://euraxess.ec.europa.eu/jobs/charter/european-charter"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-mc-green font-medium"
                  >
                    European Charter for Researchers and Code of Conduct for the
                    Recruitment of Researchers
                  </a>{" "}
                  for the recruitment, working and employment conditions of
                  researchers.
                </p>
              </div>
            </div>
            <div>Open science and responsible research and innovation</div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  The MSCA support Open Science and Responsible Research and
                  Innovation.
                </p>
              </div>
            </div>
            <div>European Green Deal</div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  The MSCA support bottom-up and frontier/applied research
                  supporting the{" "}
                  <a
                    href="https://ec.europa.eu/info/strategy/priorities-2019-2024/european-green-deal_en"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-mc-green font-medium"
                  >
                    European Green Deal
                  </a>{" "}
                  and tackling climate and environmental-related challenges. The{" "}
                  <a
                    href="https://marie-sklodowska-curie-actions.ec.europa.eu/about-msca/msca-green-charter"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-mc-green font-medium"
                  >
                    MSCA Green Charter
                  </a>{" "}
                  provides recommendations in this regard.
                </p>
              </div>
            </div>
            <p> </p>
            <p className="font-semibold">
              UNDER HORIZON EUROPE THERE ARE 5 MARIE SKŁODOWSKA-CURIE ACTIONS
            </p>
            <div>
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/doctoral-networks"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                Doctoral Networks
              </a>{" "}
              (DN)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  Doctoral programmes supporting excellent research in academia
                  and other sectors
                </p>
              </div>
            </div>
            <div>
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                Postdoctoral Fellowships
              </a>{" "}
              (PF)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  Supporting the careers of individual researchers and promoting
                  excellence
                </p>
              </div>
            </div>
            <div>
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/staff-exchanges"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                Staff Exchanges
              </a>{" "}
              (SE)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  Promoting knowledge collaboration between organisations and
                  sharing best practices through staff exchanges
                </p>
              </div>
            </div>
            <div>
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/cofund"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                COFUND
              </a>{" "}
              (SE)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  Supporting regional, national and international programmes and
                  postdoc fellowships through co-funding
                </p>
              </div>
            </div>
            <div>
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/msca-citizens"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                MSCA and Citizens
              </a>{" "}
              (SE)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 text-center">
                <img
                  alt="dot"
                  height={9}
                  width={9}
                  className="mx-auto mt-1"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='3' cx='6' cy='6' fill='black'/%3E%3C/svg%3E"
                />
              </div>
              <div className="col-span-10">
                <p>
                  Bringing science closer to the public within the European
                  Researchers' Night
                </p>
              </div>
            </div>
            <p> </p>
            <p className="font-semibold">
              MultiCAST HAS BEEN GRANTED UNDER A{" "}
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                POSTDOCTORAL FELLOWSHIPS
              </a>{" "}
              (PF) ACTION
            </p>
            <p> </p>
            <p className="font-semibold">
              OBJECTIVE OF POSTDOCTORAL FELLOWSHIPS
            </p>
            <p>
              The objective of PFs is to support researchers’ careers and foster
              excellence in research. The Postdoctoral Fellowships action
              targets researchers holding a PhD who wish to carry out their
              research activities abroad, acquire new skills and develop their
              careers. PFs help researchers gain experience in other countries,
              disciplines and non-academic sectors.
            </p>
            <p> </p>
            <p className="font-semibold">TYPES OF POSTDOCTORAL FELLOWSHIP</p>
            <p>There are 2 types of Postdoctoral Fellowships:</p>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 ">
                <span className="float-right">1</span>
              </div>
              <div className="col-span-10">
                <p>
                  <b>European Postdoctoral Fellowships.</b> They are open to
                  researchers moving within Europe or coming to Europe from
                  another part of the world to pursue their research career.
                  These fellowships take place in an EU Member State or Horizon
                  Europe Associated Country and can last between 1 and 2 years.
                  Researchers of any nationality can apply.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="col-span-1 ">
                <span className="float-right">2</span>
              </div>
              <div className="col-span-10">
                <p>
                  <b>Global Postdoctoral Fellowships.</b> They fund the mobility
                  of researchers outside Europe. The fellowship lasts between 2
                  to 3 years, of which the first 1 to 2 years will be spent in a
                  non-associated Third Country, followed by a mandatory return
                  phase of 1 year to an organisation based in an EU Member State
                  or Horizon Europe Associated Country. Only nationals or
                  long-term residents of the EU Member States or Horizon Europe
                  Associated Countries can apply.
                </p>
              </div>
            </div>
            <p> </p>
            <p>
              Both types of fellowships may also include{" "}
              <b>short-term secondments</b> anywhere in the world during the
              fellowship (except during the return phase of a Global
              Fellowship).
            </p>
            <p>
              In an effort to build bridges between the academic and
              non-academic sector, researchers can receive{" "}
              <b>
                additional support to carry out a placement of up to 6 months
              </b>{" "}
              in a non-academic organisation based in an EU Member State or
              Horizon Europe Associated Country. This placement needs to take
              place at the end of their fellowship.
            </p>
            <p>
              For Postdoctoral Fellowships in research areas covered by the{" "}
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
                rel="noopener noreferrer"
                target="_blank"
                className="text-mc-green font-medium"
              >
                Euratom Research and Training Programme,
              </a>{" "}
              researchers need to be nationals or long-term residents of an EU
              Member State or a Euratom Associated Country. The beneficiary
              organisation recruiting the researcher also needs to be
              established in an EU Member State or Euratom Associated Country.
            </p>

            <div className="h-10" />
          </div>
        </div>
      </div>
      <div className="h-10" />
      <Footer />
    </>
  )
}

export default UnderConstruction
