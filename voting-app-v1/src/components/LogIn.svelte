<script>
    import {
        user,
        rollNo,
        userLoginIn,
        adminLogin,
        users,
        userVoteDetails,
        adminAuth,
showLogin,
    } from "../store";

    import Button from "@smui/button";
    import Textfield from "@smui/textfield";
    import AdminAuthenticate from "./AdminAuthenticate.svelte";

    

    function addUser(user) {
        if (user === "admin") {
            adminLogin.update((v) => false);
            userLoginIn.update((v) => false);
            adminAuth.update((v) => true);
            $showLogin = false;
        } else {
            let new_user = {
                name: user,
                rollNo: rollNo,
                voted: false,
                count: 0,
            };
            $users = [...$users, new_user];
            let voteDetails = { name: user, votedPost: [] };
            $userVoteDetails = [...$userVoteDetails, voteDetails];
            adminLogin.update((v) => false);
            userLoginIn.update((n) => true);
            adminAuth.update((v) => false);
        }
    }
</script>

{#if $showLogin}
    <p class="mdc-typography--body1">Enter your Name</p>
    <Textfield label="Name" bind:value={$user} />
    <p class="mdc-typography--body1">Enter your Roll No</p>
    <Textfield label="Roll No" bind:value={$rollNo} />
    <Button on:click={addUser($user)}>Submit</Button>
{/if}

{#if $adminAuth}
    <AdminAuthenticate />
{/if}
