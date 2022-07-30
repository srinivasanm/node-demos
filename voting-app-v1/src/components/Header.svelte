<script>
	import {
		user,
		votesRegistered,
		userLoginIn,
		adminLogin,
		rollNo,
		post,
		adminCode,
		adminAuth,
	} from "../store";

	import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
	import Button from "@smui/button";
	import LogIn from "./LogIn.svelte";
	import Posts from "./Posts.svelte";
	import Admin from "./Admin.svelte";
	import {logout} from "../methods";

</script>

<div class="top-app-bar-container">
	<TopAppBar variant="static">
		<Row>
			<Section>
				<Title>Voting App</Title>
			</Section>
			{#if $user}
				<Section>
					<Title>Welcome</Title>
					<Title style="font-weight: bold; font-style: italic;">
						{$user}
					</Title>
				</Section>
			{/if}
			<Section>
				<Title>Votes Registered {$votesRegistered}</Title>
			</Section>

			<Section>
				<Button on:click={() => logout()}>Logout</Button>
			</Section>
		</Row>
	</TopAppBar>
</div>
{#if $adminLogin}
	<Admin />
{:else if !$userLoginIn}
	<LogIn />
{:else}
	<Posts />
{/if}
