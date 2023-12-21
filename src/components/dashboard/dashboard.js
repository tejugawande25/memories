import React  from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Container from "../container/container";

function Dashboard(){
    return(
       <>
       <div>
       <Header />
       <Container />
       <Footer />
       </div>
       </>
    );
}
export default Dashboard;