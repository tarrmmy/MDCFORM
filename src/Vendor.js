import { useState } from "react";
import Btn from "./components/Btn";
import axios from "axios";
import { notification } from "antd";

function Vendor() {
  // Error input
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState(false);
  console.log(loading);

  // API
  const [payload, setPayload] = useState({
    vendorName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    items: "",
    requirements: "",
    receipt: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    // const success = document.getElementById("success_alert");
    // const error = document.getElementById("error_alert");
    console.log(payload);

    const formData = new FormData();
    formData.append("firstName", payload.firstName);
    formData.append("lastName", payload.lastName);
    formData.append("vendorName", payload.vendorName);
    formData.append("email", payload.email);
    formData.append("phoneNumber", payload.phoneNumber);
    formData.append("items", payload.items);
    formData.append("requirements", payload.requirements);
    formData.append("receipt", payload.receipt);

    setLoading(true);
    await axios
      .post("https://academy-api-sui8.onrender.com/api/v1/camp/vendor/register", formData, {
        // method: "POST",

        headers: {
          //   "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
        },
      })
      .then((response) => response)
      .then(({ data }) => {
        setMsg(data.message);
        setLoading(false);
        notification.success({ message: data.message });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        notification.error({ message: error.response.data.message });
      });
    setLoading(false);
  };

  return (
    <div className="App items-center">
      <div className="py-20">
        <h2 className="text-center mb-4 text-xl font-bold">
          VENDOR REGISTRATION
        </h2>
        <h3 className="text-center">
          <span className="font-bold">0530449457</span> | GT Bank
        </h3>
        <h3 className="text-center">THE ACADEMY/PROGRAMMES </h3>
        <h3 className="text-center font-bold">OR</h3>
        <h3 className="text-center">
          <span className="font-bold">1002983739</span> | LOTUS Bank
        </h3>
        <h3 className="text-center">THE ACADEMY PROGRAMS</h3>
        <p className="text-center mb-3">(Make sure you keep the receipt.)</p>
        <form
          onSubmit={handleRegister}
          className="flex max-w-lg border mx-auto rounded-md flex-col p-10 gap-4"
        >
          <div className="relative flex gap-10 mb-1">
            <div className="relative mb-1">
              <input
                required
                onChange={(e) =>
                  setPayload({ ...payload, firstName: e.target.value })
                }
                type="text"
                id="firstName"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                First Name
              </label>
            </div>

            <div className="relative mb-2">
              <input
                required
                onChange={(e) =>
                  setPayload({ ...payload, lastName: e.target.value })
                }
                type="text"
                id="lastName"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                Last Name
              </label>
            </div>
          </div>

          <div className="relative mb-2">
            <input
              required
              onChange={(e) =>
                setPayload({ ...payload, email: e.target.value })
              }
              type="email"
              id="email"
              className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
              Email
            </label>
          </div>
          <div className="relative mb-2">
            <input
              required
              onChange={(e) =>
                setPayload({ ...payload, phoneNumber: e.target.value })
              }
              type="number"
              id="phone"
              className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
              Phone Number
            </label>
          </div>
          <div className="relative mb-2">
            <input
              required
              onChange={(e) =>
                setPayload({ ...payload, vendorName: e.target.value })
              }
              type="text"
              id="business"
              className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
              Name of Business
            </label>
          </div>
          <div className="relative mb-2">
            <input
              required
              onChange={(e) =>
                setPayload({ ...payload, items: e.target.value })
              }
              type="text"
              id="items"
              className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
              Items to be sold
            </label>
          </div>

          <textarea
            required
            onChange={(e) =>
              setPayload({ ...payload, requirements: e.target.value })
            }
            id="address"
            rows="2"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What other requirements would you need (other than a table and a chair)?"
          ></textarea>

          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Upload your receipt
          </label>
          <input
            onChange={(e) =>
              setPayload({ ...payload, receipt: e.target.files.item(0) })
            }
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
          />

          <Btn
            class="w-full"
            type="submit"
            id="submit_button"
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
}

export default Vendor;
