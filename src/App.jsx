import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Navbar from "./Components/Navbar"
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import Page4 from "./Pages/Page4"

function App() {

  const formik = useFormik({
    initialValues: {
        source: 'Mumbai',
        destination: 'Chennai',
        car: 'Hachback',
        carType: ['Hachback', 'Sedan', 'SUV'],
        travellers: 4,
        name: 'Jaskaran Singh',
        price: 0,
        phone: '8360573379',
        remarks: 'Call me immediately to finalize'
    },
    validationSchema: Yup.object({
      source: Yup.string()
      .max(20, "Max 20 characters OR less")
      .required("Source Location is required"),

      destination: Yup.string()
      .max(20, "Max 20 characters OR less")
      .required("Destination is required"),

      travellers: Yup.number().when( "car", {
        is: val => val === 'SUV',
        then: Yup.number().max(6, "Passengers cannot be more than 6"), 
        otherwise: Yup.number().max(4, "Passengers cannot be more than 4")
      })
      .min(1, "Minimum 1 Passenger is required")
      .required("Minimum 1 Passenger is required"),

      phone: Yup.number()
      .required("Phone Number is required"),

      name: Yup.string()
      .required("Name is required")

    }),
    onSubmit : (val) => {
      onNextStep();
    }
  });

  const [step, setStep] = useState(1);
  const onNextStep = () => setStep(prevStep => prevStep + 1);

  return (
    <div className="App">
      <Navbar steps={step}/>
      {step === 1 && <Page1 nextStep={onNextStep} userDetails={formik}/>}
      {step === 2 && <Page2 nextStep={onNextStep} userDetails={formik}/>}
      {step === 3 && <Page3 nextStep={onNextStep} userDetails={formik}/>}
      {step === 4 && <Page4 userDetails={formik}/>}
    </div>
  )
}

export default App
