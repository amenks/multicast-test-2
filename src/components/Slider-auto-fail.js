import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MobGallery from "./mob-gallery-comp"

import "../css/slider-auto.css"

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof document !== "undefined" ? document.documentElement.clientWidth : 0
  )
  const [itemWidth, setItemWidth] = useState(380)
  const [translationComplete, setTranslationComplete] = useState(true)
  const [index, setIndex] = useState(0)
  const [currTransl, setCurrTransl] = useState([])
  const amount = 6
  const gap = 24

  const setWindow = () => {
    if (typeof document !== "undefined") {
      setWindowWidth(document.documentElement.clientWidth)
      if (document.documentElement.clientWidth < 1324) {
        setItemWidth(
          (document.documentElement.clientWidth - 68 * 2 - gap * 2) / 3
        )
      }
    }
  }

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
      image: "inEvidence5",
      link: "https://www.frontiere.polimi.it/alla-ricerca-di-nuovi-strumenti-per-il-cambiamento-climatico/",
    },
    {
      title: "Invited Session 12",
      subTitle:
        "Urban and Building Modelling<br />for Climate-resilient Cities",
      image: "inEvidence6",
      link: "http://seb-22.kesinternational.org/cmsISdisplay.php",
    },
  ]

  // const itemWidth = 380

  const contentWidth =
    inEvidenceContent.length * itemWidth +
    (inEvidenceContent.length - 1) * gap +
    12

  useEffect(() => {
    setWindow()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setWindow)
      let currTranslAux = []
      for (let i = 0; i < amount; i++) {
        currTranslAux[i] = -itemWidth - gap
        document
          .getElementsByClassName("slide")
          [i].addEventListener("transitionend", transitionCompleted, true)
        document
          .getElementsByClassName("slide")
          [i].addEventListener("webkitTransitionEnd", transitionCompleted, true)
        document
          .getElementsByClassName("slide")
          [i].addEventListener("oTransitionEnd", transitionCompleted, true)
        document
          .getElementsByClassName("slide")
          [i].addEventListener("MSTransitionEnd", transitionCompleted, true)
        document.getElementsByClassName("slide")[
          i
        ].style.transform = `translateX(${-(itemWidth + gap)}px)`
      }
      setCurrTransl(currTranslAux)
      document
        .getElementById("carousel")
        .insertBefore(
          document.getElementById("carousel").children[amount - 1],
          document.getElementById("carousel").children[0]
        )
    }
  }, [itemWidth])

  const transitionCompleted = () => {
    setTranslationComplete(true)
  }

  const makeContents = data => {
    return (
      <>
        {inEvidenceContent.map((value, i) => {
          const subtitle = { __html: value["subTitle"] }
          return (
            <li className="slide animate" key={i}>
              <div
                className={`${i !== 0 ? "ml-3" : ""} mr-3 float-left`}
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
            </li>
          )
        })}
      </>
    )
  }

  const prev = () => {
    if (translationComplete === true) {
      setTranslationComplete(false)
      setIndex(index - 1)
      let indexAux = index - 1
      if (indexAux === -1) {
        setIndex(amount - 1)
        indexAux = amount -1
      } else {
        setIndex(indexAux)
      }
      let currTranslAux = []
      var outerIndex = (indexAux) % amount
      console.log(index, indexAux, outerIndex)
      for (var i = 0; i < amount; i++) {
        var slide = document.getElementsByClassName("slide")[i]
        slide.style.opacity = "1"
        slide.style.transform =
          "translateX(" + (currTransl[i] + itemWidth + gap) + "px)"
        currTranslAux[i] = currTransl[i] + itemWidth + gap
      }
      var outerSlide = document.getElementsByClassName("slide")[outerIndex]
      outerSlide.style.transform =
        "translateX(" +
        (currTransl[outerIndex] - (itemWidth + gap) * amount) +
        "px)"
      // outerSlide.style.opacity = "0"
      currTransl[outerIndex] =
        currTransl[outerIndex] - (itemWidth + gap) * amount
      setCurrTransl(currTranslAux)
    }
  }

  const next = () => {
    if (translationComplete === true) {
      setTranslationComplete(false)
      let outerIndex = index % amount
      console.log("outerIndex", outerIndex)
      setIndex(index + 1)
      let currTranslAux = []
      for (let i = 0; i < amount; i++) {
        let slide = document.getElementsByClassName("slide")[i]
        slide.style.opacity = "1"
        slide.style.transform =
          "translateX(" + (currTransl[i] - itemWidth - gap) + "px)"
        currTranslAux[i] = currTransl[i] - itemWidth - gap
      }

      let outerSlide = document.getElementsByClassName("slide")[outerIndex]
      outerSlide.style.transform =
        "translateX(" +
        (currTransl[outerIndex] + (itemWidth + gap) * amount) +
        "px)"
      // outerSlide.style.opacity = "0"
      console.log(
        currTransl[outerIndex],
        itemWidth,
        amount,
        gap,
        currTransl[outerIndex] + (itemWidth + gap) * amount
      )
      currTranslAux[outerIndex] =
        currTransl[outerIndex] + (itemWidth + gap) * amount
      console.log(currTranslAux)
      setCurrTransl(currTranslAux)
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query inEvidenceAutoFail {
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
          inEvidence5: file(
            relativePath: { eq: "in-evidence/Frontiere_FINAL_Blue.jpg" }
          ) {
            childImageSharp {
              id
              gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 768)
            }
          }
          inEvidence6: file(
            relativePath: { eq: "in-evidence/KES-SEB-22_Blue.JPG" }
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
            <p className="px-10 pt-10 text-4xl">In Evidence</p>
          </div>
          {windowWidth >= 768 ? (
            <>
              <div className="flex w-fit mx-auto ">
                <div className="text-right">
                  <button
                    onClick={() => prev()}
                    className="items-right pr-6"
                    style={{ paddingTop: "156px" }}
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
                    <ul id="carousel" className="animate">
                      {makeContents(data)}
                    </ul>
                  </div>
                </div>
                <div className="text-left">
                  <button
                    onClick={() => next()}
                    className="items-center pl-6 "
                    style={{ paddingTop: "156px" }}
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
