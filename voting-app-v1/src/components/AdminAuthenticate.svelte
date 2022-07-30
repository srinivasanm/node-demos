<script lang="ts">
    import Button from "@smui/button";
    import Textfield from "@smui/textfield";
    import { adminCode, adminLogin, ADMIN_CODE } from "../store";
    import Counting from "./Counting.svelte";

    import IconButton from "@smui/icon-button";

    let errors = [];

    function validateAdmin() {
        if (ADMIN_CODE === $adminCode) {
            adminLogin.update((v) => true);
            errors = [];
        } else {
            adminLogin.update((v) => false);
            errors = ["Invalid Admin Code,please enter valid one."];
            $adminCode = "";
        }
    }
</script>

<style>
    .errors {
        list-style-type: none;
        padding: 10px;
        margin: 0;
        border: 2px solid #be6283;
        color: #be6283;
        background: rgba(190, 98, 131, 0.3);
    }
</style>

<p class="mdc-typography--body1">Enter your Admin Code</p>
<Textfield label="Admin Code" bind:value={$adminCode} type="password" />
<Button on:click={() => validateAdmin()}>Submit</Button>

{#if $adminLogin}
    <Counting />
{/if}

{#if Object.keys(errors).length > 0}
    <ul class="errors">
        {#each Object.keys(errors) as field}
            <li>{errors[field]}</li>
        {/each}
    </ul>
{/if}
