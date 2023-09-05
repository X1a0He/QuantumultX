let currentDate = new Date().toISOString();
let X1a0He = {
    "request_date_ms": 1693929600000,
    "request_date": "2023-09-05T16:00:00.000Z",
    "subscriber": {
        "non_subscriptions": {
            "com.goodnotes6.one_time_unlock_3999": [
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
        "first_seen": currentDate,
        "other_purchases": {
            "com.goodnotes6.one_time_unlock_3999": {
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
        "original_purchase_date": currentDate,
        "last_seen": currentDate,
        "Warning": ""
    }
};
$done({ body: JSON.stringify(X1a0He) });
