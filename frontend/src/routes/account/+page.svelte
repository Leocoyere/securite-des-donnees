<script>
    import { goto } from '$app/navigation';
    import Cookies from 'js-cookie';
    import { onMount } from 'svelte';

    let user = null;

    const fetchUser = async () => {
        const token = Cookies.get('token');
        if (!token) {
            goto('/');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            user = data.data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            goto('/');
        }
    };


    const deleteAccount = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            console.log('Compte et données supprimer avec succès');
            Cookies.remove('token');
            goto('/');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            goto('/');
        }

    }


    onMount(() => {
        fetchUser();
    });
</script>

{#if user}
    <div class="user-details">
        <h1>Informations du compte</h1>
        <p><strong>Prénom:</strong> {user.first_name}</p>
        <p><strong>Nom:</strong> {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Adresse:</strong> {user.adress}</p>
    </div>

    <button on:click={deleteAccount} class="">Supprimer mon compte</button>
{:else}
    <p>Chargement des informations...</p>
{/if}

<style>
    .user-details {
        max-width: 600px;
        margin: 0 auto;
        padding: 1rem;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .user-details h1 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .user-details p {
        margin-bottom: 0.5rem;
    }
</style>
