import type { Category } from "./CategoryTree.tsx";
import {useForm} from 'react-hook-form'

interface Props {
  selected: Category | null;
}

export const CategoryForm  = () => {

  const {register, formState: {errors}, handleSubmit} = useForm()
  const onSubmit = (data) => alert(JSON.stringify(data))

  return (
    <div>
      <h1>React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input {...register('firstName',
            {required: 'Field have to filled',
            minLength: {value: 5, message: 'at least 5 characters'}
            })}/>
        </label>
        <div>{
          errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
        <input type={'submit'}/>
      </form>
    </div>
  )
};
