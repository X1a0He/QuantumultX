let data = JSON.parse($response.body);
data = {
    "data": {
        "processAppleReceipt": {
            "error": 0,
            "subscription": {
                "productId": "com.gingerlabs.Notability.premium_subscription",
                "originalTransactionId": "570001184068302",
                "tier": "premium",
                "refundedDate": null,
                "refundedReason": null,
                "isInBillingRetryPeriod": false,
                "expirationDate": "2099-12-31T23:59:59.000Z",
                "gracePeriodExpiresAt": null,
                "overDeviceLimit": false,
                "expirationIntent": "CUSTOMER_CANCELLED",
                "__typename": "AppStoreSubscription",
                "user": null,
                "status": "canceled",
                "originalPurchaseDate": "2023-08-10T00:00:00.000Z"
            }, "__typename": "SubscriptionResult"
        }
    }
};
$done({ body: JSON.stringify(data) });
