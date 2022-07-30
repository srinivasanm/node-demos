<script>
	import {
		category,
		post,
		posts,
		user,
		userLoginIn,
		userVoteDetails,
	} from "../store";
	import Candidates from "./Candidates.svelte";
	import Button from "@smui/button";
	import { Label } from "@smui/common";
	import { logout } from "../methods";

	let loadForPost = undefined;

	function updateCandidates(lp) {
		$post = lp;
		loadForPost = lp;
	}

	function completeVoting() {
		let voteDetails = $userVoteDetails;
		let userVotes = voteDetails.find((o) => o.name == $user);
		console.log("Register Votes ", userVotes);
		logout();
	}
</script>

{#if $userLoginIn}
	{#each posts as post_}
		<Button
			color="secondary"
			on:click={() => updateCandidates(post_)}
			variant="raised">
			<Label>{post_.name}</Label>
		</Button>
	{/each}
	<Button on:click={() => completeVoting()} variant="raised">
		<Label>Register Vote</Label>
	</Button>
{/if}

{#if loadForPost}
	<Candidates postSelected={loadForPost} />
{/if}
