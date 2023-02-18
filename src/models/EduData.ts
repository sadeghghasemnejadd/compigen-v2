interface IEduDetail {
  title: string;
  description: string;
}
interface IEduData {
  id: number;
  year: number;
  details: IEduDetail;
}
export default IEduData;
