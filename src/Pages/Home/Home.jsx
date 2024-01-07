import React from "react";
import { Outlet } from "react-router-dom";
import { HOC } from "../../Components/HOC/HOC";
import { ArcElement, Tooltip, Legend } from "chart.js";
import{ Chart as ChartJS} from 'chart.js/auto';
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaChild, FaHandHoldingMedical, FaUsers } from "react-icons/fa";
import { TbVaccineBottle } from "react-icons/tb";


ChartJS.register(ArcElement, Tooltip, Legend);
function Home() {
  const users = useSelector(state => state.user.user)
  const childs = useSelector(state => state.child.child)
  const vaccines = useSelector(state => state.vaccine.vaccine)
  const doctors = useSelector(state => state.doctor.doctor)

  
  return (
    <>
      <div>
        <div className='d-flex justify-content-between mb-3'>
            <h3>DASHBOARD</h3>
        </div>
        <div className="row g-4">
            <div className="col-12 col-sm-6">
              <Card className="border-0">
                <Card.Body className="rounded-3 shadow dashboardCard" >
                  <h5>USERS</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="mt-4">{users.length}</h3>
                    <FaUsers color="#17203f" size={40} />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6">
              <Card className="border-0">
                <Card.Body className="rounded-3 shadow dashboardCard" >
                  <h5>VACCINES</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="mt-4">{vaccines.length}</h3>
                    <TbVaccineBottle color="#17203f" size={40} />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6">
              <Card className="border-0">
                <Card.Body className="rounded-3 shadow dashboardCard" >
                  <h5>DOCTORS</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="mt-4">{doctors.length}</h3>
                    <FaHandHoldingMedical color="#17203f" size={40} />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6">
              <Card className="border-0">
                <Card.Body className="rounded-3 shadow dashboardCard" >
                  <h5>CHILDS</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="mt-4">{childs.length}</h3>
                    <FaChild  color="#17203f" size={40} />
                  </div>
                </Card.Body>
              </Card>
            </div>
        </div>
      </div>
    </>
  );
}

export default HOC(Home);
