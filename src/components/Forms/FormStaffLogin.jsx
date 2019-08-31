import React from 'react'
import useForm from 'react-hook-form';

export default function FormStaffLogin() {
    return (
        <div>


            return (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Work-Email" name="Work-Email" ref={register} />
                            <input type="text" placeholder="Password" name="Password"  type = "passsword" ref={register({ required: true })} />

                            <input type="submit" />
                        </form>
                    );
        </div>
    )
}


/*


import React from 'react';


export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Work-Email" name="Work-Email" ref={register} />
      <input type="text" placeholder="Password" name="Password" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}



*/