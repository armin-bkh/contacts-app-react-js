const AddContactInput = ({  lbl, ...rest }) => {
    return ( 
        <fieldset className={`flex flex-col mb-5 font-bold`}>
        <label className={`mb-1 capitalize text-yellow-400`} htmlFor={lbl}>
          {lbl}
        </label>
        <input
          className={`rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 border
           border-gray-500 outline-none px-3 py-2 focus:border-yellow-400`}
          {...rest}
        />
      </fieldset>
     );
}
 
export default AddContactInput;