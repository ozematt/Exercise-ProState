export const SignUp = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input placeholder="Name" />
      </div>

      <div>
        <label>Email</label>
        <input placeholder="Email" />
      </div>

      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>

      <div>
        <label>Biography</label>
        <textarea placeholder="Tell us about yourself..." />
      </div>

      <div>
        <label>Job Role</label>
        <select>
          <option value="">Select...</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="product_manager">Product Manager</option>
        </select>
      </div>

      <div>
        Experience Level
        <label>
          <input type="radio" value="junior" />
          Junior
        </label>
        <label>
          <input type="radio" value="mid" />
          Mid-level
        </label>
        <label>
          <input type="radio" value="senior" />
          Senior
        </label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};
