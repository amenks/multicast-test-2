import React, { useRef, useState, useEffect } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper"
import { Icon } from "react-icons-kit"
import { externalLink } from "react-icons-kit/fa/externalLink"

import "swiper/css"
import "swiper/css/pagination"

SwiperCore.use([Navigation])

const InEvidence = () => {
  const swiperRef = useRef(null)

  const [windowWidth, setWindowWidth] = useState(
    typeof document !== "undefined" ? document.documentElement.clientWidth : 0
  )
  const setWindow = () => {
    if (typeof document !== "undefined") {
      setWindowWidth(document.documentElement.clientWidth)
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
  ]

  const makeCarousel = () => {
    return (
      <StaticQuery
        query={graphql`
          query inEvidenceSliderBK {
            inEvidence1: file(
              relativePath: { eq: "in-evidence/Frontiere_FINAL.jpg" }
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
              <p className="px-10 pt-5 text-4xl">
                In Evidence{" "}
                <Link to="in-evidence" className="m-2">
                  <Icon size={"20px"} icon={externalLink} />
                </Link>
              </p>
            </div>

            <>
              <div className="swiper-pagination-evidence text-center mb-4" />
              <div className="mx-0">
                <div className="grid grid-cols-12">
                  <div className="col-span-1 place-self-center">
                    <button
                      type="button"
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                      role="button"
                      aria-label="slidePrev"
                      data-value="slidePrev"
                    >
                      <div className="slider-left" />
                    </button>
                  </div>

                  <div className="col-span-10">
                    <Swiper
                      slidesPerView={windowWidth >= 768 ? 3 : 1}
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
                      {inEvidenceContent.map((value, k) => {
                        const subtitle = { __html: value["subTitle"] }
                        return (
                          <SwiperSlide key={k}>
                            <a
                              href={value.link}
                              target={value.link !== "" ? "_blank" : ""}
                              rel="noopener noreferrer"
                              className="hover:text-mc-green"
                            >
                              <div className="w-fit h-auto ">
                                {console.log(
                                  value["title"],
                                  data[value["image"]]
                                )}
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
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </div>

                  <div className="col-span-1 place-self-center">
                    <button
                      onClick={() => swiperRef.current.swiper.slideNext()}
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
