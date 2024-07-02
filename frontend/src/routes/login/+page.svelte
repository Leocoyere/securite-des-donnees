<form class="mb-0 flex flex-col items-center">
    <h1 class="mb-4 text-5xl font-extrabold text-gray-900">Se connecter</h1>

    <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
                <label for="mail" class="block text-sm font-medium leading-6 text-gray-900">Mail</label>
                <div class="mt-2">
                    <input type="email" name="mail" id="mail" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-3 mt-4 sm:mt-0">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                <div class="mt-2">
                    <input type="password" name="password" id="password" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
        </div>
    </div>

    <div class="mt-6 flex items-center justify-center">
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Valider</button>
    </div>
</form>
