
import Table from "../Components/Table";
import DepartmentList from "../Components/DepartmentList";
import { Typography } from "@mui/material";
const SecondPage=()=>{
  
  return(
    <div style={{height:"80%",width:"100%"}}>
      <Typography variant="h5">Component No.1</Typography>
      <Table/>
      <div style={{width:"100px",height:"100px",margin:"30px"}}></div>
      <Typography variant="h5">Component No.2</Typography>
      <DepartmentList/>
    </div>
  );
}

export default SecondPage;