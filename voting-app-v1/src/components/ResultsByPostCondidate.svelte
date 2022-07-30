


<script>
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
    import Card, { Content } from "@smui/card";
    import TopAppBar, { Title, Section } from "@smui/top-app-bar";

    export let forPost;
    export let votesByCan;
    export let winner;
</script>

<Card style="width: 350px; margin: 1em auto;background:#e6e6e6;">
    <h2 class="mdc-typography--headline4" style="margin: 0;text-align: center;">
        {forPost.name}
    </h2>

    <DataTable style="width: 100%;">
        <Head>
            <Row>
                <Cell style="font-weight:bold; text-align: center;">
                    Candidate
                </Cell>
                <Cell style="font-weight:bold; text-align: center;">
                    Votes Received
                </Cell>
            </Row>
        </Head>
        <Body>
            {#each votesByCan as cand}
                <Row>
                    <Cell style=" text-align: center;">{cand.candidate}</Cell>
                    <Cell style=" text-align: center;">{cand.votes}</Cell>
                </Row>
            {/each}
        </Body>
    </DataTable>
    <h2 class="mdc-typography--headline4" style="text-align: center;font-weight:bold;">
        {winner.candidate}
    </h2>
</Card>
