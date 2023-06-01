export enum Region {
  Asia = 'Asia',
  Africa = 'Africa',
  Americas = 'Americas',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface Country {
  name: Name;
  cca3: string;
  status: Status;
  unMember: boolean;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: Subregion;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string;
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  cioc?: string;
  gini?: { [key: string]: number };
  fifa?: string;
  borders?: string[];
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  cal?: string;
  cha?: string;
  eng?: EngEnum;
  nau?: string;
  fij?: string;
  hif?: string;
  hmo?: string;
  tpi?: string;
  pau?: string;
  ton?: string;
  bis?: string;
  fra?: string;
  smo?: string;
  tkl?: string;
  gil?: string;
  mah?: string;
  rar?: string;
  mri?: string;
  nzs?: string;
  spa?: string;
  niu?: string;
  tvl?: string;
  pih?: string;
}

export enum EngEnum {
  English = "English",
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
  AustraliaAndNewZealand = "Australia and New Zealand",
  Melanesia = "Melanesia",
  Micronesia = "Micronesia",
  Polynesia = "Polynesia",
}