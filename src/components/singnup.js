import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone:"",
    password: ""
   
  });
const navigate = useNavigate();
    const shoot = () => {
navigate("/page")
}
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}  className="w-[70%] mx-auto rounded-xl  " style={{boxShadow:"5px 5px  20px gray"}}>
      <div className="flex items-center ml-6 ">
      <h1 className="text-2xl font-bold ml-5">SIGN UP</h1>
      <div className="mb-4 mx-auto">
      <button class=" px-3 py-2  focus:outline-none  rounded-l-lg text-white mt-5" style={{backgroundColor:"rgba(99, 94, 163, 1)"}}>Job Speeker
    </button>
    <button class="px-3 py-2  focus:outline-none text-indigo-800 h-[40px]  rounded-r-lg  mt-5"  style={{border:"2px solid rgba(99, 94, 163, 1)"}} >Employer
    </button>
      </div>
      </div>
    <div className=" w-[80%]  mx-auto">
    <div>
     <label>
        Name*
        <br/>
        <input
          type="text"
          className="border rounded-lg h-[6vh] w-[100%] mx-auto"
          name="Name"
          value={formData.firstName}
          placeholder="   Enter Name"
          onChange={handleInputChange}
        />
      </label>
     </div>
   <div>
   <label >
   <br/>
        Email*
        <br/>
        <input
          type="email"
          className="border rounded-lg h-[6vh] w-[100%]"

          name="email"
          placeholder="   Enter Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
   </div>
    <div>
    <label>
    <br/>
        Phone no*
        <br/>

        <input
          className="border rounded-lg h-[6vh] w-[100%]"

          type="number"
          placeholder="   Enter Phone no"
          name="phone"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
    </div>
   <div>
   <label>
   <br/>
         Password*
        <br/>

        <input
          className="border  rounded-lg h-[6vh] w-[100%]"

          type="password"
          name="password"
          placeholder="   Enter Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </label>
   </div>
   <button class="px-3 py-2 focus:outline-none h-[7vh] w-[100%]  rounded-lg text-white mt-6" onClick={shoot} style={{backgroundColor:"rgba(99, 94, 163, 1)"}}>Register Now
    </button>
    <div className="flex ">
    <hr className="h-[2px] bg-gray-400 w-[34%] mt-[40px]"/><p className="mt-[25px] ml-3 text-gray-400">or singn up</p><hr className="h-[2px] bg-gray-400 w-[34%] mt-[40px] ml-3"/>
    </div>
    <div>
        <div></div>
        <div></div>
    </div>
    </div>
    </form>
  );
};

export default SignUpForm;