import {Button} from 'flowbite-react';
// import { FloatingLabel } from 'flowbite-react';
// import LinkComponent from ''
// import './App.css';

function App() {
    const handleRegister = (e) => {
        e.preventDefault()
        const success = document.getElementById("success_alert")
        const button = document.getElementById("submit_button")
        const error = document.getElementById("error_alert")
        const payload = {
            firstName: document.getElementById("first_name").value,
            lastName: document.getElementById("last_name").value,
            phoneNumber: document.getElementById("last_name").value,
            branchId: document.getElementById("branch_id").value,
            schoolName: document.getElementById("school_name").value,
            class: document.getElementById("class").value,
            gender: document.getElementById("gender").value,
            // paymentMethod: document.getElementById("payment_method").value,
            category: document.getElementById("category").value,
            // stateOfOrigin: document.getElementById("state_of_origin").value,
            email: document.getElementById("email").value,
        }

        try{
            button.innerHTML = "Loading..."
            fetch("http://api.theacademy.com.ng/camp/participant/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            }).then(() => {success.style.display = "block"})
        }catch(err){
            error.style.display = "block"
            error.innerHTML = err?.message || "Something went wrong!"
        }
        button.innerHTML = "Submit"
    }


    // Branch
    try{
        fetch("api.theacademy.com.ng/generic/branch").then((data) => data.json()).then(({data}) => {
            console.log(data)
            data?.map((branch) => {
                const option = document.createElement("option")
                option.value = branch?.id
                option.innerHTML = branch?.name
                document.getElementById("branch_id").appendChild(option)
            })
        })
    }catch(err){
        console.log(err)
    }
  return (
    <div className="App items-center">
        {/* <h1 className='text-primary'>Hello</h1> */}
        <div className='py-20'>
            <form
                onSubmit={handleRegister}
                className="flex max-w-md border mx-auto rounded-md flex-col p-10 gap-4">
                <div className="relative mb-2">
                    <input type="text" id="first_name" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">First Name</label>
                </div>
                <div className="relative mb-2">
                    <input type="text" id="last_name" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Last Name</label>
                </div>
                <div className="relative mb-2">
                    <input type="text" id="email" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Email</label>
                </div>
                <div className="relative mb-2">
                    <input type="text" id="phone_number" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Phone Number (Whatsapp)</label>
                </div>
                <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Age Range</option>
                    <option>10 and below</option>
                    <option>10 - 15</option>
                    <option>16 - 20</option>
                    <option>21 - 25</option>
                    <option>25 - 30</option>
                    <option>31 and above</option>
                </select>
                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Category</option>
                    <option >Primary school student</option>
                    <option>Junior secondary school student</option>
                    <option>Secondary school leaver</option>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Adult</option>
                </select>
                <div className="relative mb-2">
                    <input type="text" id="school" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">School</label>
                </div>
                <select id="branch_id" className="bg-gray-50 border border-gray-300 text-gray-900 mb-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>What ta'aleem branch do you belong to?</option>
                    <option value=""></option>
                </select>
                <div className="relative">
                    <input type="text" id="" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">If None of the Above, Kindly state your location / area</label>
                </div>
                <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>How did you hear about MDC 2023?</option>
                    <option>Social Media</option>
                    <option>Website</option>
                    <option>Referral</option>
                    <option>Others</option>
                </select>
                <label className="block  text-sm font-medium text-gray-900 dark:text-white">Upload your receipt</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file"  />

                <Button type="submit" id="submit_button">
                    Submit
                </Button>
            </form>
        </div>
    </div>
  );
}

export default App;
