import BaseModel from "./BaseModel";
import AddresseeInfo from "./AddresseeInfo";
import Commodity from "./Commodity";

export default class Order extends BaseModel {

    /**
     * 订单序列号
     */
    serial: string = '';

    /**
     * 收货人信息
     */
    addresseeInfo: AddresseeInfo = new AddresseeInfo();

    /**
     * 商品数组
     */
    commodities: Commodity[] = [];

    /**
     * 运费
     */
    transportFee: number = 0;

    /**
     * 商品合计(商品金额合计)
     */
    commoditySum: number = 0;

    /**
     * 订单总金额（除了商品合计外还包括运费等）
     */
    checkAmount: number = 0;

    /**
     * 应付金额(订单总金额上打折扣等)
     */
    chargeAmount: number = 0;

    /**
     * 订单状态
     */
    status: string = '';

    /**
     * 订单序列号
     */
    orderSerial: string = '';

    /**
     * 订单生成时间
     */
    createTime: string = '';

    /**
     * 付款时间
     */
    paymentTime: string = '';

    /**
     * 发货时间
     */
    deliveryTime: string = '';

    /**
     * 完成交易时间
     */
    finishTime: string = '';

    /**
     * 配送员
     */
    deliveryMan: string = '';

    /**
     * 配送员电话
     */
    deliveryTel: string = '';


}