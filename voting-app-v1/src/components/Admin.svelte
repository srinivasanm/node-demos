<script>
    import Counting from "./Counting.svelte";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Button from "@smui/button";
    import { Label } from "@smui/common";

    let startCounting = false;
    
</script>

<LayoutGrid>
    <Cell>
        <Button
            on:click={() => startCounting=true}
            target="_blank"
            style="text-decoration: none;">
            <Label>Count</Label>
        </Button>
    </Cell>
</LayoutGrid>

{#if startCounting}
    <Counting />
{/if}
