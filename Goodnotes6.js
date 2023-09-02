const X1a0He = {};
const X1a0He1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const namea = "apple_access";
const nameb = "crossplatform_access";
const jsid = "com.goodnotes.gn6_one_time_unlock_3999";
if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    X1a0He.headers = $request.headers;
} else if (X1a0He1 && X1a0He1.subscriber) {
    let currentDate = new Date().toISOString();
    data = {
        "Author": "X1a0He",
        "purchase_date": currentDate
    };
    X1a0He1.subscriber.subscriptions[(jsid)] = {
        "Author": "X1a0He",
        "original_purchase_date": currentDate,
        "purchase_date": currentDate,
        "store": "app_store",
        "ownership_type": "PURCHASED"
    };
    X1a0He1.subscriber.entitlements[(namea)] = JSON.parse(JSON.stringify(data));
    X1a0He1.subscriber.entitlements[(nameb)] = JSON.parse(JSON.stringify(data));
    X1a0He1.subscriber.entitlements[(namea)].product_identifier = (jsid);
    X1a0He1.subscriber.entitlements[(nameb)].product_identifier = (jsid);
    X1a0He.body = JSON.stringify(X1a0He1);
}
$done(X1a0He);
