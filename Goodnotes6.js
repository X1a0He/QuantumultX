let currentDate = new Date().toISOString();
let X1a0He = {
    "subscriber": {
        "non_subscriptions": {
            "com.goodnotes6.one_time_unlock": [
                {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "id": "46ab585dbc",
                    "original_purchase_date": currentDate,
                    "store_transaction_id": "300001271068792",
                    "purchase_date": currentDate,
                    "store": "app_store"
                }
            ]
        },
        "other_purchases": {
            "com.goodnotes6.one_time_unlock": {
                "purchase_date": currentDate
            }
        },
        "management_url": null,
        "subscriptions": {},
        "entitlements": {
            "apple_access": {
                "grace_period_expires_date": null,
                "purchase_date": currentDate,
                "product_identifier": "com.goodnotes6.one_time_unlock",
                "expires_date": null
            },
            "crossplatform_access": {}
        },
        "original_purchase_date": currentDate
    }
};
$done({ body: JSON.stringify(X1a0He) });
