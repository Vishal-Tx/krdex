import React, {  useState } from "react";
import { toast } from "react-toastify";
import "./Form.css";

const Form = () => {
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form1Value, setForm1Value] = useState({
    InvoiceValue: "",
    Tenure: "",
    Industry:"",
});
  const [form2Value, setForm2Value] = useState({
    IndustryName:"",
    Name:"",
    Email:"",
    PhoneNumber:""
});



  const handleSubmitForm1 = (event) => {
    event.preventDefault();
    setForm1(false);
    setForm2(true);
  };

  const handlePrevClick = () => {
    setForm1(true);
    setForm2(false);
  };

  const handleForm1Change=(event)=>{
    const { name, value } = event.target;

    setForm1Value(prevValue=>{
      return {
        ...prevValue,
        [name]: value,
      };
    })
  }
  const handleForm2Change=(event)=>{
    const { name, value } = event.target;

    setForm2Value(prevValue=>{
      return {
        ...prevValue,
        [name]: value,
      };
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    toast.success("Submitted Successfully", {
      progressClassName:"progress",

    })

  }
  return (
    <div className="formBox">
      {form1 && (<form onSubmit={handleSubmitForm1}>
        <div className="formStep1">
          <p className="form1Heading">Lorem Ipsum is simply dummy</p>
          <p className="form1text">
            text of the printing and typesetting industry.
          </p>
          <div className="form1Box">
            <div className="form1Select">
              <select name="Industry" id="Industry"  value={form1Value.Industry || 'industryName'} onChange={handleForm1Change}>
                <option value="industryName" disabled >
                  Industry Name
                </option>
                <option value="industry1" >Industry 1</option>
                <option value="industry2" >Industry 2</option>
                <option value="industry3" >Industry 3</option>
                <option value="industry4" >Industry 4</option>
              </select>
            </div>

            <div className="form1Inputs">
              <input name="InvoiceValue" value={form1Value.InvoiceValue} onChange={handleForm1Change} placeholder="Invoice Value" required></input>
              <input name="Tenure" value={form1Value.Tenure} onChange={handleForm1Change} placeholder="Tenure" required></input>
            </div>
          </div>
          <button className="formNext" type="submit">
            Next &rarr;
          </button>
        </div></form>
      )}

      {form2 && (<form onSubmit={handleSubmit}>
        <div className="formStep2">
          <img className="form2Img" src="/assets/success.jpg" alt="..." />
          <div className="form2Inputs">
            <input
              name="IndustryName" value={form2Value.IndustryName} onChange={handleForm2Change} className="form2Input"
              placeholder="Name of the Industry" required
            />
            <input name="Name" value={form2Value.Name}onChange={handleForm2Change}
              className="form2Input"
              placeholder="Name of the Individual" required
            />
            <input name="Email" value={form2Value.Email} onChange={handleForm2Change} className="form2Input" placeholder="Email" required />
            <input name="PhoneNumber" type="tel" value={form2Value.PhoneNumber} onChange={handleForm2Change} className="form2Input" placeholder="Phone number" required />
          </div>
          <button type="button" className="formPrev" onClick={handlePrevClick}>
            &lsaquo; Previous
          </button>
          <button type="submit" className="formSubmit" >
            Submit &rarr;
          </button>
        </div></form>
      )}
    </div>
  );
};

export default Form;
