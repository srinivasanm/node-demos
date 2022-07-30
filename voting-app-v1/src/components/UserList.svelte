<script>
    import {users} from '../store'
</script>
{#each $users as {name,voted,count}}
<h1>{name} {voted} {count}</h1>
{/each}