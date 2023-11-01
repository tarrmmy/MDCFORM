import React from 'react'

const Test = () => {
  return (
    <div>
        <div class="mb-6">
        {/* <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label> */}
        <input type="text" id="username-success" class="bg-green-50 border border-black  text-sm rounded-lg block w-full p-2.5" placeholder="Bonnie Green" />
        <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p>
        </div>
        <div>
        <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your name</label>
        <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Bonnie Green" />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p>
        </div>
    </div>
  )
}

export default Test