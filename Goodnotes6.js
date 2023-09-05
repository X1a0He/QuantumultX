let currentDate = new Date().toISOString();
let X1a0He = {
    "subscriber": {
        "subscriptions": {
            "com.goodnotes6.one_time_unlock_3999": [
                {
                    "original_purchase_date": currentDate,
                    "purchase_date": currentDate,
                    "store": "app_store",
                    "ownership_type": "PURCHASED"
                }
            ]
        },
        "entitlements": {
            "apple_access": {
                "purchase_date": currentDate,
                "product_identifier": "com.goodnotes6.one_time_unlock_3999"
            },
            "crossplatform_access": {
                "purchase_date": currentDate,
                "product_identifier": "com.goodnotes6.one_time_unlock_3999"
            }
        }
    }
};
$done({ body: JSON.stringify(X1a0He) });
