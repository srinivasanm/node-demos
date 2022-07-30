<script>
	export let postSelected;

	import {
		user,
		post,
		votesRegistered,
		userVoteDetails
	} from "../store";
	import { getCandidates } from "../methods";

	function recordVote(user, post, candidate) {
		
		console.log(
			"Vote Recorded!! for " +
				post +
				" -- " +
				candidate +
				" by " +
				user
		);

		let voteDetails = $userVoteDetails;
		
		let userVotes = voteDetails.find((o) => o.name == user);
		let vp = { post: post, candidate: candidate };
		let index = userVotes.votedPost.findIndex((o) => o.post.id == post.id);

		if (index != -1) {
			console.log("Vote for Post already registered by user");
		} else {
			userVotes.votedPost.push(vp);
			votesRegistered.update((n) => n + 1);
		}
	}

	import Button from "@smui/button";
	import Card, { Content, Actions } from "@smui/card";
	import { Label } from "@smui/common";
	import LayoutGrid, { Cell } from "@smui/layout-grid";
	import { get } from "svelte/store";
</script>

{#if postSelected}
<h1>Voting for {postSelected.name}</h1>
{/if}

<LayoutGrid fixedColumnWidth>
	{#each getCandidates(postSelected) as { id, name, img_src }, i}
		<Cell style="width: 260px;">
			<Card
				style="width: 240px; margin: 1em auto;background:#e6e6e6;align-content:center">
				<Content class="mdc-typography--body1">
					<h2 class="mdc-typography--headline6" style="margin: 0;">
						{name}
					</h2>
					<img
						src={img_src}
						alt="{id} photo"
						style="width: 200px;height: 200px;" />
				</Content>
				<Actions>
					<Button
						on:click={() => recordVote($user, $post, name)}
						target="_blank"
						style="text-decoration: none;">
						<Label>Vote</Label>
					</Button>
				</Actions>
			</Card>
		</Cell>
	{/each}
</LayoutGrid>
