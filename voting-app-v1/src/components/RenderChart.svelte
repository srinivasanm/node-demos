<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
    import { votesByPostNCand } from "../store";

    fcRoot(FusionCharts, Charts, FusionTheme);

    let resultForPost;

    let votesByPost_ = $votesByPostNCand
    votesByPost_.find(v=>v.post==resultForPost)
    let data = votesByPost_.votesByCan
    

    let dataSource = {
        "chart": {
          "caption": resultForPost,
          "showValues": "1",
          "showPercentInTooltip": "0",
          "enableMultiSlicing": "1",
          "theme": "fusion"
        },
        "data": data
      };
     
     let chartConfig = {
        type: 'pie2d',
        width: '600',
        height: '400',
        renderAt: 'chart-container{resultForPost}',
        dataSource:dataSource
      };
  </script>
  
<div id="chart-container{resultForPost}" style='height: 47.5%;'>
    <SvelteFC {...chartConfig} />
</div>
