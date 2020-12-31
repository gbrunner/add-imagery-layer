require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/ImageryLayer"
      ], function (Map, MapView, ImageryLayer) {
        /********************
         * Create image layer
         ********************/

   /*     var layer = new ImageryLayer({
          url:
            "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
          format: "jpgpng" // server exports in either jpg or png format
        }); */

          var layer = new ImageryLayer({
          url:
            "https://landscape4.arcgis.com/arcgis/rest/services/USA_Forest_Type/ImageServer",
          format: "jpgpng" // server exports in either jpg or png format
        });
  
        /**************************
         * Add image layer to map
         *************************/

        var map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-100, 40],
          zoom: 4
        });
      });
