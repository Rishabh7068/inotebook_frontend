import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Welcome = () => {
    const Navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    Navigate("/login");
  };
  return (
    <div class="container my-5">
    <div class="text-center">
      <h1 class="display-4">Welcome to iNotebook!</h1>
      <p class="lead">Your Personal Note-Taking Companion</p>
    </div>
    <div class="mt-4">
      <p>At iNotebook, we understand the importance of capturing thoughts, ideas, and important information quickly and efficiently. That's why we've created an intuitive and user-friendly platform where you can seamlessly manage your notes anytime, anywhere.</p>
    </div>
    <div class="mt-5">
      <h3>Key Features:</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Secure Login and Signup: Your privacy is our priority. Easily create an account or log in to access your personalized note space.</li>
        <li class="list-group-item">Create and Manage Notes: Add, edit, and delete notes effortlessly. Organize your thoughts and ideas with just a few clicks.</li>
        <li class="list-group-item">User-Friendly Interface: Our clean and simple design ensures that you can focus on what matters most - your notes.</li>
        <li class="list-group-item">Stay Organized: Keep all your notes in one place, accessible from any device, whenever you need them.</li>
      </ul>
    </div>
    <div class="mt-5">
      <h3>Why Choose iNotebook?</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Accessibility: Access your notes from any device, be it your laptop, tablet, or smartphone.</li>
        <li class="list-group-item">Reliability: Trust that your notes are safely stored and easily retrievable whenever you need them.</li>
        <li class="list-group-item">Efficiency: Spend less time managing your notes and more time being productive.</li>
      </ul>
    </div>
    <div class="mt-5 text-center">
      <h3>Get Started Now!</h3>
      <p>Sign up today and experience the simplicity and convenience of iNotebook. Already have an account? Log in to access your notes and start organizing your thoughts.</p>
      <div className="container">
      {!localStorage.getItem("token") ? (
          <div className="container">
            <Link to="/signup" class="btn btn-primary btn-lg mx-2">Sign Up</Link>
            <Link to="/login" class="btn btn-secondary btn-lg mx-2">Log In</Link>
          </div>
        ) : (
          <div className="d-flex">
            <div className="container">
              <Link to="/login" class="btn btn-success btn-lg mx-2" onClick={handlelogout}>Logout</Link>
            </div> 
          </div>
        )}
      </div>
    </div>
    <div class="text-center mt-5">
      <p>Welcome to iNotebook - where your ideas come to life!</p>
    </div>
  </div>
  )
}

export default Welcome