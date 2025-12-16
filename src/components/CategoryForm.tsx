import type { Category } from "./CategoryTree.tsx";
import {useForm} from 'react-hook-form'

interface Props {
  selected: Category | null;
}

export const CategoryForm  = () => {

  const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode: 'onBlur'})
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }
  console.log('render')

  return (
    <div>
      <h1>React-Hook-Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input {...register('firstName',
            {required: 'Field have to filled',
            minLength: {value: 4, message: 'at least 4 characters'}
            })}/>
        </label>

        <label>
          Last Name
          <input {...register('lastName',
            {required: 'Field have to filled',
              minLength: {value: 5, message: 'at least 5 characters'}
            })}/>
        </label>

        <div>{
          errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>

        <input type={'submit'} disabled={!isValid}/>

      </form>
    </div>
  )
};
 