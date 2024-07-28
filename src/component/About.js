import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="container my-5">
      <div class="text-center">
        <h1 class="display-4">About iNotebook</h1>
        <p class="lead">
          Innovative Note-Taking Solution Powered by Modern Technologies
        </p>
      </div>
      <div class="mt-4">
        <p>
          iNotebook is designed to help you manage your notes efficiently and
          effortlessly. Our platform leverages cutting-edge technologies to
          provide a seamless user experience, ensuring that your notes are
          always accessible and securely stored.
        </p>
      </div>
      <div class="mt-5">
        <h3>Technologies We Use:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h5>React.js</h5>
            <p>
              Our frontend is built using React.js, providing a dynamic and
              responsive user interface. React.js allows us to create
              interactive and engaging experiences, making note-taking easy and
              enjoyable.
            </p>
          </li>
          <li class="list-group-item">
            <h5>Node.js</h5>
            <p>
              The backend of iNotebook is powered by Node.js, ensuring fast and
              scalable performance. Node.js enables us to handle numerous
              requests efficiently, providing a smooth and responsive experience
              for our users.
            </p>
          </li>
          <li class="list-group-item">
            <h5>MongoDB</h5>
            <p>
              We use MongoDB as our database solution to store your notes
              securely. MongoDB's flexibility and scalability allow us to manage
              large volumes of data effectively, ensuring that your notes are
              always safe and easily retrievable.
            </p>
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <h3>Our Mission</h3>
        <p>
          At iNotebook, our mission is to provide a reliable and user-friendly
          platform for managing your notes. We aim to make your note-taking
          experience as efficient and enjoyable as possible, helping you stay
          organized and productive.
        </p>
      </div>
      <div class="mt-5 text-center">
        <h3>Join Us on This Journey</h3>
        <p>
          Whether you're a student, professional, or someone who loves to stay
          organized, iNotebook is the perfect tool for you. Sign up today and
          start experiencing the difference.
        </p>
        <Link to="/" class="btn btn-primary btn-lg mx-2">
          Welcome
        </Link>
        
      </div>
    </div>
  );
};

export default About;
