const Order = () => {
  // Form submission handler placeholder
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission will go here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Form</h2>

      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" />
      </div>

      <div>
        <label htmlFor="address">Delivery Address</label>
        <input type="text" id="address" name="address" />
      </div>

      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" name="postalCode" />
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" />
      </div>

      <button type="submit">Submit Order</button>
    </form>
  );
};
