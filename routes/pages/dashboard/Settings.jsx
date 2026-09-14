import React, { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const userId = "6aa105cf0243c173c6116eb1";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    deliveryAddress: "",  
    notifications: true,
    darkMode: false,
  });

  const [loading, setLoading] = useState(false);

  // Get settings from backend
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/settings/${userId}`
        );

        const settings = response.data.settings;

        setFormData({
          fullName: settings.fullName || "",
          email: settings.email || "",
          phone: settings.phone || "",
          deliveryAddress: settings.deliveryAddress || "",
          notifications: settings.notifications ?? true,
          darkMode: settings.darkMode ?? false,
        });
      } catch (error) {
        console.log("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Save settings
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await axios.put(
      `http://localhost:3000/api/settings/${userId}`,
      formData
    );

    // Update React state with database response
    setFormData({
      fullName: response.data.settings.fullName || "",
      email: response.data.settings.email || "",
      phone: response.data.settings.phone || "",
      deliveryAddress: response.data.settings.deliveryAddress || "",
      notifications: response.data.settings.notifications ?? true,
      darkMode: response.data.settings.darkMode ?? false,
    });

    alert("Settings saved successfully!");

  } catch (error) {
    console.error("Error updating settings:", error);

    alert(
      error.response?.data?.message ||
      "Failed to update settings"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className={`min-h-screen p-6 w-311 ${
        formData.darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          Settings
        </h1>

        <p className="text-gray-500 mb-6">
          Manage your Quick Delivery account and preferences.
        </p>

        {/* Profile */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 mb-5"
        >
          <h2 className="text-xl font-semibold mb-4">
            Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Delivery Address
              </label>

              <input
                type="text"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                placeholder="Enter delivery address"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow p-6 mb-5">

          <h2 className="text-xl font-semibold mb-4">
            Notifications
          </h2>

          <div className="flex items-center justify-between">

            <div>
              <p className="font-medium">
                Order Notifications
              </p>

              <p className="text-sm text-gray-500">
                Get updates about your orders and delivery.
              </p>
            </div>

            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="w-5 h-5"
            />

          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-xl shadow p-6 mb-5">

          <h2 className="text-xl font-semibold mb-4">
            Appearance
          </h2>

          <div className="flex items-center justify-between">

            <div>
              <p className="font-medium">
                Dark Mode
              </p>

              <p className="text-sm text-gray-500">
                Change the appearance of your delivery application.
              </p>
            </div>

            <input
              type="checkbox"
              name="darkMode"
              checked={formData.darkMode}
              onChange={handleChange}
              className="w-5 h-5"
            />

          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow p-6 mb-5">

          <h2 className="text-xl font-semibold mb-4">
            Security
          </h2>

          <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50">
            Change Password
          </button>

        </div>

        {/* Account */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Account
          </h2>

          <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
            Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Settings;
