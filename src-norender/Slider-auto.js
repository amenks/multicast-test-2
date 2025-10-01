import React from "react"
import Slider from "react-slick"

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const SimpleSlider = () => {
  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      )
    },
  }
  return (
    <div className="bg-gray-500">
      <div className="container mx-auto text-center ">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SimpleSlider
