/**
 * @Author: guopeijia.
 * @Data: 2018/8/15 0015
 * @Version: 1.0
 * @description: 所有页面的url在这里录入
 */
import { NativeInterface, RUNTIME_ENV } from "../lib/nativeInterface/NativeInterface";

/* ======================================外链域名 */
let shareDomain = 'https://vmall.viomi.com.cn/';
/* ======================================常规服务接口 */
let API_DOMAIN = 'https://s.viomi.com.cn/';
let API_MS_DOMAIN = 'https://ms.viomi.com.cn/';
let API_MS_NEWDOMAIN = 'https://vstore-api.viomi.com.cn/';
let API_CS_DOMAIN = 'https://cs.viomi.com.cn/';
let API_MIAE_DOMAIN = 'https://vmall-crm.viomi.com.cn/';
let API_CTC_DOMAIN = 'https://ctc.viomi.com.cn/doscall/';

// const MOCK_URL = 'http://120.92.53.14:7300/mock/5f17d2d3b61d7b1caac3ffaa/app/';

switch (NativeInterface.getRuntimeEnv()) {
    case RUNTIME_ENV.DEV:
        shareDomain = 'https://vwater-wechat.viomi.com.cn/';
        API_DOMAIN = 'https://vj.viomi.com.cn/';
        API_MS_DOMAIN = 'https://mstest.viomi.com.cn/';
        API_MS_NEWDOMAIN = 'https://mstest.viomi.com.cn/';
        API_CS_DOMAIN = 'https://vwater-cs.viomi.com.cn/';
        API_MIAE_DOMAIN = 'https://crm-test.viomi.com.cn/';
        API_CTC_DOMAIN = 'https://ds.doscs.com/demo/yunmi/doscall/';
        break;
    case RUNTIME_ENV.UAT:
        shareDomain = 'http://uat-vmall.viomi.net/';
        API_DOMAIN = 'http://uat-s.viomi.net/';
        API_MS_DOMAIN = 'http://uat-ms.viomi.net/';
        API_MS_NEWDOMAIN = 'http://uat-vstore-api.viomi.net/';
        API_CS_DOMAIN = 'http://uat-cs.viomi.net/';
        API_MIAE_DOMAIN = 'http://uat-vmall-crm.viomi.net/';
        API_CTC_DOMAIN = 'https://ds.doscs.com/demo/yunmi/doscall/';
        break;
    case RUNTIME_ENV.SIT:
        shareDomain = 'http://dev-vmall.viomi.cn/';
        API_DOMAIN = 'http://dev-s.viomi.cn/';
        API_MS_DOMAIN = 'http://dev-ms.viomi.cn/';
        API_MS_NEWDOMAIN = 'http://dev-vstore-api.viomi.cn/';
        API_CS_DOMAIN = 'http://dev-cs.viomi.cn/';
        API_MIAE_DOMAIN = 'http://dev-vmall-crm.viomi.cn/';
        API_CTC_DOMAIN = 'https://ds.doscs.com/demo/yunmi/doscall/';
        break;
    case RUNTIME_ENV.PROD:
    default:
        break;
}

export const SHARE_DOMAIN = shareDomain;

// const API_DOMAIN = isTestEnv ? 'https://vj.viomi.com.cn/' : 'https://s.viomi.com.cn/';
// const API_MS_DOMAIN = isTestEnv ? 'https://mstest.viomi.com.cn/' : 'https://ms.viomi.com.cn/';
// const API_MS_NEWDOMAIN = isTestEnv ? 'https://mstest.viomi.com.cn/' : 'https://vstore-api.viomi.com.cn/';
// const API_CS_DOMAIN = isTestEnv ? 'https://vwater-cs.viomi.com.cn/' : 'https://cs.viomi.com.cn/';
// const API_MS_WEB_DOMAIN = `${API_MS_DOMAIN}campaign-web/services/`;
// const API_MIAE_DOMAIN = isTestEnv ? 'https://crm-test.viomi.com.cn/services/' : 'https://vmall-crm.viomi.com.cn/services/';

// 我的团购订单列表 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/428827287
export const MY_GROUP_PURCHASE_LIST = `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/info/user/groups.json`; // https://vj.viomi.com.cn/services/campaign/groupon/info/currentUser/group.json?token=xxx
// 团购商品首页 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/428827130
export const GROUP_PURCHASE_PRODUCT_DETAIL = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/homepage/${campaignId}.json`; // https://vj.viomi.com.cn/services/campaign/groupon/V2/homepage/1072.json?token=QfRya9RKSJQbC8Ku
// 团购详情信息 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/431446112
export const GROUP_PURCHASE_DETAIL = groupId => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/info/group/${groupId}.json`;
// 根据groupId获取某团的信息 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/428827298
export const SPECIFIC_GROUP_PURCHASE_INFO = groupId => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/info/group/detailInfo/${groupId}.json`;
// 获取正在团购列表 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/428827296
export const CURRENT_GROUP_PURCHASE_LIST = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/info/${campaignId}/groups.json`;
// 获取一分钱拼团中奖名单
export const LOTTERY_WINNER_LIST = `${API_DOMAIN}services/campaign/lottery/v2/winList.json`;
// 查询当前用户的指定团的订单信息 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/431282733
export const GROUP_PURCHASE_ORDER_DETAIL_BY_USER = (groupId, orderCode) => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/info/currentUser/group/${groupId}/orderInfo/${orderCode}.json`;
// 获取地址库列表-省市区tree - 微服务接口
export const ADDRESS_LIST_TREE_MS = userCode => `${API_MS_DOMAIN}viomi-gateway/viomi-base-info/app/appDivision/${userCode}/listAllEnableDivisionTree`;
// 获取收货地址列表(微服务接口迁移)
export const ADDRESS_LIST_MS = userCode => `${API_MS_DOMAIN}user-web/services/delivery/query.json?userCode=${userCode}`;
// 创建收货地址(微服务接口迁移)
export const ADD_ADDRESS_MS = userCode => `${API_MS_DOMAIN}user-web/services/delivery/create.json?userCode=${userCode}`;
// 更新收货地址(微服务接口迁移)
export const EDIT_ADDRESS_MS = userCode => `${API_MS_DOMAIN}user-web/services/delivery/modify.json?userCode=${userCode}`;
// 地区选择
export const DIVISION_LIST = `${API_DOMAIN}services/dictionary/division/1/queryByParent.json`;
// 初始化预览订单(新) https://note.youdao.com/coshare/index.html?token=25C897A6840C4B7296375A80E7F5EBCC&gid=42130582#/
export const GROUP_PURCHASE_ORDER_INIT = userCode => `${API_MS_DOMAIN}order-web/services/app/order/v2/${userCode}/orders/initSubmitData/2.json`;
// 下单预览(新) https://note.youdao.com/coshare/index.html?token=35D14F32C5F348BD881B001868A9330B&gid=42130582#/
export const GROUP_PURCHASE_ORDER_PREVIEW = userCode => `${API_MS_DOMAIN}order-web/services/app/order/v2/${userCode}/orders/preview/1.json`;
// 订单详情 https://note.youdao.com/coshare/index.html?token=5D080C4A6D5544948D5367B13472BF42&gid=42130582#/ （已弃用）
export const ORDER_DETAIL = (userCode, orderCode) => `${API_DOMAIN}services/user/${userCode}/orders/${orderCode}/1.json`;
// 开团/参团排队 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/436578055
export const GROUP_PURCHASE_CHECK_QUEUE = `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/pushGroupPurchaseQueue.json`;
// 获取所在队列的排位 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/436578039
export const QUEUE = `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/getGroupPurchaseQueueIndex.json`;
// 填写订单（新） https://note.youdao.com/coshare/index.html?token=E02D3F55FAF24DEAACBC12576F8882B5&gid=42130582#/
export const CREAT_ORDER = userCode => `${API_MS_DOMAIN}order-web/services/app/order/v2/${userCode}/orders/1.json`;
// 获取有效的支付方式
export const GET_PAYTYPE = `${API_MS_DOMAIN}pay-web/services/pay/method/actived.json`;
// 提交支付，创建预支付单
export const CREAT_PAYORDER = userCode => `${API_MS_DOMAIN}order-web/services/order/pay/${userCode}/unifiedorder.json`;
// 于订单填写进入收银台
export const ACCESS_TO_CASH_REGISTER = orderCode => `${API_MS_DOMAIN}order-web/services/order/pay/${orderCode}/expiredTime.json`;
// 主动查询支付结果
export const GET_PAYRESULT = `${API_MS_DOMAIN}pay-web/services/pay/result.json`;
// 开团校验 https://note.youdao.com/coshare/index.html?token=5D0F13B3D9E14ADEAD16AE87C3C5BAEE&gid=42130582#/203914664
export const VALID_CREATE_GROUP = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/${campaignId}/group/preCheck.json`; // 微服务
// 参团校验
export const VALID_JOIN_GROUP = groupId => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/group/${groupId}/preCheck.json`;
// 获取团id
export const GET_GROUP_ID_BY = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/groupon/${campaignId}/query/instance/info.json`;
// 查询会员可用积分
export const GET_TOTAL_V_COIN = `${API_MS_DOMAIN}behavior-web/services/points/queryBalancePoints.json`;
// 查询会员是否设置签到提醒
export const GET_SIGNIN_REMINDER = `${API_MS_DOMAIN}behavior-web/services/trigger/setting/query.json`;
// 设置签到提醒
export const SET_SIGNIN_REMINDER = `${API_MS_DOMAIN}behavior-web/services/trigger/setting/set.json`;
// 查询用户设备联网和积分信息
export const GET_DEVICE_V_COIN = `${API_MS_DOMAIN}behavior-web/services/points/queryEqusNetAndPoints.json`;
// 分页查询会员积分明细信息
export const GET_V_COIN_DETAIL_LIST = `${API_MS_DOMAIN}behavior-web/services/points/queryPointsDetailPage.json`;
// 会员签到
export const CHECK_IN = `${API_MS_DOMAIN}behavior-web/services/sign/userSign.json`;
// 查询会员签到信息集合
export const CHECK_IN_DATA = `${API_MS_DOMAIN}behavior-web/services/sign/querySignInfoList.json`;
// 分享成功获取奖励
export const SHARE_SUCCESS = `${API_MS_DOMAIN}behavior-web/services/share//userShare.json`;
// 获取UI配置广告位
export const AD_LAYOUT = `${API_MS_DOMAIN}layout-web/services/layout/query/showWidget.json`;
// 签到积分页获取分享的信息
export const GET_CHECK_IN_SHARE_INFO = `${API_MS_DOMAIN}behavior-web/services/copywriter/queryShareDoc.json`;
// 获取退货物流公司列表
export const GET_EXPRESS = `${API_MS_DOMAIN}express-web/services/express/v2/listDeliveryCompany`;
// 退款商品信息
export const GRT_REFUNDORDER_LIST = (userCode, orderCode) => `${API_MS_DOMAIN}cs-web/services/cs/user/refundOrder/${userCode}/orderDetail/${orderCode}.json`;
// 提交退货物流信息
export const POST_REFUND_EXPRESS_INFO = (userCode, serviceOrderCode) => `${API_MS_DOMAIN}cs-web/services/cs/user/refundOrder/${userCode}/saveRefundExpressInfo/${serviceOrderCode}.json`;
// 用户退款单列表 https://note.youdao.com/share/?token=1A991545D5F54026B56118D9B4F039F6&gid=42130582#/
export const USER_REFUND_LIST = userCode => `${API_MS_DOMAIN}cs-web/services/cs/user/refundOrder/${userCode}/list.json`;
// 获取订单包裹信息 https://note.youdao.com/share/?token=3821BE68B99C453BBFB300993D2DB912&gid=42130582#/
export const GET_ORDER_PACKAGE = `${API_MS_DOMAIN}express-web/services/express/order/listExpressInfoDetailByOrderCode.json`;
// 修改延迟发货时间
export const PUT_DELAY_DELIVERY_TIME = (userCode, orderCode) => `${API_MS_DOMAIN}order-web/services/user/${userCode}/2/${orderCode}/delayDeliver.json`;
// 取消订单
export const CANCEL_ORDER = (userCode, orderCode) => `${API_MS_DOMAIN}order-web/services/app/order/v2/${orderCode}/cancel.json`;
// 上传文件
export const UPLOAD_FILE = `${API_DOMAIN}services/fileupload/temp/form.json`;
// 上传文件(新)
export const UPLOAD_FILE_NEW = `${API_MS_DOMAIN}viomi-gateway/viomi-basic/upload/file/upload`;
// 用户提交退款单 https://note.youdao.com/share/?token=7D6AAE664F634C61938C408AA135EEF6&gid=42130582#/
export const SUBMIT_REFUND_REQUEST = userCode => `${API_MS_DOMAIN}cs-web/services/cs/user/refundOrder/${userCode}/submitRefundItem.json`;
// 重新提交退款单
export const SUBMIT_RESETREFUND_REQUEST = (userCode, serviceOrderCode) => `${API_MS_DOMAIN}cs-web/services/cs/user/refundOrder/${userCode}/reSubmitAudit/${serviceOrderCode}.json`;
// 用户退款单详情 https://note.youdao.com/coshare/index.html?token=EA4BF035002E410F8A69F759061925F5&gid=42130582#/
export const USER_REFUND_DETAILS = (userCode, serviceOrderCode) => `${API_MS_DOMAIN}cs-web/services/cs/user/refundOrder/${userCode}/detail/${serviceOrderCode}.json`;
// 根据sku数组查询主图
export const REQUEST_SKU_IMAGE = `${API_MS_DOMAIN}wares-web/services/prod/query/querySkuListByIds.json`;
// 根据sku查询商品数据
export const REQUEST_SKU_ITEM = `${API_MS_DOMAIN}vstore-api/wares/open-api/v1/wares/querySkuListByIds.json`;
// 确认收货 http://note.youdao.com/groupshare/?token=431280090AA94498A43F187331AD1F73&gid=57143034
export const CONFIRM_RECEIVE = `${API_MS_DOMAIN}express-web/services/express/order/confirmedRecieveByOrderCode.json`;
// 取消退款 https://note.youdao.com/coshare/index.html?token=0692A386E66D4FF093BBD32C2510D0CB&gid=42130582#/
export const CANCEL_REFUND_REQUEST = (userCode, serviceOrderCode) => `${API_MS_DOMAIN}cs-web/services/cs/user/refundOrder/${userCode}/cancel/${serviceOrderCode}.json`;
// 再次购买 https://note.youdao.com/share/?token=1AD41D2C71AC44AF943A88F8E3086D89&gid=57143034
export const BUY_AGAIN = userCode => `${API_MS_DOMAIN}cart-web/services/user/cart/rebuy.json`;
// 获取搜索热点
export const SEARCH_HOT_SPOT = `${API_MS_DOMAIN}wares-web/services/prod/elastic/search/queryProdSearchHots.json`;
// 搜索商品
export const SEARCH_PRODUCT = `${API_MS_DOMAIN}vstore-api/wares/open-api/v1/prodElasticSearch/querySearch.json`;
// 秒杀初始化数据
export const SECKILL_INITDATA = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/seckill/${campaignId}/initData.json`;
// 秒杀活动的秒中用户
export const SECKILL_USERLIST = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/seckill/${campaignId}/seckillUsers.json`;
// 秒中用户和预览用户
export const SEC_KILL_USER = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/seckill/${campaignId}/seckillUsersByStatus.json`;
// 商品图片描述
export const PRODUCT_DESCRIPTION = `${API_MS_DOMAIN}wares-web/services/prod/query/queryProdSpuDescImgs.json?plateForm=2`;
// 秒杀立即抢购
export const SNAPPEDPIMMEDIATELY = (campaignId, idx) => `${API_MS_DOMAIN}campaign-web/services/campaign/seckill/${campaignId}/${idx}/doSeckill.json?`;
// 添加购物车 Path.service + "user/" + userInfo.userCode + "/cart/" + (isAdd ? 'add' : 'remove') + "/" + skuId + ".json?token=" + userInfo.token + "&quantity=" + (quantity || '1')
export const ADD_SHOPPING_CAR = (userCode, skuId) => `${API_MS_DOMAIN}cart-web/services/user/cart/add/${skuId}.json`;
// 查询指定满折活动下的商品详情列表 https://note.youdao.com/coshare/index.html?token=9EBA9554B1BD4317BB99EF522AE0B7DB&gid=42130582#/434061450
export const GET_BARGAIN_LIST = defId => `${API_MS_DOMAIN}campaign-app-web/services/campaign/satisfyDiscount/def/${defId}/detail.json`;
// 查询积分兑换优惠券的列表 https://note.youdao.com/share/?token=60CF1711D8144DD6BE4027AC5F180B57&gid=42130582
export const GET_VCOIN_COUPON = `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/online/def.json`;
// 根据目录查询分类数据
export const GET_CATEGORY = `${API_MS_DOMAIN}wares-web/services/prod/query/querySubCatalogsByParentId.json`;
// 根据分类查询spu数据 https://mstest.viomi.com.cn/wares-web/services/prod/query/querySpuInfoDisplayList.json?catalogId=356&plateForm=2&null
export const GET_SPU_BY_CATEGORY = `${API_MS_DOMAIN}wares-web/services/prod/query/querySpuInfoDisplayList.json`;
// 我的订单列表 http://120.92.35.209:8888/pages/viewpage.action?pageId=9344405
export const GET_ORDER_LIST = `${API_MS_DOMAIN}order-data-web/services/user/app/orders/list.json`;
// 查询订单跟踪包裹物流信息接口 http://120.92.35.209:8888/pages/viewpage.action?pageId=9344176
export const GET_EXPRESS_INFO = `${API_MS_DOMAIN}express-web/services/express/order/listExpressTrackInfoByOrderCode`;
// 新的物流包裹查询接口
export const GET_EXPRESS_INFO_NEW = `${API_MS_DOMAIN}ofc-web/services/oms/order/composite/queryOmsPackageInfoByOrderCode.json`;
// 批量获取商品的衍生属性 http://120.92.35.209:8888/pages/viewpage.action?pageId=9343794
export const GET_SKU_INFO = `${API_MS_DOMAIN}wares-web/services/prod/query/listProdSkuDerivedAttribute.json`;
// 批量查询sku商品信息
export const QUERY_SKU_BASICINFO = `${API_MS_DOMAIN}wares-web/services/prod/sku/query/querySkuBasicInfo.json`;
// 订单详情（新） http://120.92.35.209:8888/pages/viewpage.action?pageId=9344193
export const GET_ORDER_DETAIL = orderCode => `${API_MS_DOMAIN}order-data-web/services/user/common/orders/${orderCode}/1.json`;
// 删除订单 http://120.92.35.209:8888/pages/viewpage.action?pageId=12586361
export const DELETE_ORDER = orderCode => `${API_MS_DOMAIN}order-data-web/services/user/app/${orderCode}/delete.json`;
// 快递单号查询包裹物流进度信息 http://120.92.35.209:8888/pages/viewpage.action?pageId=9344192
export const GET_PACKAGE_INFO = `${API_MS_DOMAIN}express-web/services/express/kd100/queryLogisticTracesByDelivery.json`;
// 推荐商品
export const GET_RECOMMEND = `${API_MS_DOMAIN}wares-web/services/prod/query/randomRecommendSkuList.json`;
// 推荐商品(分页)
export const GET_RECOMMEND_PAGINATION = `${API_MS_DOMAIN}vstore-api/wares/open-api/v1/wares/query/pageRecommendSku`;
// 优惠券列表-支持分页
export const GET_COUPON_LIST = `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/online/instance/user/page.json`;
// 兑换优惠券
export const EXCHANGE_COUPON = `${API_MS_DOMAIN}campaign-web/services/campaign/coupon/redeemcode/exchange.json`;
// 优惠券推荐列表
export const GET_COUPON_PRODUCT_LIST = `${API_MS_DOMAIN}wares-web/services/prod/sku/query/pageSearchSkuInfos.json`;
// 查看优惠券状态
export const GET_COUPON_STATUS = id => `${API_MS_DOMAIN}campaign-web/services/campaign/instance/${id}/baseinfo.json`;
// 查询用户在该活动里选中的商品信息列表
export const GET_CART_CAMPAIGN_ITEM = `${API_MS_DOMAIN}cart-web/services/mall/procedures/cart/query/campaign/sku.json`;
// 添加活动商品到购物车
export const ADD_CART_WITH_CAMPAIGN = `${API_MS_DOMAIN}campaign-app-web/services/campaign/shoppingcart/add2Cart.json`;
// 购物车详情页 ttp://120.92.35.209:8888/pages/viewpage.action?pageId=13896278
export const GET_CART_DETAIL = `${API_MS_DOMAIN}cart-web/services/user/cart/detail.json`;
// 购物车更改购物车商品的选中与否，批量接口
export const SET_CART_ITEM_SELECTION = `${API_MS_DOMAIN}cart-web/services/mall/procedures/cart/selectedOrNot.json`;
// 购物车更改购物车商品的数量
export const SET_CART_ITEM_QUANTITY = skuId => `${API_MS_DOMAIN}cart-web/services/mall/procedures/cart/set/${skuId}.json`;
// 购物车删除购物车商品
export const DELETE_CART_ITEM = `${API_MS_DOMAIN}cart-web/services/mall/procedures/cart/remove/skuList.json`;
// 购物车商品选择促销
export const SET_CAMPAIGN = `${API_MS_DOMAIN}cart-web/services/mall/procedures/cart/set/cart/sku/cmp.json`;
// 购物车商品选择促销，支持批量
export const SET_CAMPAIGNS = `${API_MS_DOMAIN}cart-web/services/mall/procedures/cart/set/cart/sku/cmp/list.json`;
// 购物车金额预览
export const PREVIEW_PRICE = `${API_MS_DOMAIN}cart-web/services/mall/procedures/cart/preview.json`;
// 满返活动列表
export const GET_REBATE_BY_PRICE_LIST = defId => `${API_MS_DOMAIN}small-routine-web/services/campaign/satisfyreward/def/${defId}/detail.json`;
// 推广订单列表 http://120.92.35.209:8888/pages/viewpage.action?pageId=18749303
export const GET_PROMOTION_ORDER_LIST = `${API_MS_DOMAIN}order-data-web/services/orders/info/orderProfitList.json`;
// 我的钱包-> 查询账户余额信息、分销客 -> 查询收益
export const WALLET_QUERYACCOUNTINFO = `${API_MS_DOMAIN}settle-web/services/settle/statistic/balance/profit/member.json`;
// 分销客 -> 查询今日粉丝
export const GET_DISTRIBUTION_FANS = `${API_MS_DOMAIN}user-web/services/user/countMyFans.json`;
// 分销客 -> 查询今日订单
export const GET_DISTRIBUTION_ORDER = `${API_MS_DOMAIN}order-data-web/services/orders/info/spreadOrderAmount.json`;
// 我的粉丝
export const GET_FANS_LIST = `${API_MS_DOMAIN}user-web/services/user/pageFansInfo.json`;
// 会员权益信息
export const GET_MEMBER_RIGHTS = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/queryGrowthInfo.json`;
// 会员等级信息
export const GET_MEMBER_GRADE = `${API_MS_DOMAIN}membership-web/services/memberGradeSetting/queryGradeInfo.json`;
// 成长值明细
export const GET_RROWTH_VALUE = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/pageGrowthDetails.json`;
// 积分余额查询(V币、云币)
export const MEMBER_GET_POINTS_BALANCE = `${API_MS_DOMAIN}behavior-web/services/points/queryBalancePoints.json`;
// 积分明细分页查询(V币、云币)
export const MEMBER_GET_POINTS_DETAIL = `${API_MS_DOMAIN}behavior-web/services/points/queryPointsDetailPage.json`;
// 我的钱包-> 查询实名认证状态
export const QUERY_USERIDCARD_INFO = `${API_MS_DOMAIN}user-web/services/userInfo/queryUserIdCardInfo.json`;
// 我的钱包-> 收益明细
export const WALLET_PROFIT = `${API_MS_DOMAIN}settle-web/services/settle/statistic/member/order/profit.json`;
// 我的钱包-> 提现记录
export const WITHDRAWAL_RECORD = `${API_MS_DOMAIN}settle-web/services/withdraw/apply/page/simple.json`;
// 申请提现-> 获取开户行信息
export const GET_BANKLIST = `${API_MS_DOMAIN}pay-web/services/pay/bank/available.json`;
// 申请提现-> 查询区域信息并组装成树形节点
export const GET_DISTRICT_TREE = `${API_MS_DOMAIN}pay-web/services/pay/bank/district/tree.json`;
// 申请提现-> 申请提现
export const WITHDRAWAL_APPLY = `${API_MS_DOMAIN}settle-web/services/withdraw/apply.json`;
// 申请提现 -> 根据cUserId或bUserId查询银行卡信息
export const WITHDRAWAL_DATA = `${API_MS_DOMAIN}settle-web/services/user/bankcard/list.json`;
// 实名认证 -> 上传图片
export const UPLOAD_IMAGE = `${API_DOMAIN}services/fileupload/channel.json`;
// 实名认证 -> 提交用户身份资料证审核信息
export const SUBMIT_USER_IDCARDINFO = `${API_MS_DOMAIN}user-web/services/userInfo/submitUserIdCardInfo.json`;
// 获取新人大礼包
export const GET_INVITE_GIFT_PACK = `${API_MS_DOMAIN}campaign-web/services/campaign/giftpack/init.json`;
// 获取小程序码
export const GET_MINI_CODE = `${API_DOMAIN}services/mp/qrcode/wxacode/unlimit/v2.json`;
// 发票列表
export const INVOICE_LIST = userCode => `${API_MS_DOMAIN}order-data-web/services/invoice/manage/order/list.json?userCode=${userCode}`;
// 发票详情
export const INVOICE_DETAIL = id => `${API_MIAE_DOMAIN}services/fd/order/invoice/apply/${id}.json?applyId=${id}`;
// 申请发票
export const INVOICE_APPLY = `${API_CS_DOMAIN}services/cs/order/invoice/apply.json`;
// 商品详情
export const PRODUCT_DETAIL = `${API_MS_DOMAIN}vstore-api/wares/open-api/v1/wares/querySpuAndSkuDetailRefactor?`;
// 判断商品是否在某区域可售
export const CAN_BE_SELLABLE = divisionCode => `${API_MS_DOMAIN}wares-web/services/prod/query/whetherCanBeSellable.json?divisionCode=${divisionCode}`;
// 首页/专题页配置组件接口
export const GET_WIDGET_CONFIG = `${API_MS_NEWDOMAIN}vstore-api/layout/open-api/v1/mallLayout/showHomePageRefactor`;
// export const GET_WIDGET_CONFIG = `${API_MS_DOMAIN}vstore-api/layout/open-api/v1/mallLayout/showHomePageRefactor`;
// 领取优惠券
export const GET_COUPON = id => `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/online/def/${id}/instance.json`;
// 商品评价 -> 查看我的订单商品评价
export const QUERY_ORDEREVALUATE_INFO = `${API_MS_DOMAIN}wares-web/services/prod/evaluate/queryOrderEvaluateInfo.json`;
// 商品评价 -> 商品评价数据统计
export const PROD_EVALUATE_STATISTICS = `${API_MS_DOMAIN}wares-web/services/prod/evaluate/prodEvaluateStatistics.json`;
// 商品评价 -> C端商品评价列表
export const PROD_EVALUATE_LIST2C = `${API_MS_DOMAIN}wares-web/services/prod/evaluate/prodEvaluateList2C.json`;
// 商品评价 -> 发布评论
export const SUBMIT_COMMENT = `${API_MS_DOMAIN}wares-web/services/prod/evaluate/createProdSkuEvaluate.json`;
// 商品详情 -> 获取收益金额
export const GET_PROFIT_DATA = `${API_MS_DOMAIN}settle-web/services/settle/sku/member/profit/estimate.json`;
// 获取购物车数量
export const GET_CART_AMOUNT = `${API_MS_DOMAIN}cart-web/services/user/cart/prodAmount.json`;
// 获取V币兑换详情
export const GET_VCOIN_EXDETAIL = id => `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/online/def/${id}.json`;
// 获取首页新人专享商品
export const GET_PRIVILEGE_MSG = `${API_MS_DOMAIN}small-routine-web/services/campaign/newzone/brief.json`;
// 领取新人大礼包
export const GET_GIFTBAG_REQUEST = `${API_MS_DOMAIN}small-routine-web/services/campaign/newzone/giftpack/receive.json`;
// 查询用户是否已领取新人大礼包
export const GET_GIFTBAG_RECEVIED = `${API_MS_DOMAIN}small-routine-web/services/campaign/newzone/giftpack/recevied.json`;
// 用户并集标签判断 [ VIOMI_TAG_PAY: 1 (用户消费标签) ]
export const USER_TAG_LIST_QUERY = `${API_MS_DOMAIN}vstore-api/user-tag/open-api/v1/tag/union/query.json`;
// 查询新人专区大礼包详情
export const GET_GIFTPACK_DETAIL = `${API_MS_DOMAIN}small-routine-web/services/campaign/newzone/giftpack/detail.json`;
// 查询新人专区新用户专享商品详情
export const GET_EXCLUSIVE_PRODUCT = `${API_MS_DOMAIN}small-routine-web/services/campaign/newzone/exclusive/products.json`;
// 商品详情-用户当前sku可用优惠券 http://120.92.35.209:8888/pages/viewpage.action?pageId=42402852
export const GET_DETAILPAGE_COUPON = `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/online/instance/user/wares/v2.json`;
// 商品详情-用户当前sku可领取优惠券 http://120.92.35.209:8888/pages/viewpage.action?pageId=84382930
export const GET_DETAILPAGE_RECOMMEND_COUPON = `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/online/def/wares.json`;
// 商品详情-用户当前sku最优领券方案 http://120.92.35.209:8888/pages/viewpage.action?pageId=84382948
export const GET_DETAILPAGE_COUPON_RECOMMEND = `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/online/def/wares/recommend.json`;
// 商品详情-未消费，有新人价-加入购物车 http://120.92.35.209:8888/pages/viewpage.action?pageId=15270912
export const ADD_CART_NEWUSER = `${API_MS_DOMAIN}campaign-app-web/services/campaign/shoppingcart/add2Cart.json`;
// 会员中心-查询是否会员
export const GET_ISMEMBER = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/isMember.json`;
// 会员中心-查询会员信息
export const QUERY_PLUSINFO = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/queryByPlatformAndUserId.json`;
// 会员中心-会员中心配置相关信息
export const GET_PLUS_MEMBER_CONF = `${API_MS_DOMAIN}vstore-api/wares/open-api/v1/wares/getPlusMemberConfig.json`;
// // 会员中心-获取会员状态 【0：没有记录】 【1：有效】 【-1：失效】【 -2：待生效 】
// export const GET_MEMBER_STATUS = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/getMemberStatus.json`;
// 会员中心-激活会员
export const ACTIVE_MEMBER = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/activateMember.json`;
// C端获取第一层类目列表
export const GET_FIRST_CATEGORY = `${API_MS_DOMAIN}vstore-api/layout/open-api/v1/category/top/list.json`;
// C端获取第二三层类目
export const GET_SUB_CATEGORY = `${API_MS_DOMAIN}vstore-api/layout/open-api/v1/category/other/list.json`;
// C端获取广告信息
export const GET_AD_INFO = `${API_MS_DOMAIN}ad-web/services/ad/admin/categoryAd/listByCodeAndChannel`;
// C端获取商品详情广告信息
export const GET_ADVERTISING_LIST = `${API_MS_DOMAIN}ad-web/services/ad/show/batch`;
// 冰箱商城-查找主导航菜单+开机图接口
export const GET_LIST_NAV_MENU = `${API_MS_DOMAIN}vstore-api/layout/open-api/v1/navBar/listNavigationMenu.json`;
// 获取会员信息与积分余额
export const GET_MEMBERSHIP_BASE_INFO = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/getMembershipInfoAndPoints`;
// 获取云币专区具体分类
export const GET_PLUS_PROD_CATEGORY = `${API_MS_DOMAIN}vstore-api/wares/open-api/v1/catalog/query/getPlusCatalogConfig`;
// 获取云币专区商品分类类目
export const GET_PAGE_CATALOG_PLUS_PROD = `${API_MS_DOMAIN}vstore-api/wares/open-api/v1/catalog/query/pageCatalogPlusProd`;
// C端-批量查询用户是否已领券
export const GET_RECEIVED_LIST = `${API_MS_DOMAIN}campaign-web/services/campaign/coupon/online/def/user/recevied.json`;
// C端-批量查询秒杀活动信息
export const GET_DEF_DETAILS = `${API_MS_DOMAIN}campaign-web/services/campaign/seckill/seckill/def/details.json`;
// 获取会员订单支付成功后返利
export const GET_MEMBERSHIP_REBATE = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/getMembershipRebate`;
// 激活会员身份(返回赠送积分值)
export const ACTIVATE_MEMBER = `${API_MS_DOMAIN}membership-web/services/membershipBaseInfo/activateMemberAndGivePoints.json`;
// 查询用户的无限说资格
export const UNLIMITED_QUALIFICATION = `${API_MS_DOMAIN}small-routine-web/services/campaign/infinite/user/qualification`;
// 激活用户
export const INFINITE_ACTIVATE = `${API_MS_DOMAIN}small-routine-web/services/campaign/infinite/activate`;
// 获取优惠券包信息
export const GET_COUPON_PACK_INFO = couponPackageId => `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/package/${couponPackageId}/info`;
// 领取优惠券包
export const GET_COUPON_PACK_RECEIVE = `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/package/receive`;
// 获取服务端当前时间
export const GET_TIMESTAMP = `${API_MS_DOMAIN}small-routine-web/services/campaign/coupon/package/timestamp`;
// 无限说专区 用户无限说商品可用券 http://mstest.viomi.com.cn/small-routine-web/services/swagger-ui.html#/infinite-controll/activateInfiniteUsingGET
export const GET_COUPON_INFINITE = `${API_MS_DOMAIN}small-routine-web/services/campaign/infinite/user/coupons`;
// 查询拼团组件商品状态
export const GET_GROUP_ITEM_STATUS = `${API_MS_DOMAIN}small-routine-web/services/campaign/groupon/def/list`;
// 查询会员开卡优惠信息
export const GET_MEMBER_DISCOUNT_INFO = `${API_MS_DOMAIN}campaign-web/services/campaign/promotion/order/plusMember`;
// 根据活动id批量查询活动类型
export const QUERY_CAMPAIGN_TYPE = `${API_MS_DOMAIN}campaign-web/services/campaign/def/camps/type`;
// 查询会员权益
export const GET_PLUS_PACKAGE = `${API_MS_DOMAIN}membership-web/services/memberPrivilegesPackage/plusPackage.json`;
// 兑换码激活会员
export const MEMBER_BY_CODE = `${API_MS_DOMAIN}membership-web/services/memberUpgrade/activateMemberByCode.json`;
// CTC工单列表
export const CTC_ORDER_LIST = `${API_CTC_DOMAIN}crm/Api/xcxOrderList`; // new
// 秒杀限流
export const SECKILL_LIMITING = campaignId => `${API_MS_DOMAIN}campaign-web/services/campaign/seckill/${campaignId}/seckillLimiting`;
// 匹配是否推广设备
export const JUDGE_ADAPTDEVICE = `${API_MS_DOMAIN}user-web/services/adCollection/v4.0.1/deviceAdMatch`;
// 上报符合推广的设备数据
export const REPORT_ADAPTDEVICE = `${API_MS_DOMAIN}user-web/services/adCollection/v4.0.1/actionReport`;
