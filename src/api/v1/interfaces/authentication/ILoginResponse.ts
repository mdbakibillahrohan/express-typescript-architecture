export default interface ILoginResponse {
  token: String;
  user_info: {
    name: string;
    user_id: string;
    employee_id: string;
  };
}
