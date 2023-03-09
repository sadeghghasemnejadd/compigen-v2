interface IAuth {
  user: string;
  pass: string;
}
interface ITransport {
  port: number;
  host: string;
  auth: IAuth;
  secure: boolean;
}
export default ITransport;
