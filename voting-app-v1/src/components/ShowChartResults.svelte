<script>
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import { posts } from "../store";
  import RenderChart from "./RenderChart.svelte";

  export let resultForPost;
</script>

<LayoutGrid>
  <Cell>
    <RenderChart resultFor={resultForPost} />
  </Cell>
</LayoutGrid>
