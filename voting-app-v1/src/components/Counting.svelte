<script>
    import LayoutGrid, { Cell } from "@smui/layout-grid";

    import { votesByPostNCand, userVoteDetails } from "../store";
    import ResultsByPost from "./ResultsByPost.svelte";
    import ResultsByPostCondidate from "./ResultsByPostCondidate.svelte";

    let voteDetails = $userVoteDetails;
    console.log("Vote details \n", voteDetails);

    // collect all user votes for post and candidates
    let votesByPost = [];
    voteDetails.forEach((element, index, array) => {
        votesByPost = votesByPost.concat(element.votedPost);
    });
    // compute votes by candidates for post
    let voteCountByPostNCand = votesByPost.reduce((result, candidateVote) => {
        if (candidateVote) {
            let p = result.find((v) => v.post.id == candidateVote.post.id);
            if (p) {
                let c = p.votesByCan.find(
                    (v) => v.candidate == candidateVote.candidate
                );
                if (c) {
                    c.votes = c.votes + 1;
                } else {
                    p.votesByCan.push({
                        candidate: candidateVote.candidate,
                        votes: 1,
                    });
                }
            } else {
                result.push({
                    post: candidateVote.post,
                    votesByCan: [
                        { candidate: candidateVote.candidate, votes: 1 },
                    ],
                });
            }
        }
        return result;
    }, []);

    // add winners for post
    voteCountByPostNCand.forEach((post__, index, array) => {
        let postWinner = post__.votesByCan.reduce((winnerCan, current) => {
            return winnerCan.votes > current.votes ? winnerCan : current;
        });
        post__.winner = postWinner;
    });

    $votesByPostNCand = [...voteCountByPostNCand];

    console.log("Votes By Post" + JSON.stringify($votesByPostNCand));
</script>

<h1>Counting done!!!</h1>

<LayoutGrid>
    <Cell>
        <ResultsByPost />
    </Cell>
</LayoutGrid>

<LayoutGrid>
    {#each $votesByPostNCand as { post, winner, votesByCan }}
        <Cell>
            <ResultsByPostCondidate forPost={post} {votesByCan} {winner} />
        </Cell>
    {/each}
</LayoutGrid>
