import React, { useRef, useState, useEffect } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper"
import { Icon } from "react-icons-kit"
import { externalLink } from "react-icons-kit/fa/externalLink"
// import { inEvidenceContent } from "../data/in-evidence"

import "swiper/css"
import "swiper/css/pagination"

import "../css/slider-auto.css"

SwiperCore.use([Navigation])

const InEvidence = () => {
  const swiperRef = useRef(null)

  const [windowWidth, setWindowWidth] = useState(
    typeof document !== "undefined" ? document.documentElement.clientWidth : 0
  )
  const [controllersTop, setControllersTop] = useState(0)
  const setWindow = () => {
    if (typeof document !== "undefined") {
      setWindowWidth(document.documentElement.clientWidth)
      setControllersTop(
        (document.getElementById("image0").clientHeight - 44) / 2
      )
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setWindow)
    }

    setTimeout(() => {
      setWindow()
    }, "20")
  }, [])

  const makeCarousel = () => {
    return (
      <StaticQuery
        query={graphql`
          query inEvidenceSlider {
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
            inEvidences: allWpInEvidence(limit: 6, sort: { date: ASC }) {
              edges {
                node {
                  title
                  description
                  picture {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            quality: 100
                            layout: CONSTRAINED
                            width: 760
                          )
                        }
                      }
                    }
                  }
                  url
                  date
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="container mx-auto text-center">
              <div className="px-10 pt-5 text-4xl -mb-1">
                In Evidence{" "}
                <Link
                  to="in-evidence"
                  className="mx-2"
                  style={{ height: "20px" }}
                >
                  <Icon
                    size={"20px"}
                    icon={externalLink}
                    style={{ height: "20px" }}
                  />
                </Link>
              </div>
            </div>

            <>
              <div className="swiper-pagination-evidence text-center mb-4" />
              <div className="mx-0">
                <div className="grid grid-cols-12">
                  <div
                    className="col-span-1 mx-auto"
                    style={{ marginTop: `${controllersTop}px` }}
                  >
                    <button
                      type="button"
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                      aria-label="slidePrev"
                      data-value="slidePrev"
                    >
                      <div className="slider-left" />
                    </button>
                  </div>

                  <div className="col-span-10">
                    <Swiper
                      slidesPerView={windowWidth >= 376 ? 3 : 1}
                      spaceBetween={30}
                      loop={true}
                      autoplay={{
                        delay: 8000,
                      }}
                      pagination={{
                        clickable: true,
                        el: ".swiper-pagination-evidence",
                      }}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                      ref={swiperRef}
                    >
                      {data.inEvidences.edges.map((value, k) => {
                        // setSliderCounter(k)
                        const node = value.node
                        const subtitle = { __html: node["description"] }
                        return (
                          <SwiperSlide key={k}>
                            <a
                              href={node["url"]}
                              target={node["url"] !== "" ? "_blank" : ""}
                              rel="noopener noreferrer"
                              className="hover:text-mc-green"
                            >
                              <div className="w-fit h-auto" id={`image${k}`}>
                                <GatsbyImage
                                  image={getImage(
                                    node.picture.node.localFile.childImageSharp
                                  )}
                                  backgroundColor={false}
                                  alt="MultiCAST"
                                  className="  transition duration-200 hover:mix-blend-darken "
                                />
                              </div>
                              <div className="pt-5 pl-4 md:pl-0 w-full block text-center text-lg font-bold">
                                {node["title"]}
                              </div>
                              <div
                                className="pl-4 mx-auto md:pl-0 w-64 block text-center text-sm font-normal"
                                dangerouslySetInnerHTML={subtitle}
                              />
                            </a>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </div>

                  <div
                    className="col-span-1 mx-auto"
                    style={{ marginTop: `${controllersTop}px` }}
                  >
                    <button
                      type="button"
                      onClick={() => swiperRef.current.swiper.slideNext()}
                      aria-label="slideNext"
                      data-value="slideNext"
                    >
                      <div className="slider-right" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          </>
        )}
      />
    )
  }

  return <>{makeCarousel()}</>
}

export default InEvidence

// export const query = graphql`
//   {
//     inEvidences: allWpInEvidence(limit: 6, sort: { date: ASC }) {
//       edges {
//         node {
//           title
//           description
//           url
//           date
//         }
//       }
//     }
//   }
// `
