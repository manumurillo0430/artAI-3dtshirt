import {
  ai,
  logoShirt,
  stylishShirt,
  fileIcon,
  swatch,
  download,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    label: "Choose a color...",
    icon: swatch,
  },
  {
    name: "filepicker",
    label: "Upload a decal...",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    label: "Ask AI for your desing...",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    label: "Logo",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    label: "Full design",
    icon: stylishShirt,
  },
  {
    name: "download",
    label: "Download your T-shirt",
    icon: download,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
