
import React from "react";
// import { ReactDOM } from "react-dom";
import Container from 'react-bootstrap/Container';
import Select from 'react-select';
import Header from "./Header";
import Footer from "./Footer";





export default function OurServices(){
    

    return(
      <main>
      <Header />

      <main className="home">
  <div className="home-header-container justify-content-center align-items-center d-flex">
  

  <Container className="position-relative">
    <div className="search-sec">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="search-area">
            <h5>Find Universities and Courses in Australia</h5>
            <form className="mt-4">
              <div className="d-flex">
                <Select
                  className="mr-2"
                  isClearable
                  placeholder="Select Degree"
                />
                <Select
                  className="mr-2"
                  isClearable
                  placeholder="Select State"
                />
                <Select
                  isClearable
                  placeholder="Select Discipline"
                />
                <button className="btn btn-primary ml-2">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Container>
  </div>
</main>



   <Footer />
   </main>
    );
} 