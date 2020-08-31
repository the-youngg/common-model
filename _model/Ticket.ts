import BaseModel from "./BaseModel";

export default class Ticket extends BaseModel {

    /**
     * 订单ID
     */
    orderId: number = 0;

    /**
     * 商品ID
     */
    commodityId: number = 0;

    /**
     * 工单类型
     */
    ticketType: string = '';

    /**
     * 原因类型
     */
    reasonType: string = '';

    /**
     * 其他原因
     */
    reason: string = '';

    /**
     * 管理员审核
     */
    operate: string = '';

    /**
     * 退款类型
     */
    refundType: string = '';

    /**
     * 退款账号
     */
    refundAccount: string = '';

    /**
     * 退款金额
     */
    refundAmount: string = '';
}