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
          <input {...register('firstName')}/>
        </label>
        <input type={'submit'}/>
      </form>
    </div>
  )
};
