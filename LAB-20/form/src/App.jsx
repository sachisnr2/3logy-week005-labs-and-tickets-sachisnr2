import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // clear error when user types/fixes field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.role) {
      newErrors.role = "Please select a role";
    }

    if (!form.agreeToTerms) {
      newErrors.agreeToTerms = "You must accept terms";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitted(true);
  };

  // Reset form
  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      agreeToTerms: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Disable submit if terms not accepted
  const isDisabled = !form.agreeToTerms;

  if (isSubmitted) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>🎉 Registration Successful!</h2>

        <p><b>Name:</b> {form.name}</p>
        <p><b>Email:</b> {form.email}</p>
        <p><b>Role:</b> {form.role}</p>

        <button onClick={handleReset}>Register Another</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ border: errors.name ? "1px solid red" : "" }}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        {/* Email */}
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ border: errors.email ? "1px solid red" : "" }}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{ border: errors.password ? "1px solid red" : "" }}
        />
        <p style={{ color: "red" }}>{errors.password}</p>

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          style={{ border: errors.confirmPassword ? "1px solid red" : "" }}
        />
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>

        {/* Role */}
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{ border: errors.role ? "1px solid red" : "" }}
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
        </select>
        <p style={{ color: "red" }}>{errors.role}</p>

        {/* Terms */}
        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={form.agreeToTerms}
            onChange={handleChange}
          />
          I agree to terms
        </label>
        <p style={{ color: "red" }}>{errors.agreeToTerms}</p>

        {/* Submit */}
        <button type="submit" disabled={isDisabled}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;