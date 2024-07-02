<script>
	import { onMount } from 'svelte';
	import Product from '../components/Product.svelte';
	import Cart from '../components/Cart.svelte';
  
	let products = [];
	let cart = [];
  
	// Nos super capotes du future
	onMount(async () => {
	  products = [
		{ id: 1, name: 'Capote brice (5)', price: 10, image: 'https://www.lilicom.eu/cdn/shop/products/preservatif_humoristique_brice_de_nice_1080x.png?v=1655998487' },
		{ id: 2, name: 'Capote DarkVador (5)', price: 10, image: 'https://www.callvin.com/1346-medium_default/darkapote.jpg' },
		{ id: 3, name: 'Capote Magique	 (5)', price: 10, image: 'https://farfouil-en-fete.fr/cdn/shop/files/1695476303jpg_e1a1d3a9-4ecb-40b3-97ee-22c1308ff42f.jpg?v=1695988693' }
	  ];
	});
  
	// fonction permettant d'ajouter un produit et une quantité
	function addToCart(product, quantity) {
		// On recherche si l'item existe déja dans le panier
	  const item = cart.find(item => item.id === product.id);
	// Si l'item existe déjà, on incrémente la quantité choisie
	  if (item) {
		item.quantity += quantity;
		// Sinon, on ajoute un nouvel item au panier avec le produit et la quantité spécifiés
	  } else {
		cart = [...cart, { ...product, quantity }];
	  }
	}
  </script>
  
  <main class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-4">Boutique</h1>
	<div class="grid grid-cols-3 gap-4">
		<!-- On boucle sur nos capote définis -->
	  {#each products as product}
		<Product {product} addToCart={addToCart} />
	  {/each}
	</div>
	<!-- Affichage de notre panier -->
	<Cart {cart} />
  </main>
  
  <style>
	main {
	  padding: 20px;
	}
  </style>
  