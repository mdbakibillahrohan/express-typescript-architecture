import dbConfig from "../../config/db.config";
import { getData } from "../../utils/dao.util";

const Loginservices = async (data: { user_name: string; password: string }) => {
  const query1 = `select * from UserInfo where UserName = '${data.user_name}'`;
  const query2 = `select * from Persons`;
  const serviceData1 = await getData(dbConfig.productionManagementDB, query1);
  const serviceData2 = await getData(dbConfig.AsibTest, query2);
  return serviceData1;
};
export default Loginservices;
