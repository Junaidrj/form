import React, { useState } from "react";

export default function Contantus() {
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        phone:"",
        password: ""
       
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      };
  return (
   <>
   <form onSubmit={handleSubmit} className="w-[60%] mx-auto pt-4 mb-6" style={{boxShadow:"5px 5px  20px gray"}}>
      <div className="text-center text-3xl font-bold ">
      <h1 >Contant Us</h1> </div>
      <div className="mb-4 mx-auto">
     
      </div>
     
    <div className="  w-[80%]  mx-auto">
    <div>
     <label>
        Name*
        <br/>
        <input
          type="text"
          className="border rounded rounded-lg h-[6vh] w-[100%] mx-auto"
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
          className="border rounded rounded-lg h-[6vh] w-[100%]"

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
          className="border rounded rounded-lg h-[6vh] w-[100%]"

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
         Zip Code*
        <br/>

        <input
          className="border rounded rounded-lg h-[6vh] w-[100%]"

          type="password"
          name="password"
          placeholder="   Enter password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <br/>
        Country*
        <br/>
      <select id="country border-2 w-[30%]" name="country">
    <option>select country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    
</select>
      </label>
     
   </div>
   <button class="px-3 py-2 focus:outline-none h-[7vh] w-[100%] rounded rounded-lg text-white mt-10 mb-10" style={{backgroundColor:"rgba(99, 94, 163, 1)"}}>Seend Message
    </button>

    <div>
        <div></div>
        <div></div>
    </div>
    </div>
    </form>
   </>
  )
}
