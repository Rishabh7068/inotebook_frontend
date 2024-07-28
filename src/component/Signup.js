import {React , useState , useContext} from "react";
import alertContext from "../context/alert/alertContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email ,setEmail] = useState("");
    const [pass ,setPass] = useState("");
    const [name ,setName] = useState("");

    const context = useContext(alertContext);
    const {showAlert} = context;
    const Navigate = useNavigate();


    const handleclick= async(e)=>{
        e.preventDefault();
        
        try {
            const response = await fetch(`${process.env.REACT_APP_server}/api/auth/signup`, {
                method:'POST',
                headers :{
                    'content-Type' : 'application/json'
                },
                body : JSON.stringify({name : name, email : email,password : pass})
        });
        const json = await response.json();
        if(json.authtoken){
            Navigate("/login");
            showAlert("Signup successfull","success");
        }else{
            showAlert(json.error,"danger");
        }

        
        } catch (error) {
            
            console.log(error);
        }  
  }
  
  
  return (
    <div className="container my-3">
        <h1>Create an account to use inotebook</h1>
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;