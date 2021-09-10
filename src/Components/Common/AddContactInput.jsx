const AddContactInput = ({  lbl, ...rest }) => {
    return ( 
        <fieldset className={`flex flex-col mb-5 font-bold`}>
        <label className={`mb-1 capitalize`} htmlFor={lbl}>
          {lbl}
        </label>
        <input
          className={`rounded-md border border-gray-200 outline-none px-3 py-2 focus:border-blue-200`}
          {...rest}
        />
      </fieldset>
     );
}
 
export default AddContactInput;