import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SateliteLayout from "../../layouts/satelite-layout"

const Landsat = ({ data }) => {
  console.log({ data })
  return (
    <SateliteLayout metaTitle="Landsat Mission">
      <div className="-mt-2">
        <h3>
          <span className="text-3xl">LANDSAT MISSION</span>
        </h3>
      </div>
      <div className="h-6" />
      <p className="font-semibold">GENERAL INFORMATION</p>
      <GatsbyImage
        image={getImage(data.landsat1)}
        backgroundColor={false}
        alt="Landsat"
        className="max-w-max mb-2"
      />
      <p>
        Landsat is a series of Earth observation satellites operated by the
        United States Geological Survey (USGS) and the National Aeronautics and
        Space Administration (NASA). NASA is responsible for designing,
        building, launching, and testing the satellites, and USGS is responsible
        for operating the satellites, collecting and archiving data, and
        distributing data to users worldwide. Landsat satellites have been
        collecting information about the Earth for over 40 years, since 1972,
        providing valuable data for the United States and the rest of the world,
        thus becoming a cornerstone of global land imaging.
      </p>
      <p>
        The program was established, in 1972, with the launch of Landsat 1,
        which was then known as the Earth Resources Technology Satellite
        (ERTS-1). There have been 9 Landsat missions launched since 1972, with
        Landsat 9 being the most recent launch in September 2021. Landsat 9 is
        currently operational, and the previous mission, Landsat 8, is still
        running and producing data. The satellites orbit the Earth in a polar
        orbit, which allows them to cover the entire globe every 16 days.
      </p>
      <p>
        The Landsat program has created an extensive archive of remotely sensed
        data of the Earth's surface, which is the longest continuous record
        available. It has provided a wealth of historical data, allowing for
        long-term studies of changes in the Earth's land surface over time, with
        data being used by scientists, researchers, government agencies, and the
        private sector worldwide. In particular, the program has been
        instrumental in advancing our understanding of land use and land cover
        change, including deforestation, urbanization, and natural disasters.
      </p>
      <p>
        Landsat data is publicly available for free. Managed by both NASA and
        the U.S. Geological Survey, the Landsat satellite missions are a key
        component of the country's remote sensing capability and have helped to
        establish the United States as a leader in land imaging technology.
      </p>
      <p className="font-semibold">Landsat Missions</p>
      <p>
        There have been nine Landsat missions to date, with each mission
        carrying a different sensor or set of sensors:
      </p>
      <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
        <table className="table-auto border border-slate-500">
          <thead>
            <tr>
              <th className=" text-left p-2 border">Mission</th>
              <th className=" text-left p-2 border">Launch Year</th>
              <th className=" text-left p-2 border">Sensor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 align-top border">Landsat 2</td>
              <td className="p-2 align-top border">1975</td>
              <td className="p-2 align-top border">MSS</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 3</td>
              <td className="p-2 align-top border">1978</td>
              <td className="p-2 align-top border">MSS</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 4</td>
              <td className="p-2 align-top border">1982</td>
              <td className="p-2 align-top border">MSS, TM</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 5</td>
              <td className="p-2 align-top border">1984</td>
              <td className="p-2 align-top border">MSS</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 6</td>
              <td className="p-2 align-top border">1993</td>
              <td className="p-2 align-top border">Failed to reach orbit</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 7</td>
              <td className="p-2 align-top border">1999</td>
              <td className="p-2 align-top border">ETM+</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 8</td>
              <td className="p-2 align-top border">2013</td>
              <td className="p-2 align-top border">OLI, TIRS</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 9</td>
              <td className="p-2 align-top border">2021</td>
              <td className="p-2 align-top border">OLI, TIRS</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 1</td>
              <td className="p-2 align-top border">1972</td>
              <td className="p-2 align-top border">MSS</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>&nbsp;</p>
      <p className="font-semibold">TECHNICAL DETAILS</p>
      <p>
        Landsat 1 through 6 were launched between 1972 and 1993, and while they
        are no longer operational, they did provide valuable data for several
        decades.
      </p>
      <ol className="list-decimal pl-8">
        <li>
          Landsat 1 through 5 carried the Multispectral Scanner (MSS)
          instrument, which had four spectral bands with a spatial resolution of
          80 meters.
        </li>
        <li>
          Landsat 4 and 5 also carried the Thematic Mapper (TM) instrument,
          which had seven spectral bands with a spatial resolution of 30 meters.
        </li>
        <li>
          Landsat 6 was the only Landsat mission that failed to reach orbit, and
          no data was collected from that mission.
        </li>
        <li>
          The Landsat 7 satellite also carried the Enhanced Thematic Mapper Plus
          (ETM+), which had 8 spectral bands.
        </li>
        <li>
          Landsat 8 and 9 satellites carry several instruments, but the primary
          sensor is the Operational Land Imager (OLI) which has 9 spectral bands
          ranging from visible to thermal infrared wavelengths. The Thermal
          Infrared Sensor (TIRS) is another important instrument that captures
          thermal radiation in two spectral bands.
        </li>
      </ol>
      <p>
        The spatial resolution of Landsat imagery is 30 meters for most bands,
        except for the panchromatic band on Landsat 8 and 9, which has a
        resolution of 15 meters. Landsat 8 and 9 have an improved radiometric
        resolution of 12 bits, which allows for up to 4,096 levels of gray in
        each band. The spectral resolution varies by band, with Landsat 8 and 9
        OLI having 8 multispectral bands covering visible to shortwave infrared
        wavelengths and the TIRS instrument capturing data in two thermal
        infrared bands. The temporal resolution of Landsat data is around 16
        days, meaning each location on Earth is imaged about once every 16 days,
        weather permitting.
      </p>
      <p className="font-semibold">Landsat 1-3</p>
      <p>
        Landsat 1, 2, and 3 were launched in 1972, 1975, and 1978, respectively.
        These missions carried the Multispectral Scanner (MSS) instrument, which
        had four spectral bands with a spatial resolution of 80 meters. The
        bands were named:
      </p>
      <ul className="list-disc pl-8">
        <li>Band 4: Green (0.5-0.6 µm)</li>
        <li>Band 5: Red (0.6-0.7 µm)</li>
        <li>Band 6: Near Infrared (0.7-0.8 µm)</li>
        <li>Band 7: Near Infrared (0.8-1.1 µm)</li>
      </ul>
      <p>The temporal resolution of these missions was 18 days.</p>
      <p className="font-semibold">Landsat 4-5</p>
      <p>
        Landsat 4 and 5 were launched in 1982 and 1984, respectively, and
        carried the Thematic Mapper (TM) instrument in addition to the MSS. The
        TM had seven spectral bands with a spatial resolution of 30 meters. The
        bands were named:
      </p>
      <ul className="list-disc pl-8">
        <li>Band 1: Blue (0.45-0.52 µm)</li>
        <li>Band 2: Green (0.52-0.60 µm)</li>
        <li>Band 3: Red (0.63-0.69 µm))</li>
        <li>Band 4: Near Infrared (0.76-0.90 µm)</li>
        <li>Band 5: Mid-Infrared (1.55-1.75 µm)</li>
        <li>Band 6: Thermal Infrared (10.4-12.5 µm)</li>
        <li>Band 7: Mid-Infrared (2.08-2.35 µm)</li>
      </ul>
      <p>The temporal resolution of these missions was 16 days.</p>
      <p className="font-semibold">Landsat 6</p>
      <p>
        Landsat 6 was launched in 1993 but failed to reach orbit, and no data
        was collected.
      </p>
      <p className="font-semibold">Landsat 7</p>
      <p>
        Landsat 7 was launched in 1999 and carried the Enhanced Thematic Mapper
        Plus (ETM+) instrument, which had eight spectral bands with a spatial
        resolution of 30 meters. The bands were named:
      </p>
      <ul className="list-disc pl-8">
        <li>Band 1: Blue (0.45-0.52 µm)</li>
        <li>Band 2: Green (0.52-0.60 µm)</li>
        <li>Band 3: Red (0.63-0.69 µm)</li>
        <li>Band 4: Near Infrared (0.77-0.90 µm)</li>
        <li>Band 5: Mid-Infrared (1.55-1.75 µm)</li>
        <li>Band 6: Thermal Infrared (10.4-12.5 µm)</li>
        <li>Band 7: Mid-Infrared (2.09-2.35 µm)</li>
        <li>Band 8: Panchromatic (0.52-0.90 µm)</li>
      </ul>
      <p>
        The temporal resolution of Landsat 7 is 16 days. The ETM+ instrument has
        a panchromatic band with a spatial resolution of 15 meters.
      </p>
      <p className="font-semibold">Landsat 8-9</p>
      <p>
        Landsat 8-9 Landsat 8 was launched in 2013 and carries the Operational
        Land Imager (OLI) and Thermal Infrared Sensor (TIRS) instruments.
        Landsat 9, launched in 2021, also carries these instruments. Both
        satellites have a combined 11 spectral bands with a spatial resolution
        of 30 meters. Landsat 8-9's OLI instrument has a 12th band, a
        panchromatic band with a spatial resolution of 15 meters. The bands are
        named:
      </p>
      <ul className="list-disc pl-8">
        <li>Band 1: Coastal/Aerosol (0.43-0.45 µm)</li>
        <li>Band 2: Blue (0.45-0.51 µm)</li>
        <li>Band 3: Green (0.53-0.59 µm)</li>
        <li>Band 4: Red (0.64-0.67 µm)</li>
        <li>Band 5: Near Infrared (0.85-0.88 µm)</li>
        <li>Band 6: Shortwave Infrared 1 (1.57-1.65 µm)</li>
        <li>Band 7: Shortwave Infrared 2 (2.11-2.29 µm)</li>
        <li>Band 8: Panchromatic (0.50-0.68 µm)</li>
        <li>Band 9: Cirrus (1.36-1.38 µm)</li>
        <li>Band 10: Thermal Infrared 1 (10.60-11.19 µm)</li>
        <li>Band 11: Thermal Infrared 2 (11.50-12.51 µm)</li>
      </ul>
      <p>
        The OLI instrument has nine spectral bands that provide improved
        signal-to-noise ratio, radiometric quantization, spatial resolution, and
        calibration compared to previous Landsat sensors. The TIRS instrument
        has two thermal bands that operate in the long-wave infrared region and
        provide measurements of land surface temperature. The temporal
        resolution of Landsat 8-9 is 16 days.
      </p>
      <p>The main technical details are summarized in the following Tables.</p>
      <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
        <table className="border border-slate-500 text-sm">
          <thead>
            <tr>
              <th className=" text-left p-2 border">Landsat Mission</th>
              <th className=" text-left p-2 border">Primary Sensor</th>
              <th className=" text-left p-2 border">Bands</th>
              <th className=" text-left p-2 border">Spatial Resolution</th>
              <th className=" text-left p-2 border">Radiometric Resolution</th>
              <th className=" text-left p-2 border">Spectral Resolution</th>
              <th className=" text-left p-2 border">Temporal Resolution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 align-top border">Landsat 1</td>
              <td className="p-2 align-top border">
                Multispectral Scanner (MSS)
              </td>
              <td className="p-2 align-top border">4</td>
              <td className="p-2 align-top border">80 meters</td>
              <td className="p-2 align-top border">6 bits</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">18 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 1</td>
              <td className="p-2 align-top border">
                Multispectral Scanner (MSS)
              </td>
              <td className="p-2 align-top border">4</td>
              <td className="p-2 align-top border">80 meters</td>
              <td className="p-2 align-top border">6 bits</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">18 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 2</td>
              <td className="p-2 align-top border">
                Multispectral Scanner (MSS)
              </td>
              <td className="p-2 align-top border">4</td>
              <td className="p-2 align-top border">80 meters</td>
              <td className="p-2 align-top border">6 bits</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">18 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 3</td>
              <td className="p-2 align-top border">
                Multispectral Scanner (MSS)
              </td>
              <td className="p-2 align-top border">4</td>
              <td className="p-2 align-top border">80 meters</td>
              <td className="p-2 align-top border">6 bits</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">18 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 4</td>
              <td className="p-2 align-top border">Thematic Mapper (TM)</td>
              <td className="p-2 align-top border">7</td>
              <td className="p-2 align-top border">30 meters</td>
              <td className="p-2 align-top border">6 bits</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">16 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 5</td>
              <td className="p-2 align-top border">Thematic Mapper (TM)</td>
              <td className="p-2 align-top border">7</td>
              <td className="p-2 align-top border">30 meters</td>
              <td className="p-2 align-top border">8 bits</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">16 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 6</td>
              <td className="p-2 align-top border">N/A (mission failed)</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">N/A</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 7</td>
              <td className="p-2 align-top border">
                Enhanced Thematic Mapper Plus (ETM+)
              </td>
              <td className="p-2 align-top border">8</td>
              <td className="p-2 align-top border">30 meters</td>
              <td className="p-2 align-top border">8 bits</td>
              <td className="p-2 align-top border">N/A</td>
              <td className="p-2 align-top border">16 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 8</td>
              <td className="p-2 align-top border">
                Operational Land Imager (OLI) and Thermal Infrared Sensor (TIRS)
              </td>
              <td className="p-2 align-top border">11</td>
              <td className="p-2 align-top border">15-30 meters</td>
              <td className="p-2 align-top border">12 bits</td>
              <td className="p-2 align-top border">
                8 multispectral bands, 2 thermal bands
              </td>
              <td className="p-2 align-top border">16 days</td>
            </tr>
            <tr>
              <td className="p-2 align-top border">Landsat 9</td>
              <td className="p-2 align-top border">
                Operational Land Imager (OLI) and Thermal Infrared Sensor (TIRS)
              </td>
              <td className="p-2 align-top border">11</td>
              <td className="p-2 align-top border">15-30 meters</td>
              <td className="p-2 align-top border">12 bits</td>
              <td className="p-2 align-top border">
                8 multispectral bands, 2 thermal bands
              </td>
              <td className="p-2 align-top border">16 days</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>&nbsp;</p>
      <p className="font-semibold">MAIN APPLICATIONS AND DATA ACCESS</p>
      <GatsbyImage
        image={getImage(data.landsat2)}
        backgroundColor={false}
        alt="Landsat"
        className="max-w-max mb-2"
      />
      <p>
        The long-term, consistent nature of Landsat data makes it especially
        valuable for monitoring changes in the Earth's surface over time.
        Landsat data has been used to track changes in land use over time,
        monitor forest health and wildfire activity, identify agricultural crop
        types, assess crop health, and monitor changes in urban areas.
      </p>
      <p>Among the main applications Landsat data have been used for:</p>
      <ul className="list-disc pl-8">
        <li>Land cover and land use classification</li>
        <li>Urban expansion assessment</li>
        <li>Forest and crop monitoring</li>
        <li>Water resource management</li>
        <li>Natural disaster response and recovery</li>
        <li>Climate change studies</li>
      </ul>
      <p>
        The USGS provides free access to Landsat data through their
        EarthExplorer web portal. The data is available in various formats,
        including GeoTIF, and can be downloaded by selecting the area of
        interest and date range. The USGS also provides a LandsatLook Viewer,
        which allows users to view and download full-resolution, pre-selected
        Landsat scenes without the need for specialized software. Additionally,
        the USGS offers a range of Landsat analysis tools and datasets,
        including surface reflectance data and cloud-free composites.
      </p>
      <p>
        Data can be downloaded in several different digital formats and
        processed using a variety of software packages, including ArcGIS and
        QGIS.
      </p>
      <p>&nbsp;</p>
      <p className="font-semibold">REFERENCE LINKS</p>
      <p className="font-semibold">
        Further background information about Landsat
      </p>
      <ul className="list-disc pl-8">
        <li>
          Landsat Science:{" "}
          <a
            href="https://www.usgs.gov/landsat-missions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">
              https://www.usgs.gov/landsat-missions
            </span>
          </a>
          . This is the USGS Landsat Science website, which provides information
          on the science behind Landsat missions. It includes sections on
          Landsat data, applications, and research.
        </li>
        <li>
          Landsat Program:{" "}
          <a
            href="https://landsat.gsfc.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">https://landsat.gsfc.nasa.gov/</span>
          </a>
          . This is the NASA Landsat Program website, which provides information
          on the history and science of Landsat missions. It includes sections
          on Landsat data, applications, and education.
        </li>
        <li>
          Landsat Education:{" "}
          <a
            href="https://www.usgs.gov/landsat-missions/science/education"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">
              https://www.usgs.gov/landsat-missions/science/education
            </span>
          </a>
          . This USGS website provides educational resources and materials
          related to Landsat missions. It includes sections on Landsat history,
          data, and applications, as well as lesson plans and educational
          materials for teachers.
        </li>
        <li>
          Landsat Handbook:{" "}
          <a
            href="https://www.usgs.gov/landsat-missions/landsat-8-data-users-handbook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">
              https://www.usgs.gov/landsat-missions/landsat-8-data-users-handbook
            </span>
          </a>
          .This is the USGS Landsat Handbook, which provides a comprehensive
          overview of Landsat missions and data. It includes sections on Landsat
          history, sensors, data products, and applications, as well as
          technical information and data access instructions.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p className="font-semibold">Accessing and working with Landsat data</p>
      <ul className="list-disc pl-8">
        <li>
          USGS EarthExplorer:{" "}
          <a
            href="https://earthexplorer.usgs.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">https://earthexplorer.usgs.gov/</span>
          </a>
          . This is the main portal for searching and downloading Landsat data.
          It allows users to search for and download data by location, date
          range, and other criteria.
        </li>
        <li>
          USGS LandsatLook Viewer:{" "}
          <a
            href="https://landsatlook.usgs.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">https://landsatlook.usgs.gov/</span>
          </a>
          . This viewer provides access to full-resolution, pre-selected Landsat
          scenes without requiring specialized software. Users can select an
          area of interest and browse through available scenes.
        </li>
        <li>
          USGS Landsat Analysis Ready Data:{" "}
          <a
            href="https://www.usgs.gov/landsat-missions/landsat-us-analysis-ready-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">
              https://www.usgs.gov/landsat-missions/landsat-us-analysis-ready-data
            </span>
          </a>
          . This page provides information on the Landsat Analysis Ready Data
          (ARD) product, which is a processed dataset that includes surface
          reflectance and other derived products. The ARD product is designed to
          be easier to work with and more consistent than raw Landsat data.
        </li>
        <li>
          USGS Landsat Collection 2 Level-2:{" "}
          <a
            href="https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collection-2-level-2-science-products"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">
              https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collection-2-level-2-science-products
            </span>
          </a>
          . This page provides information on the Landsat Collection 2 Level-2
          product, which includes surface reflectance and other derived
          products. The Level-2 product is designed to be easier to work with
          and more consistent than raw Landsat data.
        </li>
        <li>
          Google Earth Engine:{" "}
          <a
            href="https://earthengine.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">https://earthengine.google.com/</span>
          </a>
          . Google Earth Engine is a cloud-based platform for working with
          geospatial data, including Landsat data. It provides access to
          pre-processed Landsat data and a range of analysis tools.
        </li>
        <li>
          NASA Land Processes Distributed Active Archive Center:{" "}
          <a
            href="https://lpdaac.usgs.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">https://lpdaac.usgs.gov/</span>
          </a>
          . This center provides access to Landsat data and other remote sensing
          data products. It also offers a range of tools and resources for
          working with remote sensing data.
        </li>
        <li>
          ESA Sentinel Online:{" "}
          <a
            href="https://sentinel.esa.int/web/sentinel/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">
              https://sentinel.esa.int/web/sentinel/home
            </span>
          </a>
          . While not Landsat data, the Sentinel satellites operated by the
          European Space Agency (ESA) offer similar data products and
          applications. This website provides information on the Sentinel
          missions and access to data.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        *Images from
        <br />{" "}
        <a
          href="https://svs.gsfc.nasa.gov/Gallery/Landsat.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline">
            https://svs.gsfc.nasa.gov/Gallery/Landsat.html
          </span>
        </a>
      </p>
    </SateliteLayout>
  )
}

export default Landsat

export const query = graphql`
  {
    landsat1: file(relativePath: { eq: "satelites/landsat1.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 820)
        id
      }
    }
    landsat2: file(relativePath: { eq: "satelites/landsat2.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 820)
        id
      }
    }
  }
`
