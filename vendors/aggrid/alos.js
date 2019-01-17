var columnDefs = [
  { field: "expectedalos", width: 90,filter: 'agTextColumnFilter'},
  { field: "actualalos", width: 120}
 ];

var gridOptions = {
  columnDefs: columnDefs,
  sideBar: {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
      {
        id: 'customStats',
        labelDefault: 'Custom Stats',
        labelKey: 'customStats',
        iconKey: 'custom-stats',
        toolPanel: 'customStatsToolPanel',
      }
    ],
    defaultToolPanel: 'customStats'
  },
  components: {
    customStatsToolPanel: CustomStatsToolPanel
  },
  enableFilter: true
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  // do http request to get our sample data - not using any framework to keep the example self contained.
  // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
  var httpRequest = new XMLHttpRequest();
 // const path = 'C:\\Users\\manohar\\Documents\\hospital-28-09-2018\\hospital-29-09-2018\\production\\alos.json';
  //const u = new URL(`file:///${path}`).href;
  
  httpRequest.open('GET', 'http://localhost/vendors/aggrid/alos.json');
 // httpRequest.get("../vendors/aggrid/alos.json");
  httpRequest.send();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      var httpResult = JSON.parse(httpRequest.responseText);
      gridOptions.api.setRowData(httpResult);
    }
  };
  

});