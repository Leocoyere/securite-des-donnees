<script>
    export let product;
    export let addToCart;
    let quantity = 1;
  
    // Ajouter au panoer
    function handleAddToCart() {
      addToCart(product, quantity);
    }
  </script>
  <!-- Un article -->
  <div class="border p-4">
    <h2 class="text-xl font-bold">{product.name}</h2>
    <img src="{product.image}" alt="Super image de {product.name}">
    <p>{product.price} €</p>
    <input type="number" min="1" bind:value={quantity} class="border rounded p-1 w-16" />
    <button class="mt-2 bg-blue-500 text-white py-1 px-2 rounded" on:click={handleAddToCart}>Ajouter au panier</button>
  </div>
  