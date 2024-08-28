import { Outlet } from "react-router-dom";
import { DashboardMenu } from "../../components/dashboard-menu/dashboard-menu";
import { DashboardWrapper } from "./dashboard-styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
export const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  console.log("user is ", currentUser);
  return (
    <DashboardWrapper>
      <DashboardMenu />
      <Outlet />
    </DashboardWrapper>
  );
};
