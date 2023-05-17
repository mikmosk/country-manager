import { CapitalInfo } from './capital-info.interface';
import { CoatOfArms } from './coat-of-arms.interface';
import { Currencies } from './currencies.interface';
import { Demonyms } from './demonyms.interface';
import { Flags } from './flags.interface';
import { Idd } from './idd.interface';
import { Maps } from './maps.interface';
import { Name } from './name.interface';
import { PostalCode } from './postal-code.interface';
import { Translations } from './translations.interface';

export interface Region {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}
