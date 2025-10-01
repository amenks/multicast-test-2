import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import MobGallery from "./mob-gallery-comp"

import "../css/slider.css"

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof document !== "undefined" ? document.documentElement.clientWidth : 0
  )
  const [itemWidth, setItemWidth] = useState(380)

  const setWindow = () => {
    if (typeof document !== "undefined") {
      setWindowWidth(document.documentElement.clientWidth)
      if (document.documentElement.clientWidth < 1324) {
        setItemWidth(
          (document.documentElement.clientWidth - 68 * 2 - 24 * 2) / 3
        )
      }
    }
  }

  useEffect(() => {
    setWindow()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setWindow)
    }
  }, [])

  const inEvidenceContent = [
    {
      title: "Around the world",
      subTitle: "Looking for new Tools to<br />Tackle Climate Change",
      image: "inEvidence1",
      link: "https://www.frontiere.polimi.it/alla-ricerca-di-nuovi-strumenti-per-il-cambiamento-climatico/",
    },
    {
      title: "Invited Session 12",
      subTitle:
        "Urban and Building Modelling<br />for Climate-resilient Cities",
      image: "inEvidence2",
      link: "http://seb-22.kesinternational.org/cmsISdisplay.php",
    },
    {
      title: "Kick-Off Meeting",
      subTitle:
        "Online meeting between the consortium<br/>MultiCAST - 23 May 2022",
      image: "inEvidence3",
      link: "https://miro.com/app/board/uXjVO3YkWRY=/?share_link_id=852845577932",
    },
    {
      title: `"Cool" Cities`,
      subTitle: "Climate-proof urban planning<br/>for urban heat island",
      image: "inEvidence4",
      link: "https://alumni.polimi.it/2021/06/14/giovani-ricercatori-al-poli-girone-eccellenza-puntata-3/",
    },
    {
      title: "Around the world",
      subTitle: "Looking for new Tools to<br />Tackle Climate Change",
      image: "inEvidence1",
      link: "https://www.frontiere.polimi.it/alla-ricerca-di-nuovi-strumenti-per-il-cambiamento-climatico/",
    },
    {
      title: "Invited Session 12",
      subTitle:
        "Urban and Building Modelling<br />for Climate-resilient Cities",
      image: "inEvidence2",
      link: "http://seb-22.kesinternational.org/cmsISdisplay.php",
    },
    {
      title: "Kick-Off Meeting",
      subTitle:
        "Online meeting between the consortium<br/>MultiCAST - 23 May 2022",
      image: "inEvidence3",
      link: "https://miro.com/app/board/uXjVO3YkWRY=/?share_link_id=852845577932",
    },
    {
      title: `"Cool" Cities`,
      subTitle: "Climate-proof urban planning<br/>for urban heat island",
      image: "inEvidence4",
      link: "https://alumni.polimi.it/2021/06/14/giovani-ricercatori-al-poli-girone-eccellenza-puntata-3/",
    },
  ]

  // const itemWidth = 380

  const contentWidth =
    inEvidenceContent.length * itemWidth +
    (inEvidenceContent.length - 1) * 24 +
    12

  const [currentPosition, setCurrentPosition] = useState(0)

  const makeContents = data => {
    return (
      <>
        {inEvidenceContent.map((value, i) => {
          const subtitle = { __html: value["subTitle"] }
          return (
            <div
              className={`${i !== 0 ? "ml-3" : ""} mr-3 float-left`}
              key={i}
              style={{ width: "380px", height: `${itemWidth + 112}px` }}
            >
              {value.link !== "" ? (
                <a
                  href={value.link}
                  target={value.link !== "" ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className="hover:text-mc-green"
                >
                  <div className="w-fit h-auto ">
                    <GatsbyImage
                      image={getImage(data[value["image"]])}
                      backgroundColor={false}
                      alt="MultiCAST"
                      className="  transition duration-200 hover:mix-blend-darken "
                    />
                  </div>
                  <div className="pt-5 pl-4 md:pl-0 w-full block text-center text-lg font-bold">
                    {value["title"]}
                  </div>
                  <div
                    className="pl-4 md:pl-0 w-full block text-center text-sm font-normal"
                    dangerouslySetInnerHTML={subtitle}
                  />
                </a>
              ) : (
                <>
                  <div className="w-fit h-auto">
                    <GatsbyImage
                      image={getImage(data[value["image"]])}
                      backgroundColor={false}
                      alt="MultiCAST"
                      className="  transition duration-200 hover:mix-blend-darken "
                    />
                  </div>
                  <div className="pl-4 md:pl-0 w-full block text-center text-lg font-bold">
                    {value["title"]}
                  </div>
                  <div
                    className="pl-4 md:pl-0 w-full block text-center text-sm font-normal"
                    dangerouslySetInnerHTML={subtitle}
                  />
                </>
              )}
            </div>
          )
        })}
      </>
    )
  }

  function setPosition(i) {
    console.log(i, inEvidenceContent.length - 1)
    if (i >= 0 && i < inEvidenceContent.length - 2) {
      gsap.to("#wrapper", {
        scrollLeft: i * (itemWidth + 24),
        duration: 0.5,
      })
      setCurrentPosition(i)
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query inEvidence {
          inEvidence1: file(
            relativePath: { eq: "in-evidence/Frontiere_FINAL_Blue.jpg" }
          ) {
            childImageSharp {
              id
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 768)
            }
          }
          inEvidence2: file(
            relativePath: { eq: "in-evidence/KES-SEB-22.JPG" }
          ) {
            childImageSharp {
              id
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 768)
            }
          }
          inEvidence3: file(
            relativePath: { eq: "in-evidence/Kick-Off_1.jpg" }
          ) {
            childImageSharp {
              id
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 768)
            }
          }
          inEvidence4: file(
            relativePath: { eq: "in-evidence/Alumni_POLI.jpg" }
          ) {
            childImageSharp {
              id
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 768)
            }
          }
          leftArrow: file(relativePath: { eq: "comps/left.png" }) {
            childImageSharp {
              id
              gatsbyImageData(quality: 80, layout: CONSTRAINED)
            }
          }
          rightArrow: file(relativePath: { eq: "comps/right.png" }) {
            childImageSharp {
              id
              gatsbyImageData(quality: 80, layout: CONSTRAINED)
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="container mx-auto text-center">
            <p className="px-10 pt-5 text-4xl">In Evidence</p>
          </div>
          {windowWidth >= 768 ? (
            <>
              <div className="flex w-fit mx-auto ">
                <div className="text-right">
                  <button
                    onClick={() => setPosition(currentPosition - 1)}
                    className="items-right pr-6"
                    style={{paddingTop:"156px"}}
                  >
                    <div className="slider-left" />
                  </button>
                </div>
                <div
                  className="container text-center overflow-x-hidden"
                  style={{ maxWidth: `${itemWidth * 3 + 48}px` }}
                  id="wrapper"
                >
                  <div
                    className="text-center inline-flex"
                    style={{ width: `${contentWidth}px` }}
                    id="contents-wrapper"
                  >
                    {makeContents(data)}
                  </div>
                </div>
                <div className="text-left">
                  <button
                    onClick={() => setPosition(currentPosition + 1)}
                    className="items-center pl-6 "
                    style={{paddingTop:"156px"}}
                  >
                    <div className="slider-right" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {console.log("mobgallery")}
              <MobGallery
                imagesArray={[
                  data.inEvidence1,
                  data.inEvidence2,
                  data.inEvidence3,
                  data.inEvidence4,
                ]}
                ratio={1 / 1}
                contents={inEvidenceContent}
                windowWidth={windowWidth}
                leftArrow={data.leftArrow}
                rightArrow={data.rightArrow}
              />
            </>
          )}
        </>
      )}
    />
  )
}

export default Slider
