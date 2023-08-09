import dbConfig from "../../config/db.config";
import { getData } from "../../utils/dao.util";

const Loginservices = async (data: { user_name: string; password: string }) => {
  const query = `select * from UserInfo where UserName = '${data.user_name}'`;
  const serviceData = await getData(dbConfig.productionManagementDB, query);
  return serviceData;
};
export default Loginservices;
