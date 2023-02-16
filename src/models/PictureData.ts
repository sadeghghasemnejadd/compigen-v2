interface ILogos {
  id: number;
  src: any;
  alt: string;
}
interface IPictureData {
  src: any;
  alt: string;
  color: string;
  logos: ILogos[];
}

export default IPictureData;
