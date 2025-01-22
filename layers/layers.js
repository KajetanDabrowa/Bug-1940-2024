var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_koryto_rzeki_historyczne_1940_1 = new ol.format.GeoJSON();
var features_koryto_rzeki_historyczne_1940_1 = format_koryto_rzeki_historyczne_1940_1.readFeatures(json_koryto_rzeki_historyczne_1940_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koryto_rzeki_historyczne_1940_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koryto_rzeki_historyczne_1940_1.addFeatures(features_koryto_rzeki_historyczne_1940_1);
var lyr_koryto_rzeki_historyczne_1940_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koryto_rzeki_historyczne_1940_1, 
                style: style_koryto_rzeki_historyczne_1940_1,
                popuplayertitle: 'koryto_rzeki_historyczne_1940',
                interactive: true,
                title: '<img src="styles/legend/koryto_rzeki_historyczne_1940_1.png" /> koryto_rzeki_historyczne_1940'
            });
var format_koryto_rzeki_vMap_2000_2 = new ol.format.GeoJSON();
var features_koryto_rzeki_vMap_2000_2 = format_koryto_rzeki_vMap_2000_2.readFeatures(json_koryto_rzeki_vMap_2000_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koryto_rzeki_vMap_2000_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koryto_rzeki_vMap_2000_2.addFeatures(features_koryto_rzeki_vMap_2000_2);
var lyr_koryto_rzeki_vMap_2000_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koryto_rzeki_vMap_2000_2, 
                style: style_koryto_rzeki_vMap_2000_2,
                popuplayertitle: 'koryto_rzeki_vMap_2000',
                interactive: true,
                title: '<img src="styles/legend/koryto_rzeki_vMap_2000_2.png" /> koryto_rzeki_vMap_2000'
            });
var format_koryto_rzeki_Sentinel_2024_3 = new ol.format.GeoJSON();
var features_koryto_rzeki_Sentinel_2024_3 = format_koryto_rzeki_Sentinel_2024_3.readFeatures(json_koryto_rzeki_Sentinel_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koryto_rzeki_Sentinel_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koryto_rzeki_Sentinel_2024_3.addFeatures(features_koryto_rzeki_Sentinel_2024_3);
var lyr_koryto_rzeki_Sentinel_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koryto_rzeki_Sentinel_2024_3, 
                style: style_koryto_rzeki_Sentinel_2024_3,
                popuplayertitle: 'koryto_rzeki_Sentinel_2024',
                interactive: true,
                title: '<img src="styles/legend/koryto_rzeki_Sentinel_2024_3.png" /> koryto_rzeki_Sentinel_2024'
            });
var format_koryto_rzeki_kiedykolwiek_4 = new ol.format.GeoJSON();
var features_koryto_rzeki_kiedykolwiek_4 = format_koryto_rzeki_kiedykolwiek_4.readFeatures(json_koryto_rzeki_kiedykolwiek_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koryto_rzeki_kiedykolwiek_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koryto_rzeki_kiedykolwiek_4.addFeatures(features_koryto_rzeki_kiedykolwiek_4);
var lyr_koryto_rzeki_kiedykolwiek_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koryto_rzeki_kiedykolwiek_4, 
                style: style_koryto_rzeki_kiedykolwiek_4,
                popuplayertitle: 'koryto_rzeki_kiedykolwiek',
                interactive: true,
                title: '<img src="styles/legend/koryto_rzeki_kiedykolwiek_4.png" /> koryto_rzeki_kiedykolwiek'
            });
var format_koryto_rzeki_zawsze_5 = new ol.format.GeoJSON();
var features_koryto_rzeki_zawsze_5 = format_koryto_rzeki_zawsze_5.readFeatures(json_koryto_rzeki_zawsze_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koryto_rzeki_zawsze_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koryto_rzeki_zawsze_5.addFeatures(features_koryto_rzeki_zawsze_5);
var lyr_koryto_rzeki_zawsze_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koryto_rzeki_zawsze_5, 
                style: style_koryto_rzeki_zawsze_5,
                popuplayertitle: 'koryto_rzeki_zawsze',
                interactive: true,
                title: '<img src="styles/legend/koryto_rzeki_zawsze_5.png" /> koryto_rzeki_zawsze'
            });
var format_siatka_Hist_Vmap_6 = new ol.format.GeoJSON();
var features_siatka_Hist_Vmap_6 = format_siatka_Hist_Vmap_6.readFeatures(json_siatka_Hist_Vmap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_Hist_Vmap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_Hist_Vmap_6.addFeatures(features_siatka_Hist_Vmap_6);
var lyr_siatka_Hist_Vmap_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_Hist_Vmap_6, 
                style: style_siatka_Hist_Vmap_6,
                popuplayertitle: 'siatka_Hist_Vmap',
                interactive: true,
    title: 'siatka_Hist_Vmap<br />\
    <img src="styles/legend/siatka_Hist_Vmap_6_0.png" /> -100 - -60<br />\
    <img src="styles/legend/siatka_Hist_Vmap_6_1.png" /> -60 - -30<br />\
    <img src="styles/legend/siatka_Hist_Vmap_6_2.png" /> -30 - 0<br />\
    <img src="styles/legend/siatka_Hist_Vmap_6_3.png" /> 0 - 30<br />\
    <img src="styles/legend/siatka_Hist_Vmap_6_4.png" /> 30 - 60<br />\
    <img src="styles/legend/siatka_Hist_Vmap_6_5.png" /> 60 - 100<br />'
        });
var format_siatka_VMap_Sent_7 = new ol.format.GeoJSON();
var features_siatka_VMap_Sent_7 = format_siatka_VMap_Sent_7.readFeatures(json_siatka_VMap_Sent_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_VMap_Sent_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_VMap_Sent_7.addFeatures(features_siatka_VMap_Sent_7);
var lyr_siatka_VMap_Sent_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_VMap_Sent_7, 
                style: style_siatka_VMap_Sent_7,
                popuplayertitle: 'siatka_VMap_Sent',
                interactive: true,
    title: 'siatka_VMap_Sent<br />\
    <img src="styles/legend/siatka_VMap_Sent_7_0.png" /> -100 - -60<br />\
    <img src="styles/legend/siatka_VMap_Sent_7_1.png" /> -60 - -30<br />\
    <img src="styles/legend/siatka_VMap_Sent_7_2.png" /> -30 - 0<br />\
    <img src="styles/legend/siatka_VMap_Sent_7_3.png" /> 0 - 30<br />\
    <img src="styles/legend/siatka_VMap_Sent_7_4.png" /> 30 - 60<br />\
    <img src="styles/legend/siatka_VMap_Sent_7_5.png" /> 60 - 100<br />'
        });

lyr_Raster_0.setVisible(true);lyr_koryto_rzeki_historyczne_1940_1.setVisible(false);lyr_koryto_rzeki_vMap_2000_2.setVisible(false);lyr_koryto_rzeki_Sentinel_2024_3.setVisible(false);lyr_koryto_rzeki_kiedykolwiek_4.setVisible(true);lyr_koryto_rzeki_zawsze_5.setVisible(true);lyr_siatka_Hist_Vmap_6.setVisible(false);lyr_siatka_VMap_Sent_7.setVisible(false);
var layersList = [lyr_Raster_0,lyr_koryto_rzeki_historyczne_1940_1,lyr_koryto_rzeki_vMap_2000_2,lyr_koryto_rzeki_Sentinel_2024_3,lyr_koryto_rzeki_kiedykolwiek_4,lyr_koryto_rzeki_zawsze_5,lyr_siatka_Hist_Vmap_6,lyr_siatka_VMap_Sent_7];
lyr_koryto_rzeki_historyczne_1940_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_koryto_rzeki_vMap_2000_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_koryto_rzeki_Sentinel_2024_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Field': 'Field', });
lyr_koryto_rzeki_kiedykolwiek_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_koryto_rzeki_zawsze_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_siatka_Hist_Vmap_6.set('fieldAliases', {'OBJECTID_12_13': 'OBJECTID_12_13', 'GRID_ID': 'GRID_ID', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID', 'GRID_ID_12': 'GRID_ID', 'AREA_1': 'AREA', 'PERCENTAGE_1': 'PERCENTAGE', 'OBJECTID_12': 'OBJECTID', 'GRID_ID_12_13': 'GRID_ID', 'AREA_12': 'AREA', 'PERCENTAGE_12': 'PERCENTAGE', 'procent_hist_vmap': 'procent_hist_vmap', 'procent_vmap_sent': 'procent_vmap_sent', 'procent_sent_hist': 'procent_sent_hist', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_siatka_VMap_Sent_7.set('fieldAliases', {'OBJECTID_12_13': 'OBJECTID_12_13', 'GRID_ID': 'GRID_ID', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID', 'GRID_ID_12': 'GRID_ID', 'AREA_1': 'AREA', 'PERCENTAGE_1': 'PERCENTAGE', 'OBJECTID_12': 'OBJECTID', 'GRID_ID_12_13': 'GRID_ID', 'AREA_12': 'AREA', 'PERCENTAGE_12': 'PERCENTAGE', 'procent_hist_vmap': 'procent_hist_vmap', 'procent_vmap_sent': 'procent_vmap_sent', 'procent_sent_hist': 'procent_sent_hist', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_koryto_rzeki_historyczne_1940_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_koryto_rzeki_vMap_2000_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_koryto_rzeki_Sentinel_2024_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Field': 'Range', });
lyr_koryto_rzeki_kiedykolwiek_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_koryto_rzeki_zawsze_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_siatka_Hist_Vmap_6.set('fieldImages', {'OBJECTID_12_13': 'TextEdit', 'GRID_ID': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTAGE_1': 'TextEdit', 'OBJECTID_12': 'Range', 'GRID_ID_12_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTAGE_12': 'TextEdit', 'procent_hist_vmap': 'TextEdit', 'procent_vmap_sent': 'TextEdit', 'procent_sent_hist': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_siatka_VMap_Sent_7.set('fieldImages', {'OBJECTID_12_13': 'TextEdit', 'GRID_ID': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTAGE_1': 'TextEdit', 'OBJECTID_12': 'Range', 'GRID_ID_12_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTAGE_12': 'TextEdit', 'procent_hist_vmap': 'TextEdit', 'procent_vmap_sent': 'TextEdit', 'procent_sent_hist': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_koryto_rzeki_historyczne_1940_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_koryto_rzeki_vMap_2000_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_koryto_rzeki_Sentinel_2024_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'inline label - visible with data', 'Field': 'hidden field', });
lyr_koryto_rzeki_kiedykolwiek_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_koryto_rzeki_zawsze_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_siatka_Hist_Vmap_6.set('fieldLabels', {'OBJECTID_12_13': 'hidden field', 'GRID_ID': 'hidden field', 'OBJECTID': 'hidden field', 'GRID_ID_1': 'hidden field', 'AREA': 'hidden field', 'PERCENTAGE': 'hidden field', 'OBJECTID_1': 'hidden field', 'GRID_ID_12': 'hidden field', 'AREA_1': 'hidden field', 'PERCENTAGE_1': 'hidden field', 'OBJECTID_12': 'hidden field', 'GRID_ID_12_13': 'hidden field', 'AREA_12': 'hidden field', 'PERCENTAGE_12': 'hidden field', 'procent_hist_vmap': 'inline label - visible with data', 'procent_vmap_sent': 'hidden field', 'procent_sent_hist': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_siatka_VMap_Sent_7.set('fieldLabels', {'OBJECTID_12_13': 'hidden field', 'GRID_ID': 'hidden field', 'OBJECTID': 'hidden field', 'GRID_ID_1': 'hidden field', 'AREA': 'hidden field', 'PERCENTAGE': 'hidden field', 'OBJECTID_1': 'hidden field', 'GRID_ID_12': 'hidden field', 'AREA_1': 'hidden field', 'PERCENTAGE_1': 'hidden field', 'OBJECTID_12': 'hidden field', 'GRID_ID_12_13': 'hidden field', 'AREA_12': 'hidden field', 'PERCENTAGE_12': 'hidden field', 'procent_hist_vmap': 'hidden field', 'procent_vmap_sent': 'inline label - visible with data', 'procent_sent_hist': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_siatka_VMap_Sent_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});