<script>
	// async function postData(url = "", data = {}) {
	// const response = await fetch(url, {
	// 	method: "POST",
	// 	mode: "cors",
	// 	cache: "no-cache",
	// 	credentials: "same-origin",
	// 	headers: {
	// 	"Content-Type": "application/json",
	// 	},
	// 	redirect: "follow",
	// 	referrerPolicy: "no-referrer",
	// 	body: JSON.stringify(data),
	// });
	// return response.json();
	// }

	// postData("http://API", { param1: 1, param2: 2 }).then((data) => {
	// 	console.log(data);
	// });
</script>

<form class="mt-auto mb-0">
    <h1 class="mb-4 text-5xl font-extrabold text-gray-900">S'inscrire</h1>
    <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-2">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                    <div class="mt-2">
                        <input type="text" name="last-name" id="last-name" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                    <div class="mt-2">
                        <input type="password" name="password" id="password" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-2 sm:col-start-1">
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Pays</label>
                    <div class="mt-2">
                        <input type="text" disabled value="France" name="country" id="country" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Adresse</label>
                    <div class="mt-2">
                        <input type="text" name="address" id="address" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-2 sm:col-start-1">
                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ville</label>
                    <div class="mt-2">
                        <input type="text" name="city" id="city" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="zip-code" class="block text-sm font-medium leading-6 text-gray-900">Code Postal</label>
                    <div class="mt-2">
                        <input type="number" name="zip-code" id="zip-code" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-start-1 sm:col-span-2">
                    <label for="card-name" class="block text-sm font-medium leading-6 text-gray-900">Nom sur la carte</label>
                    <div class="mt-2">
                        <input type="text" name="card-name" id="card-name" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="card-number" class="block text-sm font-medium leading-6 text-gray-900">Numéro de carte</label>
                    <div class="mt-2">
                        <input type="text" name="card-number" id="card-number" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-start-3 sm:col-span-1">
                    <label for="card-expiration" class="block text-sm font-medium leading-6 text-gray-900">Date d'expiration</label>
                    <div class="mt-2">
                        <input type="text" name="card-expiration" id="card-expiration" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-1">
                    <label for="card-cvv" class="block text-sm font-medium leading-6 text-gray-900">CVV</label>
                    <div class="mt-2">
                        <input type="number" name="card-cvv" id="card-cvv" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Valider</button>
        </div>
</form>