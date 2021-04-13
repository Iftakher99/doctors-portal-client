import React from "react";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import FeaturedService from "../FeaturedService/FeaturedService";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Doctors></Doctors>
      <Contact></Contact>
    </div>
  );
};

export default Home;