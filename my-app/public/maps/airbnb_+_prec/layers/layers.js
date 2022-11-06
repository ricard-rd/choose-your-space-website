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
var lyr_pr_time1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "pr_time1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/pr_time1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-20037508.342789, -44927335.427097, 20037508.342789, 44927335.427096]
                            })
                        });
var format_listings_2 = new ol.format.GeoJSON();
var features_listings_2 = format_listings_2.readFeatures(json_listings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_listings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_listings_2.addFeatures(features_listings_2);cluster_listings_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_listings_2
});
var lyr_listings_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_listings_2, 
                style: style_listings_2,
                interactive: true,
                title: '<img src="styles/legend/listings_2.png" /> listings'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_pr_time1_1.setVisible(true);lyr_listings_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_pr_time1_1,lyr_listings_2];
lyr_listings_2.set('fieldAliases', {'id': 'id', 'listing_url': 'listing_url', 'scrape_id': 'scrape_id', 'last_scraped': 'last_scraped', 'source': 'source', 'name': 'name', 'description': 'description', 'neighborhood_overview': 'neighborhood_overview', 'picture_url': 'picture_url', 'host_id': 'host_id', 'host_url': 'host_url', 'host_name': 'host_name', 'host_since': 'host_since', 'host_location': 'host_location', 'host_about': 'host_about', 'host_response_time': 'host_response_time', 'host_response_rate': 'host_response_rate', 'host_acceptance_rate': 'host_acceptance_rate', 'host_is_superhost': 'host_is_superhost', 'host_thumbnail_url': 'host_thumbnail_url', 'host_picture_url': 'host_picture_url', 'host_neighbourhood': 'host_neighbourhood', 'host_listings_count': 'host_listings_count', 'host_total_listings_count': 'host_total_listings_count', 'host_verifications': 'host_verifications', 'host_has_profile_pic': 'host_has_profile_pic', 'host_identity_verified': 'host_identity_verified', 'neighbourhood': 'neighbourhood', 'neighbourhood_cleansed': 'neighbourhood_cleansed', 'neighbourhood_group_cleansed': 'neighbourhood_group_cleansed', 'latitude': 'latitude', 'longitude': 'longitude', 'property_type': 'property_type', 'room_type': 'room_type', 'accommodates': 'accommodates', 'bathrooms': 'bathrooms', 'bathrooms_text': 'bathrooms_text', 'bedrooms': 'bedrooms', 'beds': 'beds', 'amenities': 'amenities', 'price': 'price', 'minimum_nights': 'minimum_nights', 'maximum_nights': 'maximum_nights', 'minimum_minimum_nights': 'minimum_minimum_nights', 'maximum_minimum_nights': 'maximum_minimum_nights', 'minimum_maximum_nights': 'minimum_maximum_nights', 'maximum_maximum_nights': 'maximum_maximum_nights', 'minimum_nights_avg_ntm': 'minimum_nights_avg_ntm', 'maximum_nights_avg_ntm': 'maximum_nights_avg_ntm', 'calendar_updated': 'calendar_updated', 'has_availability': 'has_availability', 'availability_30': 'availability_30', 'availability_60': 'availability_60', 'availability_90': 'availability_90', 'availability_365': 'availability_365', 'calendar_last_scraped': 'calendar_last_scraped', 'number_of_reviews': 'number_of_reviews', 'number_of_reviews_ltm': 'number_of_reviews_ltm', 'number_of_reviews_l30d': 'number_of_reviews_l30d', 'first_review': 'first_review', 'last_review': 'last_review', 'review_scores_rating': 'review_scores_rating', 'review_scores_accuracy': 'review_scores_accuracy', 'review_scores_cleanliness': 'review_scores_cleanliness', 'review_scores_checkin': 'review_scores_checkin', 'review_scores_communication': 'review_scores_communication', 'review_scores_location': 'review_scores_location', 'review_scores_value': 'review_scores_value', 'license': 'license', 'instant_bookable': 'instant_bookable', 'calculated_host_listings_count': 'calculated_host_listings_count', 'calculated_host_listings_count_entire_homes': 'calculated_host_listings_count_entire_homes', 'calculated_host_listings_count_private_rooms': 'calculated_host_listings_count_private_rooms', 'calculated_host_listings_count_shared_rooms': 'calculated_host_listings_count_shared_rooms', 'reviews_per_month': 'reviews_per_month', });
lyr_listings_2.set('fieldImages', {'id': 'TextEdit', 'listing_url': 'TextEdit', 'scrape_id': 'TextEdit', 'last_scraped': 'DateTime', 'source': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'neighborhood_overview': 'TextEdit', 'picture_url': 'TextEdit', 'host_id': 'Range', 'host_url': 'TextEdit', 'host_name': 'TextEdit', 'host_since': 'DateTime', 'host_location': 'TextEdit', 'host_about': 'TextEdit', 'host_response_time': 'TextEdit', 'host_response_rate': 'TextEdit', 'host_acceptance_rate': 'TextEdit', 'host_is_superhost': 'CheckBox', 'host_thumbnail_url': 'TextEdit', 'host_picture_url': 'TextEdit', 'host_neighbourhood': 'TextEdit', 'host_listings_count': 'Range', 'host_total_listings_count': 'Range', 'host_verifications': 'TextEdit', 'host_has_profile_pic': 'CheckBox', 'host_identity_verified': 'CheckBox', 'neighbourhood': 'TextEdit', 'neighbourhood_cleansed': 'TextEdit', 'neighbourhood_group_cleansed': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'property_type': 'TextEdit', 'room_type': 'TextEdit', 'accommodates': 'Range', 'bathrooms': 'TextEdit', 'bathrooms_text': 'TextEdit', 'bedrooms': 'Range', 'beds': 'Range', 'amenities': 'TextEdit', 'price': 'TextEdit', 'minimum_nights': 'Range', 'maximum_nights': 'Range', 'minimum_minimum_nights': 'Range', 'maximum_minimum_nights': 'Range', 'minimum_maximum_nights': 'Range', 'maximum_maximum_nights': 'Range', 'minimum_nights_avg_ntm': 'TextEdit', 'maximum_nights_avg_ntm': 'TextEdit', 'calendar_updated': 'TextEdit', 'has_availability': 'CheckBox', 'availability_30': 'Range', 'availability_60': 'Range', 'availability_90': 'Range', 'availability_365': 'Range', 'calendar_last_scraped': 'DateTime', 'number_of_reviews': 'Range', 'number_of_reviews_ltm': 'Range', 'number_of_reviews_l30d': 'Range', 'first_review': 'DateTime', 'last_review': 'DateTime', 'review_scores_rating': 'TextEdit', 'review_scores_accuracy': 'TextEdit', 'review_scores_cleanliness': 'TextEdit', 'review_scores_checkin': 'TextEdit', 'review_scores_communication': 'TextEdit', 'review_scores_location': 'TextEdit', 'review_scores_value': 'TextEdit', 'license': 'TextEdit', 'instant_bookable': 'CheckBox', 'calculated_host_listings_count': 'Range', 'calculated_host_listings_count_entire_homes': 'Range', 'calculated_host_listings_count_private_rooms': 'Range', 'calculated_host_listings_count_shared_rooms': 'Range', 'reviews_per_month': 'TextEdit', });
lyr_listings_2.set('fieldLabels', {'id': 'no label', 'listing_url': 'no label', 'scrape_id': 'no label', 'last_scraped': 'no label', 'source': 'no label', 'name': 'no label', 'description': 'no label', 'neighborhood_overview': 'no label', 'picture_url': 'no label', 'host_id': 'no label', 'host_url': 'no label', 'host_name': 'no label', 'host_since': 'no label', 'host_location': 'no label', 'host_about': 'no label', 'host_response_time': 'no label', 'host_response_rate': 'no label', 'host_acceptance_rate': 'no label', 'host_is_superhost': 'no label', 'host_thumbnail_url': 'no label', 'host_picture_url': 'no label', 'host_neighbourhood': 'no label', 'host_listings_count': 'no label', 'host_total_listings_count': 'no label', 'host_verifications': 'no label', 'host_has_profile_pic': 'no label', 'host_identity_verified': 'no label', 'neighbourhood': 'no label', 'neighbourhood_cleansed': 'no label', 'neighbourhood_group_cleansed': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'property_type': 'no label', 'room_type': 'no label', 'accommodates': 'no label', 'bathrooms': 'no label', 'bathrooms_text': 'no label', 'bedrooms': 'no label', 'beds': 'no label', 'amenities': 'no label', 'price': 'no label', 'minimum_nights': 'no label', 'maximum_nights': 'no label', 'minimum_minimum_nights': 'no label', 'maximum_minimum_nights': 'no label', 'minimum_maximum_nights': 'no label', 'maximum_maximum_nights': 'no label', 'minimum_nights_avg_ntm': 'no label', 'maximum_nights_avg_ntm': 'no label', 'calendar_updated': 'no label', 'has_availability': 'no label', 'availability_30': 'no label', 'availability_60': 'no label', 'availability_90': 'no label', 'availability_365': 'no label', 'calendar_last_scraped': 'no label', 'number_of_reviews': 'no label', 'number_of_reviews_ltm': 'no label', 'number_of_reviews_l30d': 'no label', 'first_review': 'no label', 'last_review': 'no label', 'review_scores_rating': 'no label', 'review_scores_accuracy': 'no label', 'review_scores_cleanliness': 'no label', 'review_scores_checkin': 'no label', 'review_scores_communication': 'no label', 'review_scores_location': 'no label', 'review_scores_value': 'no label', 'license': 'no label', 'instant_bookable': 'no label', 'calculated_host_listings_count': 'no label', 'calculated_host_listings_count_entire_homes': 'no label', 'calculated_host_listings_count_private_rooms': 'no label', 'calculated_host_listings_count_shared_rooms': 'no label', 'reviews_per_month': 'no label', });
lyr_listings_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});