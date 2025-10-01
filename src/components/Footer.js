import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Icon } from "react-icons-kit"

// import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare"
// import { facebookSquare } from "react-icons-kit/fa/facebookSquare"

const Footer = () => {

  const copyToClipboard = person => {
    const email = document.getElementById(person).innerText
    console.log(email)
    if (typeof navigator !== "undefined") navigator.clipboard.writeText(email)
    document.getElementById(person).textContent = "copied"
    setTimeout(() => {
      document.getElementById(person).textContent = email
    }, "1000")
  }

  return (
    <StaticQuery
      query={graphql`
        query pageImgsInv {
          horizon: file(relativePath: { eq: "logos/eu-flag.jpg" }) {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 117)
              id
            }
          }
          currie: file(relativePath: { eq: "logos/logo_marie-curie.png" }) {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 80)
              id
            }
          }
          polimi: file(relativePath: { eq: "logos/polimi.png" }) {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 76)
              id
            }
          }
          mit: file(relativePath: { eq: "logos/MIT_logo.png" }) {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 80)
              id
            }
          }
          tuDelft: file(relativePath: { eq: "logos/TU_P1_full-color.png" }) {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 130)
              id
            }
          }
          upc: file(relativePath: { eq: "logos/upc.png" }) {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 200)
              id
            }
          }
          dataUrbana: file(
            relativePath: { eq: "logos/logo-data_urbana.webp" }
          ) {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 64)
              id
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="container mx-auto p-2">
            <div className="border-black border-b"></div>
            <div className="h-2" />
            <div className="container mx-auto">
              <div className="grid grid-cols-12">
                <div className="col-span-3">
                  <div className="text-center block md:flex items-center justify-start">
                    <GatsbyImage
                      image={getImage(data.horizon)}
                      backgroundColor={false}
                      alt="European Comission Horizon"
                      className="mt-2 mb-2 mr-2"
                      style={{ verticalAlign: "middle !important" }}
                    />

                    <GatsbyImage
                      image={getImage(data.currie)}
                      backgroundColor={false}
                      alt="Marie Skłodowska-Curie Action"
                      className="m-2"
                      style={{ verticalAlign: "middle !important" }}
                    />
                  </div>
                </div>
                <div className="col-span-9 text-xs text-center flex h-auto">
                  <span
                    style={{
                      fontSize: "13px",
                      verticalAlign: "middle !important",
                    }}
                    className="flex items-center text-justify"
                  >
                    The project MultiCAST - Multiscale Thermal-related Urban
                    Climate Analysis and Simulation Tool, has received funding
                    from the European Union's Horizon 2020 (H2020) Research and
                    Innovation programme under the Marie Skłodowska-Curie Action
                    - Individual Fellowship|Global Fellowship (MSCA-IF-GF), with
                    grant agreement number 101028035.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-black border-t bg-black text-white">
            <div className="h-3" />
            <div className="container mx-auto p-2">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="text-xs col-span-12 md:col-span-9 text-center md:text-left">
                  <div className="flex justify-center md:justify-start items-center">
                    <div className="w-fit">
                      <Link to="/cookie-policy" className="my-2">
                        Cookie policy
                      </Link>
                      <br />
                      <a
                        href="https://cordis.europa.eu/project/id/101028035"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="my-2"
                      >
                        2022 MultiCAST H2020-MSCA-IF-GF
                      </a>
                      <br />
                      <div className="float-left">Contacts&nbsp;&nbsp;</div>
                      <div
                        onClick={e => copyToClipboard("colaninno-email")}
                        onKeyDown={() => null}
                        role="button"
                        tabIndex={0}
                        className="text-center w-36 float-left"
                      >
                        <div
                          id="colaninno-email"
                          className=" text-mc-green font-normal mx-auto "
                        >
                          nicola.colaninno@polimi.it
                        </div>
                      </div>
                      <div className=" float-left">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </div>
                      <div
                        onClick={e => copyToClipboard("morello-email")}
                        onKeyDown={() => null}
                        role="button"
                        tabIndex={0}
                        className="text-center w-36 float-left"
                      >
                        <div
                          id="morello-email"
                          className=" text-mc-green font-normal mx-auto"
                        >
                          eugenio.morello@polimi.it
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex justify-center md:justify-start items-center">
                    <div className="mr-0.5">Follow</div>
                    <a
                      className="btn-icon  text-white bg-black hover:bg-gray-400 active:bg-gray-400 focus:outline-none shadow-transparent  mx-0.5"
                      color="info"
                      href="https://www.linkedin.com/in/nicola-colaninno/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="linkedin"
                    >
                      <Icon size={"20px"} icon={linkedinSquare} />
                    </a>
                    <a
                      className="btn-icon  text-white bg-black hover:bg-gray-400 active:bg-gray-400 focus:outline-none shadow-transparent mx-0.5"
                      color="info"
                      href="https://www.facebook.com/nicola.colaninno.50"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="facebook"
                    >
                      <Icon size={"20px"} icon={facebookSquare} />
                    </a>
                  </div> */}
                </div>
                <div className="col-span-12 md:col-span-3 text-xs flex items-stretch justify-end flex-wrap flex-row">
                  <div className="flex justify-end items-end ">
                    <a
                      href="https://netbistrot.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="mx-1 mt-1 float-left">developed by</div>
                      <img
                        src="../../netbistrot.svg"
                        alt="NetBistrot"
                        className="h-auto max-w-full m-1 float-left"
                        style={{
                          width: "80px",
                          maxWidth: "100%",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-3" />
          </div>
        </>
      )}
    />
  )
}

export default Footer
