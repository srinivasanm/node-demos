<script>
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
    import { votesByPostNCand } from "../store";
</script>

<DataTable style="width: 100%;">
    <Head>
        <Row>
            <Cell style="font-weight:bold; text-align: center;">Post</Cell>
            <Cell style="font-weight:bold; text-align: center;">Winner</Cell>
            <Cell style="font-weight:bold; text-align: center;">
                Votes Received
            </Cell>
        </Row>
    </Head>
    <Body>
        {#each $votesByPostNCand as { post, winner, votesByCan }}
            <Row>
                <Cell style=" text-align: center;">{post.name}</Cell>
                <Cell style=" text-align: center;">{winner.candidate}</Cell>
                <Cell style=" text-align: center;">{winner.votes}</Cell>
            </Row>
        {/each}
    </Body>
</DataTable>