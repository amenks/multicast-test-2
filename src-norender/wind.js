import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";

import { PlottyGeotiffLayer, VectorArrowsGeotiffLayer } from "../src/componentsWebGis/GeotiffLayer";

import "../css/wind.css"

export default class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windSpeed: null,
      windDirection: null
    };
    this.windSpeedRef = React.createRef();
    this.windDirectionRef = React.createRef();
  }

  handleLayerClick(e) {
    const windSpeed = this.windSpeedRef.current.leafletElement
      .getValueAtLatLng(e.latlng.lat, e.latlng.lng)
      .toFixed(1);
    const windDirection = this.windDirectionRef.current.leafletElement
      .getValueAtLatLng(e.latlng.lat, e.latlng.lng)
      .toFixed(0);
    this.setState({
      windDirection,
      windSpeed
    });
  }

  render() {
    const windSpeedUrl = "https://stuartmatthews.github.io/leaflet-geotiff/tif/wind_speed.tif";
    const windSpeedOptions = {
      band: 0,
      displayMin: 0,
      displayMax: 30,
      name: "Wind speed",
      colorScale: "rainbow",
      clampLow: false,
      clampHigh: true
      //vector:true
    };

    const windDirectionUrl = "https://stuartmatthews.github.io/leaflet-geotiff/tif/wind_direction.tif";
    const windDirectionOptions = {
      band: 0,
      name: "Wind direction",
      arrowSize: 40
    };
    
    return (
      <div>
        <div style={{ width: "30%", float: "left" }}>
          <div>
            Wind speed at clicked point is <b>{this.state.windSpeed}</b>
          </div>
          <div>
            Wind direction at clicked point is <b>{this.state.windDirection}</b>
          </div>
        </div>
        <div style={{ width: "70%", float: "left" }}>
          <Map
            center={this.props.center}
            zoom={this.props.zoom}
            length={4}
            onClick={this.handleLayerClick.bind(this)}
          >
            <TileLayer
              url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
              attribution='<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
              id="mapbox.streets"
            />

            <PlottyGeotiffLayer
              layerRef={this.windSpeedRef}
              url={windSpeedUrl}
              options={windSpeedOptions}
            />

            <VectorArrowsGeotiffLayer
              layerRef={this.windDirectionRef}
              url={windDirectionUrl}
              options={windDirectionOptions}
            />
          </Map>
        </div>
      </div>
    );
  }
}