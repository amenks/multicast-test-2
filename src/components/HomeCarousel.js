import React, { useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../css/swipper-hack.css"

const IndexPage = () => {
  const setVideoWindow = () => {
    if (typeof document !== "undefined") {
      // let sl = document.getElementsByClassName("gatsby-image-wrapper")[2]
      let sw = document.getElementById("main-swiper")
      sw.style.height =
        (document.documentElement.clientWidth * 698) / 2000 + 40 + "px"

      let swTitle = document.getElementsByClassName("swiper-title")
      let swDef = document.getElementsByClassName("swiper-def")
      for (let i = 0; i < swTitle.length; i++) {
        swTitle[i].style.bottom =
          ((470 / 1442) * sw.offsetWidth) / 5 + 80 + "px"
        swDef[i].style.bottom = ((440 / 1442) * sw.offsetWidth) / 5 + 30 + "px"
      }
    }
  }

  useEffect(() => {
    setVideoWindow()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setVideoWindow)
    }
  }, [])

  const swiperTitles = [
    {
      title: "Urban Heat Island",
      def: "Estimation of High-resolution Near-Surface Air Temperature and Isothermal curves",
    },
    {
      title: "Urban Thermal Comfort",
      def: "Modelling of Mean Radiant Temperature and Thermal-based comfort indices",
    },
    {
      title: "Pedestrian Oriented Comfort",
      def: "Thermal-based Accessibility to Urban services and cool islands, Walkability and Cyclability",
    },
    {
      title: "Urban Greening Assessment",
      def: "Remotely Sensed Vegetation Indices, and Tree Canopy Mapping and Assessment",
    },
  ]

  const makeCarousel = data => {
    let carouselImages = []
    data.allCarouselImgs.edges.forEach(element => {
      carouselImages.push({ img: getImage(element["node"]) })
    })
    return (
      <Swiper
        id="main-swiper"
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="home-swiper"
        // style={{ height: "754px" }}
      >
        {carouselImages.map((image, k) => {
          return (
            <SwiperSlide key={k}>
              <GatsbyImage
                image={image.img}
                backgroundColor={false}
                alt="MultiCAST"
              />
              <div className="swiper-title">{swiperTitles[k]["title"]}</div>
              <div className="swiper-def hidden md:block">
                {swiperTitles[k]["def"]}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query homeCarousel {
          allCarouselImgs: allFile(
            filter: { relativePath: { regex: "/main-carousel/" } }
            sort: { name: ASC }
          ) {
            edges {
              node {
                id
                childImageSharp {
                  gatsbyImageData(
                    quality: 80
                    layout: CONSTRAINED
                    width: 4000
                    height: 1340
                  )
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div>
            <div>{makeCarousel(data)}</div>
          </div>
        </>
      )}
    />
  )
}

export default IndexPage
