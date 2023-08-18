import * as Store from '../src/assets/store.json';
export class ApplicationConstants  {

    public static API_BASE_URL                                                  = "http://localhost:8080/api/ols/";
    
    public static API_MODE_INSERT                                               = 1;
    public static API_MODE_UPDATE                                               = 2;

    // public static API_BASE_URL                                                  = "http://noqsystem.com:50010/api/ols/";
    // public static API_BASE_URL                                                  = "http://noqsystem.com:60010/api/ols/";
    // public static API_BASE_URL                                                  = "http://noqsystem.com:51010/api/ols/";
    public static STORE_ID                                                          = Store.STORE_ID;
     
    // public static API_BASE_URL                                                  = "https://wawbiz.in/wawbiz-api/ols/";
   
    // using in homepage.component
    public static IMAGE_BANNER_REFERENCE_TYPE_CODE                              = 1; // Image Banner
    public static VIDEO_BANNER_REFERENCE_TYPE_CODE                              = 2; // Video Bannermain
    public static CATEGORY_BANNER_REFERENCE_TYPE_CODE                           = 3; // Category Banner
    public static BRAND_BANNER_REFERENCE_TYPE_CODE                              = 4; // Brand Banner
    public static PRODUCTS_BANNER_REFERENCE_TYPE_CODE                           = 5; // Product Banner
    public static IMAGE_WITH_TEXT_BANNER_REFERENCE_TYPE_CODE                    = 6; // Image with text Banner
    public static TEXT_BANNER_REFERENCE_TYPE_CODE                               = 7; // Text Banner
    public static CUSTOMIZE_BANNER_REFERENCE_TYPE_CODE                          = 8; // Customized Banner
        
    public static HERO_BANNER_DISPLAY_SEQ_NR                                    = 1; 
    
    public static QUATER_BANNER_DISPLAY_TYPE_CODE                               = 1; 
    public static HALF_BANNER_DISPLAY_TYPE_CODE                                 = 2; 
    public static FULL_BANNER_DISPLAY_TYPE_CODE                                 = 3; 
    public static THREE_BANNER_DISPLAY_TYPE_CODE                                = 4; 
    public static FIVE_BANNER_DISPLAY_TYPE_CODE                                 = 5; 
    public static SIX_BANNER_DISPLAY_TYPE_CODE                                  = 6; 
    public static SEVEN_BANNER_DISPLAY_TYPE_CODE                                = 7; 
    public static EIGHT_BANNER_DISPLAY_TYPE_CODE                                = 8; 
      
    // using in checkout, login, signup, social-signup
    public static DEFAULT_SUBSCRIBER_PROFILE_ID                                 = 1;
    
    public static  SUBSCRIBER_STATUS_CODE_ACTIVATED                             = 1;
    public static  SUBSCRIBER_STATUS_CODE_DEACTIVATED                           = 2;
    public static  SUBSCRIBER_STATUS_CODE_BLOCKED                               = 3;
    public static  SUBSCRIBER_STATUS_CODE_PENDING                               = 4;
    public static  SUBSCRIBER_STATUS_CODE_UNAUTHORIZED                          = 5;

    public static  PROVIDER_CODE_GOOGLE                                         = 1;
    public static  PROVIDER_CODE_FACEBOOK                                       = 2;
    public static  PROVIDER_CODE_PERSONAL                                       = 3;
    public static  PROVIDER_CODE_TEMPORARY                                      = 4;
    public static  PROVIDER_CODE_GUEST_CHECK_IN                                 = 5;
    public static  PROVIDER_CODE_OTP_CHECK_IN                                   = 7;

    public static notification_display_time                                     = 3000; //micro seconds
    
    public static wait_time                                                     = 500; //micro seconds

    public static TRANSACTION_DETAIL_TYPE_CODE_PRODUCT                          = 1;
    public static TRANSACTION_DETAIL_TYPE_CODE_DELIVERY_CHAGE                   = 2;
    public static TRANSACTION_DETAIL_TYPE_CODE_CONVENIENCE_FEE                  = 3;
    public static TRANSACTION_DETAIL_TYPE_CODE_PROMO_CODE                       = 4;
    public static TRANSACTION_DETAIL_TYPE_CODE_WALLET                           = 5;
    public static TRANSACTION_DETAIL_TYPE_CODE_DELIVERY_SLOT_CHARGE             = 6;
    public static TRANSACTION_DETAIL_TYPE_CODE_ADD_ON_PRODUCT                   = 7;
    
    public static BUFFER_TIME_TYPE_CODE_HOUR                                    = 1;
    public static BUFFER_TIME_TYPE_CODE_MIN                                     = 2;
    public static BUFFER_TIME_TYPE_CODE_SECOND                                  = 3;

    public static PRODUCT_CODE                                                  = 1 ;

    public static HOME_DELIVERY_TYPE_CODE                                       = 1;
    public static STORE_PICKUP_DELIVERY_TYPE_CODE                               = 2;

    //Payment Type
    public static   INSTAMOJO_PAYMENT_GATEWAY_TYPE_CODE                         = 1;
    public static   CASH_0N_DELIVERY_PAYMENT_GATEWAY_TYPE_CODE                  = 2;
    public static   PAYPAL_PAYMENT_GATEWAY_TYPE_CODE                            = 3;
    public static   AUTHORIZE_NET_PAYMENT_GATEWAY_TYPE_CODE                     = 4;
    public static   WALLET_PAYMENT_GATEWAY_TYPE_CODE                            = 5; 
    public static   RAZORPAY_PAYMENT_GATEWAY_TYPE_CODE                          = 6; 
    
    public static   WALLET_PAYMENT_GATEWAY_TYPE_ID                              = 3;
    
    public static   CONFIRMED_PAYMENT_STATUS_TYPE_ID                            = 1;
    public static   PENDING_PAYMENT_STATUS_TYPE_ID                              = 2;
    public static   FAILED_PAYMENT_STATUS_TYPE_ID                               = 3;
    public static   CANCELLED_PAYMENT_STATUS_TYPE_ID                            = 4;
    
    public static   PENDING_DELIVERY_STATUS_TYPE_ID                             = 1;
    public static   DELIVERED_DELIVERY_STATUS_TYPE_ID                           = 2;
    public static   STARTED_DELIVERY_STATUS_TYPE_ID                             = 3;
    public static   CANCELLED_DELIVERY_STATUS_TYPE_ID                           = 4;
    public static   DEFERRED_DELIVERY_STATUS_TYPE_ID                            = 5;
    public static   PACKING_DELIVERY_STATUS_TYPE_ID                             = 6;
    public static   READYFORPICKUP_DELIVERY_STATUS_TYPE_ID                      = 7;
    public static   PICKEDUP_DELIVERY_STATUS_TYPE_ID                            = 8;
    public static   CART_IN_PROGRESS_DELIVERY_STATUS_TYPE_ID                    = 9;
     
    public static   CURRENCY_INR                                                = "INR";

    public static   DEFAULT_OFFSET                                              = 0;
    public static   DEFAULT_LIMIT                                               = 30;
     
    public static   REVIEW_IMAGE_PATH                                           = "http://noqsystem.com:50010/noqbase/a_1/v_1/s_1/review_images/";

    public static COMING_SOON_IMAGE_LINK                                        = "http://noqsystem.com:50010/noqbase/image_coming_soon.png";

    public static  CATEGORY_FILTER_SEARCH_KEY                                   =           "CATEGORY_ID";
	public static  BRAND_FILTER_SEARCH_KEY                                      =           "BRAND_ID";
	public static  BANNER_FILTER_SEARCH_KEY                                     =           "BANNER_ID";
    public static  SEARCH_KEY_FILTER_SEARCH_KEY                                 =           "SEARCH_KEY";
    
    public static  BANNER_FILTER_REQUEST_FROM_TYPE_CODE                         =           1;
    public static  CATEGORY_FILTER_REQUEST_FROM_TYPE_CODE                       =           2;
    public static  BRAND_FILTER_REQUEST_FROM_TYPE_CODE                          =           3;
    public static  SEARCH_KEY_FILTER_REQUEST_FROM_TYPE_CODE                     =           4;

    public static  CALL_FROM_BANNER_PAGE                                        =           1;
    public static  CALL_FROM_CATEGORY_PAGE                                      =           2;
    public static  CALL_FROM_SEARCH_PAGE                                        =           3;
    public static  CALL_FROM_MOBILE_FILTER                                      =           4;
    public static  CALL_FROM_BRAND_PAGE                                         =           5; //BrandProductsNewLogic
    
    public static  BANNER_CALL_FROM_HOME_PAGE                                         =           1; //BannersNewLogic
    public static  BANNER_CALL_FROM_CATEGORY_PAGE                                     =           2; //BannersNewLogic

    public static  googleClientId        =           "856956139095-q4tf94ldbcvmcpkiv51i4p4abpm9s1l7.apps.googleusercontent.com";
    public static  facebookClientId      =           "132405985426827"; 
    public static  googleMapsKey         =           "AIzaSyBAo95iVlUhhQtF-me3CDUPUDG8chTmJAA";

    public static config = "";
 
    public static ORDER_STATUS_CODE_FOR_VERY_GOOD                                   =           1; 
    public static ORDER_STATUS_CODE_FOR_GOOD                                        =           2; 
    public static ORDER_STATUS_CODE_FOR_AVERAGE                                     =           3; 
    public static ORDER_STATUS_CODE_FOR_BAD                                         =           4; 
    public static ORDER_STATUS_CODE_FOR_VERY_BAD                                    =           5; 

    public static PINCODE_AVAILABLITY_DID_NOT_CHECK                                     = 1;
    public static PINCODE_AVAILABLITY_AVAILABLE                                         = 2;
    public static PINCODE_AVAILABLITY_NOT_AVAILABLE                                     = 3;

    public static STATUS_CODE_ENABLE                                                    = 1;

    public static  ANDROID_APP_LINK_CODE                                             =          1;
    public static  IOS_APP_LINK_CODE                                                 =          2;
    public static  BACK_END_APP_LINK_CODE                                            =          3;
    public static  FRONT_END_APP_LINK_CODE                                           =          4;

    public static PARENT_BLOG_TYPE_ID                                                = 1;
    public static CHILD_BLOG_TYPE_ID                                                 = 2;

    public static STORE_STATUS_CODE_ACTIVE                                           = 1;
    public static STORE_STATUS_CODE_INACTIVE                                         = 2;
    public static STORE_STATUS_CODE_TESTING                                          = 3;
    public static STORE_STATUS_CODE_SUSPEND                                          = 4;
    public static STORE_STATUS_CODE_CLOSED                                           = 5;
    public static STORE_STATUS_CODE_COMING_SOON                                      = 6;
    public static STORE_STATUS_CODE_UNDER_CONSTRCTION                                = 7;
    public static STORE_STATUS_CODE_UPDGRADING                                       = 8;
 
    public static FILTER_CALL_FROM_BANNER                                           = 1;
    public static FILTER_CALL_FROM_SEARCH                                           = 2;
    public static FILTER_CALL_FROM_CATEGORY                                         = 3;
    public static FILTER_CALL_FROM_BRAND                                            = 4;//BrandProductsNewLogic
    
    public static DISCOUNT_TYPE_FLAT                                                = 1;
    public static DISCOUNT_TYPE_PERCENTAGE                                          = 2; 

    public static APPLICATION_TYPE_SINGLE_VENDOR_CODE                               = 1;
	public static APPLICATION_TYPE_MULTI_VENDOR_CODE                                = 2;
    public static APPLICATION_TYPE_MARKET_PLACE_WITH_MULTI_VENDOR_CODE              = 3;
    
    public static PRODUCT_REVIEW_TYPE_CODE                                          = 1;

    // NewBannerChanges FROM HERE 
    public static BANNER_STYLE_TYPE_CODE_LIST                                        = 1;
    public static BANNER_STYLE_TYPE_CODE_SCROLL                                      = 2;

    public static BANNER_VISIBILITY_TYPE_CODE_HOME_PAGE                              = 1;
    public static BANNER_VISIBILITY_TYPE_CODE_ALL_PAGES                              = 2;
    public static BANNER_VISIBILITY_TYPE_CODE_CATEGORY_PAGE                          = 3;
    
    public static BANNER_DISPLAY_TYPE_CODE_WEB                                      = 2;
    public static BANNER_DISPLAY_TYPE_CODE_MOBILE                                   = 3;
    
    public static IMAGE_DIRECTION_TYPE_RIGHT_TO_LEFT                                = "rtl";
    public static IMAGE_DIRECTION_TYPE_LEFT_TO_RIGHT                                = "ltr";
    // NewBannerChanges TILL HERE 
}