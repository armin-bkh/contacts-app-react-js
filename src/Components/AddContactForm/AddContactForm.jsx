import { useState } from "react";

const AddContactForm = ({ onSubmit }) => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
    })
    
    const changeHandler = (e) =>{
        setFormValue({
            ...formValue,
            [e.taget.name]: e.target.value,
        })
    }

  return (
    <form method="post" onSubmit={()=> onSubmit(formValue)} >
      <fieldset>
        <label htmlFor="name">name</label>
        <input type="text" placeholder="name" id="name" name="name" onChange={changeHandler} />
      </fieldset>
      <fieldset>
        <label htmlFor="email">name</label>
        <input type="email" placeholder="email" id="email" name="email" onChange={changeHandler} />
      </fieldset>
      <button>add</button>
    </form>
  );
};

export default AddContactForm;
