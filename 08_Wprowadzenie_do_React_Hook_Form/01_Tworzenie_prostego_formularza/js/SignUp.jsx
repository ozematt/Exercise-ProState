import { useForm } from 'react-hook-form';

export const SignUp = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch('jobRole'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name')} placeholder="Name" />
      </div>

      <div>
        <label>Email</label>
        <input {...register('email')} placeholder="Email" />
      </div>

      <div>
        <label>Password</label>
        <input {...register('password')} type="password" placeholder="Password" />
      </div>

      <div>
        <label>Biography</label>
        <textarea {...register('biography')} placeholder="Tell us about yourself..." />
      </div>

      <div>
        <label>Job Role</label>
        <select {...register('jobRole')}>
          <option value="">Select...</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="product_manager">Product Manager</option>
        </select>
      </div>

      <div>
        Experience Level
        <label>
          <input {...register('experienceLevel')} type="radio" value="junior" />
          Junior
        </label>
        <label>
          <input {...register('experienceLevel')} type="radio" value="mid" />
          Mid-level
        </label>
        <label>
          <input {...register('experienceLevel')} type="radio" value="senior" />
          Senior
        </label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};
