export const ContainerStyle = {
  height: "500px",
};

export const DefaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

export const WorldMapSubheading = [
  {
    text: "Below Map is displaying the world map.",
  },
];

export const UsaMapSubHeading = [
  {
    text: "Below Map is displaying the USA map.",
  },
];
export const IndiaMapSubHeading = [
  {
    text: "Below Map is displaying the India map.",
  },
];

export const AustraliaMapSubHeading = [
  {
    text: "Below Map is displaying the Australia map.",
  },
];

const WorldPosition = { lat: 50, lng: 10 };
const UsaPosition = { lat: 37.0902, lng: -95.7129 };
const IndiaPosition = { lat: 20.5937, lng: 78.9629 };

export const WorldMapProps = {
  center: WorldPosition,
  zoom: 2,
  maxZoom: 10,
  attributionControl: true,
  zoomControl: true,
  doubleClickZoom: true,
  scrollWheelZoom: true,
  dragging: true,
  easeLinearity: 0.35,
};

export const UsaMapProps = {
  center: UsaPosition,
  zoom: 4,
  minZoom: 2,
  maxZoom: 10,
};

export const IndiaMapProps = {
  center: IndiaPosition,
  zoom: 5,
};

export const CenterAustralia = { lat: -25.2744, lng: 130.7751 };

export const AustraliaMapProps = {
  center: CenterAustralia,
  zoom: 4,
  zoomControl: true,
  doubleClickZoom: true,
  scrollWheelZoom: true,
  dragging: true,
};
