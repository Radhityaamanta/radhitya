var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SMAN5SMAN5JAKARTA_1 = new ol.format.GeoJSON();
var features_SMAN5SMAN5JAKARTA_1 = format_SMAN5SMAN5JAKARTA_1.readFeatures(json_SMAN5SMAN5JAKARTA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN5SMAN5JAKARTA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN5SMAN5JAKARTA_1.addFeatures(features_SMAN5SMAN5JAKARTA_1);
var lyr_SMAN5SMAN5JAKARTA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN5SMAN5JAKARTA_1, 
                style: style_SMAN5SMAN5JAKARTA_1,
                interactive: true,
                title: '<img src="styles/legend/SMAN5SMAN5JAKARTA_1.png" /> SMAN 5 SMAN 5 JAKARTA'
            });
var format_SMAN7JAKARTA_2 = new ol.format.GeoJSON();
var features_SMAN7JAKARTA_2 = format_SMAN7JAKARTA_2.readFeatures(json_SMAN7JAKARTA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN7JAKARTA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN7JAKARTA_2.addFeatures(features_SMAN7JAKARTA_2);
var lyr_SMAN7JAKARTA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN7JAKARTA_2, 
                style: style_SMAN7JAKARTA_2,
                interactive: true,
                title: '<img src="styles/legend/SMAN7JAKARTA_2.png" /> SMAN 7 JAKARTA'
            });
var format_SMAN10JAKARTA_3 = new ol.format.GeoJSON();
var features_SMAN10JAKARTA_3 = format_SMAN10JAKARTA_3.readFeatures(json_SMAN10JAKARTA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN10JAKARTA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN10JAKARTA_3.addFeatures(features_SMAN10JAKARTA_3);
var lyr_SMAN10JAKARTA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN10JAKARTA_3, 
                style: style_SMAN10JAKARTA_3,
                interactive: true,
                title: '<img src="styles/legend/SMAN10JAKARTA_3.png" /> SMAN 10 JAKARTA'
            });
var format_SMAN20JAKARTA_4 = new ol.format.GeoJSON();
var features_SMAN20JAKARTA_4 = format_SMAN20JAKARTA_4.readFeatures(json_SMAN20JAKARTA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN20JAKARTA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN20JAKARTA_4.addFeatures(features_SMAN20JAKARTA_4);
var lyr_SMAN20JAKARTA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN20JAKARTA_4, 
                style: style_SMAN20JAKARTA_4,
                interactive: true,
                title: '<img src="styles/legend/SMAN20JAKARTA_4.png" /> SMAN 20 JAKARTA'
            });
var format_SMAN24JAKARTA_5 = new ol.format.GeoJSON();
var features_SMAN24JAKARTA_5 = format_SMAN24JAKARTA_5.readFeatures(json_SMAN24JAKARTA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN24JAKARTA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN24JAKARTA_5.addFeatures(features_SMAN24JAKARTA_5);
var lyr_SMAN24JAKARTA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN24JAKARTA_5, 
                style: style_SMAN24JAKARTA_5,
                interactive: true,
                title: '<img src="styles/legend/SMAN24JAKARTA_5.png" /> SMAN 24 JAKARTA'
            });
var format_SMAN25JAKARTA_6 = new ol.format.GeoJSON();
var features_SMAN25JAKARTA_6 = format_SMAN25JAKARTA_6.readFeatures(json_SMAN25JAKARTA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN25JAKARTA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN25JAKARTA_6.addFeatures(features_SMAN25JAKARTA_6);
var lyr_SMAN25JAKARTA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN25JAKARTA_6, 
                style: style_SMAN25JAKARTA_6,
                interactive: true,
                title: '<img src="styles/legend/SMAN25JAKARTA_6.png" /> SMAN 25 JAKARTA'
            });
var format_SMAN27SMAN27JAKARTA_7 = new ol.format.GeoJSON();
var features_SMAN27SMAN27JAKARTA_7 = format_SMAN27SMAN27JAKARTA_7.readFeatures(json_SMAN27SMAN27JAKARTA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN27SMAN27JAKARTA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN27SMAN27JAKARTA_7.addFeatures(features_SMAN27SMAN27JAKARTA_7);
var lyr_SMAN27SMAN27JAKARTA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN27SMAN27JAKARTA_7, 
                style: style_SMAN27SMAN27JAKARTA_7,
                interactive: true,
                title: '<img src="styles/legend/SMAN27SMAN27JAKARTA_7.png" /> SMAN 27 SMAN 27 JAKARTA'
            });
var format_SMAN30SMAN30JAKARTA_8 = new ol.format.GeoJSON();
var features_SMAN30SMAN30JAKARTA_8 = format_SMAN30SMAN30JAKARTA_8.readFeatures(json_SMAN30SMAN30JAKARTA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN30SMAN30JAKARTA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN30SMAN30JAKARTA_8.addFeatures(features_SMAN30SMAN30JAKARTA_8);
var lyr_SMAN30SMAN30JAKARTA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN30SMAN30JAKARTA_8, 
                style: style_SMAN30SMAN30JAKARTA_8,
                interactive: true,
                title: '<img src="styles/legend/SMAN30SMAN30JAKARTA_8.png" /> SMAN 30 SMAN 30 JAKARTA'
            });
var format_SMAN35JAKARTA_9 = new ol.format.GeoJSON();
var features_SMAN35JAKARTA_9 = format_SMAN35JAKARTA_9.readFeatures(json_SMAN35JAKARTA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN35JAKARTA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN35JAKARTA_9.addFeatures(features_SMAN35JAKARTA_9);
var lyr_SMAN35JAKARTA_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN35JAKARTA_9, 
                style: style_SMAN35JAKARTA_9,
                interactive: true,
                title: '<img src="styles/legend/SMAN35JAKARTA_9.png" /> SMAN 35 JAKARTA'
            });
var format_SMAN68SMAN68JAKARTA_10 = new ol.format.GeoJSON();
var features_SMAN68SMAN68JAKARTA_10 = format_SMAN68SMAN68JAKARTA_10.readFeatures(json_SMAN68SMAN68JAKARTA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN68SMAN68JAKARTA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN68SMAN68JAKARTA_10.addFeatures(features_SMAN68SMAN68JAKARTA_10);
var lyr_SMAN68SMAN68JAKARTA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN68SMAN68JAKARTA_10, 
                style: style_SMAN68SMAN68JAKARTA_10,
                interactive: true,
                title: '<img src="styles/legend/SMAN68SMAN68JAKARTA_10.png" /> SMAN 68 SMAN 68 JAKARTA'
            });
var format_SMAN77SMAN77JAKARTA_11 = new ol.format.GeoJSON();
var features_SMAN77SMAN77JAKARTA_11 = format_SMAN77SMAN77JAKARTA_11.readFeatures(json_SMAN77SMAN77JAKARTA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN77SMAN77JAKARTA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN77SMAN77JAKARTA_11.addFeatures(features_SMAN77SMAN77JAKARTA_11);
var lyr_SMAN77SMAN77JAKARTA_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN77SMAN77JAKARTA_11, 
                style: style_SMAN77SMAN77JAKARTA_11,
                interactive: true,
                title: '<img src="styles/legend/SMAN77SMAN77JAKARTA_11.png" /> SMAN 77 SMAN 77 JAKARTA'
            });
var format_SMAN11SMAN1JAKARTA_12 = new ol.format.GeoJSON();
var features_SMAN11SMAN1JAKARTA_12 = format_SMAN11SMAN1JAKARTA_12.readFeatures(json_SMAN11SMAN1JAKARTA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN11SMAN1JAKARTA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN11SMAN1JAKARTA_12.addFeatures(features_SMAN11SMAN1JAKARTA_12);
var lyr_SMAN11SMAN1JAKARTA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN11SMAN1JAKARTA_12, 
                style: style_SMAN11SMAN1JAKARTA_12,
                interactive: true,
                title: '<img src="styles/legend/SMAN11SMAN1JAKARTA_12.png" /> SMAN 1 (1) SMAN 1 JAKARTA'
            });
var format_SMAN4JAKARTA_13 = new ol.format.GeoJSON();
var features_SMAN4JAKARTA_13 = format_SMAN4JAKARTA_13.readFeatures(json_SMAN4JAKARTA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN4JAKARTA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN4JAKARTA_13.addFeatures(features_SMAN4JAKARTA_13);
var lyr_SMAN4JAKARTA_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMAN4JAKARTA_13, 
                style: style_SMAN4JAKARTA_13,
                interactive: true,
                title: '<img src="styles/legend/SMAN4JAKARTA_13.png" /> SMAN 4 JAKARTA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SMAN5SMAN5JAKARTA_1.setVisible(true);lyr_SMAN7JAKARTA_2.setVisible(true);lyr_SMAN10JAKARTA_3.setVisible(true);lyr_SMAN20JAKARTA_4.setVisible(true);lyr_SMAN24JAKARTA_5.setVisible(true);lyr_SMAN25JAKARTA_6.setVisible(true);lyr_SMAN27SMAN27JAKARTA_7.setVisible(true);lyr_SMAN30SMAN30JAKARTA_8.setVisible(true);lyr_SMAN35JAKARTA_9.setVisible(true);lyr_SMAN68SMAN68JAKARTA_10.setVisible(true);lyr_SMAN77SMAN77JAKARTA_11.setVisible(true);lyr_SMAN11SMAN1JAKARTA_12.setVisible(true);lyr_SMAN4JAKARTA_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SMAN5SMAN5JAKARTA_1,lyr_SMAN7JAKARTA_2,lyr_SMAN10JAKARTA_3,lyr_SMAN20JAKARTA_4,lyr_SMAN24JAKARTA_5,lyr_SMAN25JAKARTA_6,lyr_SMAN27SMAN27JAKARTA_7,lyr_SMAN30SMAN30JAKARTA_8,lyr_SMAN35JAKARTA_9,lyr_SMAN68SMAN68JAKARTA_10,lyr_SMAN77SMAN77JAKARTA_11,lyr_SMAN11SMAN1JAKARTA_12,lyr_SMAN4JAKARTA_13];
lyr_SMAN5SMAN5JAKARTA_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Didirikan': 'Didirikan', 'Akreditasi': 'Akreditasi', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'URL': 'URL', });
lyr_SMAN7JAKARTA_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Didirikan': 'Didirikan', 'Akreditasi': 'Akreditasi', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'URL': 'URL', });
lyr_SMAN10JAKARTA_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Didirikan': 'Didirikan', 'Akreditasi': 'Akreditasi', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'URL': 'URL', });
lyr_SMAN20JAKARTA_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Didirikan': 'Didirikan', 'Akreditasi': 'Akreditasi', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'Luas Tanah (m3)': 'Luas Tanah (m3)', 'URL': 'URL', });
lyr_SMAN24JAKARTA_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Didirikan': 'Didirikan', 'Akreditasi': 'Akreditasi', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'URL': 'URL', });
lyr_SMAN25JAKARTA_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Didirikan': 'Didirikan', 'Akreditasi': 'Akreditasi', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'URL': 'URL', });
lyr_SMAN27SMAN27JAKARTA_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Akreditasi': 'Akreditasi', 'Didirikan': 'Didirikan', 'Telepon': 'Telepon', 'E-mail': 'E-mail', 'Website': 'Website', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'URL': 'URL', });
lyr_SMAN30SMAN30JAKARTA_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Akreditasi': 'Akreditasi', 'Didirikan': 'Didirikan', 'Telepon': 'Telepon', 'E-mail': 'E-mail', 'Website': 'Website', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'URL': 'URL', });
lyr_SMAN35JAKARTA_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Akreditasi': 'Akreditasi', 'Didirikan': 'Didirikan', 'Telepon': 'Telepon', 'E-mail': 'E-mail', 'Website': 'Website', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'URL': 'URL', });
lyr_SMAN68SMAN68JAKARTA_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Akreditasi': 'Akreditasi', 'Didirikan': 'Didirikan', 'Telepon': 'Telepon', 'E-mail': 'E-mail', 'Website': 'Website', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'URL': 'URL', });
lyr_SMAN77SMAN77JAKARTA_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Akreditasi': 'Akreditasi', 'Didirikan': 'Didirikan', 'Telepon': 'Telepon', 'E-mail': 'E-mail', 'Website': 'Website', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'URL ': 'URL ', });
lyr_SMAN11SMAN1JAKARTA_12.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Akreditasi': 'Akreditasi', 'Didirikan': 'Didirikan', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'URL': 'URL', });
lyr_SMAN4JAKARTA_13.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'NPSN': 'NPSN', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', 'Didirikan': 'Didirikan', 'Akreditasi': 'Akreditasi', 'Luas Tanah (m2)': 'Luas Tanah (m2)', 'Telepon': 'Telepon', 'Email': 'Email', 'Website': 'Website', 'URL': 'URL', });
lyr_SMAN5SMAN5JAKARTA_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Didirikan': '', 'Akreditasi': '', 'Luas Tanah (m2)': '', 'Telepon': '', 'Email': '', 'Website': '', 'URL': '', });
lyr_SMAN7JAKARTA_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Didirikan': '', 'Akreditasi': '', 'Luas Tanah (m2)': '', 'Telepon': '', 'Email': '', 'Website': '', 'URL': '', });
lyr_SMAN10JAKARTA_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Didirikan': '', 'Akreditasi': '', 'Luas Tanah (m2)': '', 'Telepon': '', 'Email': '', 'Website': '', 'URL': '', });
lyr_SMAN20JAKARTA_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Didirikan': '', 'Akreditasi': '', 'Telepon': '', 'Email': '', 'Website': '', 'Luas Tanah (m3)': '', 'URL': '', });
lyr_SMAN24JAKARTA_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Didirikan': '', 'Akreditasi': '', 'Luas Tanah (m2)': '', 'Telepon': '', 'Email': '', 'Website': '', 'URL': '', });
lyr_SMAN25JAKARTA_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Didirikan': '', 'Akreditasi': '', 'Luas Tanah (m2)': '', 'Telepon': '', 'Email': '', 'Website': '', 'URL': '', });
lyr_SMAN27SMAN27JAKARTA_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Akreditasi': '', 'Didirikan': '', 'Telepon': '', 'E-mail': '', 'Website': '', 'Luas Tanah (m2)': '', 'URL': '', });
lyr_SMAN30SMAN30JAKARTA_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Akreditasi': '', 'Didirikan': '', 'Telepon': '', 'E-mail': '', 'Website': '', 'Luas Tanah (m2)': '', 'URL': '', });
lyr_SMAN35JAKARTA_9.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Akreditasi': '', 'Didirikan': '', 'Telepon': '', 'E-mail': '', 'Website': '', 'Luas Tanah (m2)': '', 'URL': '', });
lyr_SMAN68SMAN68JAKARTA_10.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Akreditasi': '', 'Didirikan': '', 'Telepon': '', 'E-mail': '', 'Website': '', 'Luas Tanah (m2)': '', 'URL': '', });
lyr_SMAN77SMAN77JAKARTA_11.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Akreditasi': '', 'Didirikan': '', 'Telepon': '', 'E-mail': '', 'Website': '', 'Luas Tanah (m2)': '', 'URL ': '', });
lyr_SMAN11SMAN1JAKARTA_12.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Akreditasi': '', 'Didirikan': '', 'Telepon': '', 'Email': '', 'Website': '', 'Luas Tanah (m2)': '', 'URL': '', });
lyr_SMAN4JAKARTA_13.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'NPSN': '', 'Alamat': '', 'Kode Pos': '', 'Didirikan': '', 'Akreditasi': '', 'Luas Tanah (m2)': '', 'Telepon': '', 'Email': '', 'Website': '', 'URL': '', });
lyr_SMAN5SMAN5JAKARTA_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Didirikan': 'no label', 'Akreditasi': 'no label', 'Luas Tanah (m2)': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'URL': 'no label', });
lyr_SMAN7JAKARTA_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Didirikan': 'no label', 'Akreditasi': 'no label', 'Luas Tanah (m2)': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'URL': 'no label', });
lyr_SMAN10JAKARTA_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Didirikan': 'no label', 'Akreditasi': 'no label', 'Luas Tanah (m2)': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'URL': 'no label', });
lyr_SMAN20JAKARTA_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Didirikan': 'no label', 'Akreditasi': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'Luas Tanah (m3)': 'no label', 'URL': 'no label', });
lyr_SMAN24JAKARTA_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Didirikan': 'no label', 'Akreditasi': 'no label', 'Luas Tanah (m2)': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'URL': 'no label', });
lyr_SMAN25JAKARTA_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Didirikan': 'no label', 'Akreditasi': 'no label', 'Luas Tanah (m2)': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'URL': 'no label', });
lyr_SMAN27SMAN27JAKARTA_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Akreditasi': 'no label', 'Didirikan': 'no label', 'Telepon': 'no label', 'E-mail': 'no label', 'Website': 'no label', 'Luas Tanah (m2)': 'no label', 'URL': 'no label', });
lyr_SMAN30SMAN30JAKARTA_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Akreditasi': 'no label', 'Didirikan': 'no label', 'Telepon': 'no label', 'E-mail': 'no label', 'Website': 'no label', 'Luas Tanah (m2)': 'no label', 'URL': 'no label', });
lyr_SMAN35JAKARTA_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Akreditasi': 'no label', 'Didirikan': 'no label', 'Telepon': 'no label', 'E-mail': 'no label', 'Website': 'no label', 'Luas Tanah (m2)': 'no label', 'URL': 'no label', });
lyr_SMAN68SMAN68JAKARTA_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Akreditasi': 'no label', 'Didirikan': 'no label', 'Telepon': 'no label', 'E-mail': 'no label', 'Website': 'no label', 'Luas Tanah (m2)': 'no label', 'URL': 'no label', });
lyr_SMAN77SMAN77JAKARTA_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Akreditasi': 'no label', 'Didirikan': 'no label', 'Telepon': 'no label', 'E-mail': 'no label', 'Website': 'no label', 'Luas Tanah (m2)': 'no label', 'URL ': 'no label', });
lyr_SMAN11SMAN1JAKARTA_12.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Akreditasi': 'no label', 'Didirikan': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'Luas Tanah (m2)': 'no label', 'URL': 'no label', });
lyr_SMAN4JAKARTA_13.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'NPSN': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', 'Didirikan': 'no label', 'Akreditasi': 'no label', 'Luas Tanah (m2)': 'no label', 'Telepon': 'no label', 'Email': 'no label', 'Website': 'no label', 'URL': 'no label', });
lyr_SMAN4JAKARTA_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});