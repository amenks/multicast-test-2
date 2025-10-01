import React, { useState, useLayoutEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../css/mob-gallery.css"

const MobGallery = props => {
  const images = props.imagesArray
  console.log(props)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [movement, setMovement] = useState(0)
  const [lastTouch, setLastTouch] = useState(0)
  const [wheelTimeout, setWheelTimeout] = useState()
  const [transitionDuration, setTransitionDuration] = useState(0)
  const [transitionTimeout, setTransitionTimeout] = useState()
  const [IMG_WIDTH, SET_IMG_WIDTH] = useState(0)
  const [SWIPER_WIDTH, SET_SWIPER_WIDTH] = useState(0)
  const [maxMovement, setMaxMovement] = useState(0)
  const [shouldResetTransition, setShouldResetTransition] = useState(false)

  const resetTransition = () => {
    setShouldResetTransition(false)
    transitionTo(currentIndex)
  }

  useLayoutEffect(() => {
    SET_IMG_WIDTH(props.windowWidth)
    SET_SWIPER_WIDTH(props.windowWidth * images.length)
    setMaxMovement((images.length - 1) * props.windowWidth)
    setShouldResetTransition(true)
  }, [images, props])

  const handleWheel = e => {
    clearTimeout(wheelTimeout)
    handleMovement(e.deltaX)
    setWheelTimeout(setTimeout(() => handleMovementEnd(), 100))
  }

  const handleTouchMove = e => {
    const delta = lastTouch - e.nativeEvent.touches[0].clientX
    setLastTouch(e.nativeEvent.touches[0].clientX)
    handleMovement(delta)
  }

  const handleTouchEnd = () => {
    handleMovementEnd()
    setLastTouch(0)
  }

  const handleMovementEnd = () => {
    clearTimeout(transitionTimeout)
    const endPosition = movement / IMG_WIDTH
    const endPartial = endPosition % 1
    const endingIndex = endPosition - endPartial
    const deltaInteger = endingIndex - currentIndex

    let nextIndex = endingIndex

    if (deltaInteger >= 0) {
      if (endPartial >= 0.1) {
        nextIndex += 1
      }
    } else {
      if (deltaInteger < 0) {
        nextIndex = currentIndex - Math.abs(deltaInteger)
        if (endPartial > 0.9) {
          nextIndex += 1
        }
      }
    }

    transitionTo(nextIndex)
  }

  const transitionTo = (index, duration) => {
    setCurrentIndex(index)
    setMovement(index * IMG_WIDTH)
    setTransitionDuration(`${duration}s`)

    setTransitionTimeout(
      (() => {
        setTransitionDuration("0s")
      },
      duration * 100)
    )
  }

  const handleTouchStart = e => {
    setLastTouch(e.nativeEvent.touches[0].clientX)
  }

  const handleMovement = delta => {
    const maxLength = images.length - 1
    let nextMovement = movement + delta
    if (nextMovement < 0) {
      nextMovement = 0
    }

    if (nextMovement > maxLength * IMG_WIDTH) {
      nextMovement = maxLength * IMG_WIDTH
    }
    setMovement(nextMovement)
  }

  return (
    <>
      {shouldResetTransition ? resetTransition() : null}
      <div>
        <div
          className="mob-gallery-main"
          style={{
            width: `${IMG_WIDTH}px`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <div
            className="mob-gallery-swiper"
            style={{
              transform: `translateX(${movement * -1}px)`,
              transitionDuration: transitionDuration,
              width: `${SWIPER_WIDTH}px`,
            }}
          >
            {props["imagesArray"].map((image, key) => {
              const subtitle = { __html: props.contents[key]["subTitle"] }
              return (
                <a
                  href={props.contents[key]["link"]}
                  target={props.contents[key]["link"] !== "" ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className="hover:text-mc-green"
                  key={key}
                >
                  <GatsbyImage
                    key={key}
                    image={getImage(image)}
                    backgroundColor={false}
                    className="img-responsive-mob"
                    alt={props.contents[key]["title"]}
                  />
                  <div className="pt-5 pl-4 md:pl-0 w-full block text-center text-lg font-bold">
                        {props.contents[key]["title"]}
                      </div>
                      <div
                        className="pl-4 md:pl-0 w-full block text-center text-sm font-normal"
                        dangerouslySetInnerHTML={subtitle}
                      />
                </a>
              )
            })}
          </div>
          {movement !== 0 && (
            <button
              className="back move"
              onClick={() => transitionTo(currentIndex - 1, 0.5)}
            >
              <GatsbyImage
                image={getImage(props.leftArrow)}
                backgroundColor={false}
                alt="left"
              />
            </button>
          )}
          {movement !== maxMovement && (
            <button
              className="next move"
              onClick={() => transitionTo(currentIndex + 1, 0.5)}
            >
              <GatsbyImage
                image={getImage(props.rightArrow)}
                backgroundColor={false}
                alt="right"
              />
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default MobGallery
