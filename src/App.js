import {Button} from 'flowbite-react';
import { useState } from 'react';
// import Test from './Test';
// import { FloatingLabel } from 'flowbite-react';
// import LinkComponent from ''
// import './App.css';

function App() {

    // Error input
    const [error, setError] = useState(false)

    // API
    const [payload, setPayload] = useState({
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber: '',
        gender : '',
        paymentMethod : '',
        ageRange : '',
        category : '',
        schoolName : '',
        branchId : '',
        howDidYouHear : '',
        address : '',
        state : '',
    })

    const handleRegister = (e) => {
        e.preventDefault()
        const success = document.getElementById("success_alert")
        const button = document.getElementById("submit_button")
        const error = document.getElementById("error_alert")
        console.log(payload)
       

        if(payload.length==0) {
            setError(true)
        }

        try{
            button.innerHTML = "Loading..."
            fetch("https://api.theacademy.com.ng/camp/participant/auth/register", {
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
        button.innerHTML = "submit_button"
    }
    

    // Branch
    try{
        fetch("https://api.theacademy.com.ng/generic/branch").then((data) => data.json()).then(({data}) => {
            // console.log(data)
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
        <div className='py-20'>
            <h2 className='text-center mb-4'>Register for the MDC 2023 Major Outing</h2>
            <form
                onSubmit={handleRegister}
                className="flex max-w-md border mx-auto rounded-md flex-col p-10 gap-4">
                <div className="relative mb-1">
                    <input onChange={(e) => setPayload({...payload, firstName: e.target.value})} type="text"  className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">First Name</label>
                </div>
                {error? <p className='text-red-600'>Please fill this field</p> : ''}
                <div className="relative mb-2">
                    <input onChange={(e) => setPayload({...payload, lastName: e.target.value})} type="text" id="last_name" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Last Name</label>
                    {error? <p className='text-red-600'>Please fill this field</p> : ''}
                </div>
                <div className="relative mb-2">
                    <input onChange={(e) => setPayload({...payload, email: e.target.value})} type="email" id="email" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Email</label>
                    {error? <p className='text-red-600'>Please fill this field</p> : ''}    
                </div>
                <div className="relative mb-2">
                    <input onChange={(e) => setPayload({...payload, phoneNumber: e.target.value})} type="tel" id="phone_number" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Phone Number (Whatsapp)</label>
                    {error? <p className='text-red-600'>Please fill this field</p> : ''}
                </div>
                <select onChange={(e) => setPayload({...payload, gender: e.target.value})} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <select onChange={(e) => setPayload({...payload, paymentMethod: e.target.value})} id="payment_method" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Payment Method</option>
                    <option>Cash</option>
                    <option>Transfer</option>
                </select>
                <select onChange={(e) => setPayload({...payload, ageRange: e.target.value})} id="age_range" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Age Range</option>
                    <option>10 and below</option>
                    <option>10 - 15</option>
                    <option>16 - 20</option>
                    <option>21 - 25</option>
                    <option>25 - 30</option>
                    <option>31 and above</option>
                </select>
                <select onChange={(e) => setPayload({...payload, category: e.target.value})} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Category</option>
                    <option >Primary school student</option>
                    <option>Junior secondary school student</option>
                    <option>Secondary school leaver</option>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Adult</option>
                </select>
                <div className="relative mb-2">
                    <input onChange={(e) => setPayload({...payload, schoolName: e.target.value})} type="text" id="school_name" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">School</label>
                    {error? <p className='text-red-600'>Please fill this field</p> : ''}
                </div>
                <select onChange={(e) => setPayload({...payload, branchId: e.target.value})} id="branch_id" className="bg-gray-50 border border-gray-300 text-gray-900 mb-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>What ta'aleem branch do you belong to?</option>
                    <option value=""></option>
                </select>
                
                <textarea  onChange={(e) => setPayload({...payload, address: e.target.value})} id='address' rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="If None of the Above, Kindly state your location / area"></textarea>

                <div className="relative mb-2">
                    <input onChange={(e) => setPayload({...payload, state: e.target.value})} type="text" id="school_name" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="small_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">State</label>
                    {error? <p className='text-red-600'>Please fill this field</p> : ''}
                </div>
                
                <select  onChange={(e) => setPayload({...payload, howDidYouHear: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>How did you hear about MDC 2023?</option>
                    <option>Social Media</option>
                    <option>Website</option>
                    <option>Referral</option>
                    <option>Others</option>
                </select>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">Upload your receipt</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file"  />

                <Button type="submit" id="submit_button">
                    Submit
                </Button>
            </form>
        </div>
    </div>
    // <Test />
  );
}

export default App;
