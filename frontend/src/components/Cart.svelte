<script>
    export let cart;
  
  
    // Calcul du total du panier
    let adresse = 'future adresse via API woulah'
    let total = 0;
    // $: permet de rendre une viariable réactif
    $: {
        // Permet de faire le calcul en prennant juste les element du tableau qui nous intéresse
      total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  
    // Fonction pour afficher l'alerte avec le total au moment du paiement
    function goToPay() {
      alert(`Félicitations, vous avez payé : ${total} €, il sera livré à ${adresse}`);
    }
  </script>
  
  <div class="mt-4 border-t pt-4">
    <h2 class="text-2xl font-bold mb-4">Panier</h2>
    <!-- SI le panier est vide bah il est vide t con ou quoi -->
    {#if cart.length === 0}
      <p>Votre panier est vide.</p>
    <!-- Si le panier n'est pas vide bah il est pas vide tu réfléchis vraiment pas -->
    {:else}
      <ul>
        <!-- On boucle sur les éléments du panier donc sur item -->
        {#each cart as item (item.id)}
          <li>
            {item.name} x {item.quantity} - {item.price * item.quantity} €
          </li>
        {/each}
      </ul>
      <p class="font-bold mt-4">Total: {total} €</p>
      <button class="mt-2 bg-blue-500 text-white py-1 px-2 rounded" on:click={goToPay}>Payer</button>
    {/if}
  </div>
  