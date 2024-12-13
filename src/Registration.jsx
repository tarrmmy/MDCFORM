import { useEffect, useState } from "react";
import Btn from "./components/Btn";
import Alert from "./components/Alert";
import { notification } from "antd";
import axios from "axios";

function Registration() {
  // Error input
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);

  // API
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    paymentMethod: "",
    ageRange: "",
    category: "",
    class: "",
    schoolName: "",
    branchId: "",
    howDidYouHear: "",
    address: "",
    state: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    // const success = document.getElementById("success_alert")
    const button = document.getElementById("submit_button");
    const form = document.getElementById("regForm");
    // const error = document.getElementById("error_alert")

    try {
      button.innerHTML = "Loading...";
      setLoading(true);
      fetch(
        "https://academy-api-sui8.onrender.com/api/v1/camp/participant/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setMsg(data.message);
          form.reset();
          setLoading(false);
          notification.success({
            message: "Registration successful!!!",
            description:
              "Your registration has been submitted, kindly await a response from our team to confirm your payment!",
          });
          setPayload((prev) => {
            const resetPayload = Object.keys(prev).reduce((acc, key) => {
              acc[key] = "";
              return acc;
            }, {});
            return resetPayload;
          });
        })
        .catch((error) => {
          notification.error({
            message: ` ${error || "An error occurred!!!"}`,
            description: `Kindly try registering again!`,
          });
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      notification.error({
        message: ` ${error || "An error occurred!!!"}`,
        description: `Kindly try registering again!`,
      });
      setLoading(false);
    } finally {
      button.innerHTML = "Register";
    }
  };

  // Branch
  // useEffect(() => {
  //     axios .get("https://academy-api-sui8.onrender.com/api/v1/generic/branch").then(({data}) => {
  //         setBranches(data?.data)
  //         data?.data?.map((branch) => {
  //             const option = document.createElement("option")
  //             option.value = branch?.id
  //             option.innerHTML = branch?.name
  //             document.getElementById("branch_id").appendChild(option)
  //         })
  //     }).catch((err) => console.log(err))
  // }, [])

  useEffect(() => {
    axios
      .get("https://academy-api-sui8.onrender.com/api/v1/generic/branch")
      .then(({ data }) => {
        setBranches(data?.data || []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App items-center">
      <Alert />
      <div className="py-20">
        <h2 className="text-center mb-4 text-xl font-bold">
          Register for the MDC 2023 Major Outing
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
          id="regForm"
          className="flex max-w-lg border mx-auto rounded-md flex-col p-10 gap-4"
        >
          <div className="relative flex gap-4 mb-1 w-full">
            <div className="relative">
              <input
                required
                onChange={(e) =>
                  setPayload({ ...payload, firstName: e.target.value })
                }
                type="text"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                First Name
              </label>
            </div>

            <div className="relative ">
              <input
                required
                onChange={(e) =>
                  setPayload({ ...payload, lastName: e.target.value })
                }
                type="text"
                id="last_name"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                Last Name
              </label>
            </div>
          </div>

          <div className="relative mb-1">
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
          <div className="relative mb-1">
            <input
              required
              onChange={(e) =>
                setPayload({ ...payload, phoneNumber: e.target.value })
              }
              type="tel"
              id="phone_number"
              className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
              Phone Number{" "}
            </label>
          </div>
          <div className="relative flex gap-4 mb-1">
            <div className="relative  w-1/2">
              <select
                required
                onChange={(e) =>
                  setPayload({ ...payload, gender: e.target.value })
                }
                id="gender"
                className="bg-gray-50 border border-gray-300   text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="relative  w-1/2">
              <select
                required
                onChange={(e) =>
                  setPayload({ ...payload, ageRange: e.target.value })
                }
                id="age_range"
                className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Age Range</option>
                <option>0 - 6</option>
                <option>7 - 12</option>
                <option>13 - 16</option>
                <option>17 - 21</option>
                <option>22 - 30</option>
                <option>31 and above</option>
              </select>
            </div>
          </div>

          <select
            required
            onChange={(e) => setPayload({ ...payload, class: e.target.value })}
            id="class"
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Education</option>
            <option>Kindergerten / Pre school</option>
            <option>Primary school</option>
            <option>Secondary School</option>
            <option>Higher Education / Undergraduate</option>
            <option>Informal Education / Skills Acquisition</option>
            <option>Graduate; MSc and Above</option>
          </select>
          <div className="relative mb-1">
            <input
              required
              onChange={(e) =>
                setPayload({ ...payload, schoolName: e.target.value })
              }
              type="text"
              id="school_name"
              className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
              Name of School
            </label>
          </div>

          <div className="relative flex gap-10 mb-1">
            <div className="relative  w-1/2">
              <select
                required
                onChange={(e) =>
                  setPayload({ ...payload, state: e.target.value })
                }
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">State</option>
                <option>Abia</option>
                <option>Abuja</option>
                <option>Adamawa</option>
                <option>Akwa Ibom</option>
                <option>Anambra</option>
                <option>Bauchi</option>
                <option>Bayelsa</option>
                <option>Benue</option>
                <option>Borno</option>
                <option>Cross River</option>
                <option>Delta</option>
                <option>Ebonyi</option>
                <option>Edo</option>
                <option>Ekiti</option>
                <option>Enugu</option>
                <option>Gombe</option>
                <option>Imo</option>
                <option>Jigawa</option>
                <option>Kaduna</option>
                <option>Kano</option>
                <option>Katsina</option>
                <option>Kebbi</option>
                <option>Kogi</option>
                <option>Kwara</option>
                <option>Lagos</option>
                <option>Nasarawa</option>
                <option>Niger</option>
                <option>Ogun</option>
                <option>Ondo</option>
                <option>Osun</option>
                <option>Oyo</option>
                <option>Plateau</option>
                <option>Rivers</option>
                <option>Sokoto</option>
                <option>Taraba</option>
                <option>Yobe</option>
                <option>Zamfara</option>
              </select>
            </div>
            <div className="relative  w-1/2">
              <select
                required
                onChange={(e) =>
                  setPayload({ ...payload, category: e.target.value })
                }
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Category</option>
                <option>Kiddies</option>
                <option>Teenager</option>
                <option>Undergraduate</option>
                <option>Adult</option>
              </select>
            </div>
          </div>

          <select
            required
            onChange={(e) =>
              setPayload({ ...payload, branchId: Number(e.target.value) })
            }
            id="branch_id"
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">What ta'aleem branch do you belong to?</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>

          {/* <textarea
            onChange={(e) =>
              setPayload({ ...payload, address: e.target.value })
            }
            id="address"
            rows="1"
            className="block p-2.5 w-full text-sm mb-1 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="If None of the Above, Kindly state your location / area"
          ></textarea> */}

          <div className="relative mb-1">
            <input
              required
              onChange={(e) =>
                setPayload({ ...payload, address: e.target.value })
              }
              type="text"
              id="school_name"
              className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
              Address
            </label>
          </div>

          <select
            onChange={(e) =>
              setPayload({ ...payload, howDidYouHear: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">How did you hear about MDC 2023?</option>
            <option>Social Media</option>
            <option>Website</option>
            <option>Referral</option>
            <option>Others</option>
          </select>
          <select
            required
            onChange={(e) =>
              setPayload({ ...payload, paymentMethod: e.target.value })
            }
            id="payment_method"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Payment Method</option>
            <option>Cash</option>
            <option>Transfer</option>
          </select>
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Upload your receipt
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            required={payload.paymentMethod === "Transfer"}
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

export default Registration;
