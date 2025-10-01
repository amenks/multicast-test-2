import React from "react"
import { Link } from "gatsby"
import { Icon } from "react-icons-kit"
import { twitterSquare } from "react-icons-kit/fa/twitterSquare"
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare"
import { facebookSquare } from "react-icons-kit/fa/facebookSquare"

const Footer = () => {
  return (
    <>
      <div className="border-black border-t bg-black text-white">
        <div className="h-3" />
        <div className="container mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="text-xs col-span-12 md:col-span-9 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center">
                <div className="w-fit my-2">
                  <Link to="./" className="mr-2">
                    Privacy
                  </Link>
                  |
                  <Link to="./" className="m-2">
                    Site map
                  </Link>
                  |
                  <Link to="./" className="m-2">
                    Contacts
                  </Link>
                  |
                  <a
                    href="https://cordis.europa.eu/project/id/101028035"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="m-2"
                  >
                    2022 MultiCAST H2020-MSCA-IF-GF
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 text-xs">
              <div className="flex justify-center md:justify-end items-center">
                <div className="m-2">Follow</div>
                <a
                  className="btn-icon  text-white bg-black hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:ring shadow-transparent  mx-1"
                  color="info"
                  href="./"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <Icon size={"20px"} icon={twitterSquare} />
                </a>

                <a
                  className="btn-icon  text-white bg-black hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:ring shadow-transparent  mx-1"
                  color="info"
                  href="./"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <Icon size={"20px"} icon={linkedinSquare} />
                </a>
                <a
                  className="btn-icon  text-white bg-black hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:ring shadow-transparent mx-1"
                  color="info"
                  href="./"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  <Icon size={"20px"} icon={facebookSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-3" />
      </div>
    </>
  )
}

export default Footer
