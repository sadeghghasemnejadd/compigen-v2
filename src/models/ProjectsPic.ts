interface ILogoItem {
  id: number;
  img: any;
  alt: string;
}

interface IDataItem {
  id: number;
  img: any;
  logos: ILogoItem[];
  title: string;
}
export default interface IProjectsPicData {
  frontend: IDataItem[];
  graphic: IDataItem[];
}
