import BaseModel from "./BaseModel";
import Point from "./Point";

export default class AddresseeInfo extends BaseModel {

    /**
     * 收件人姓名
     */
    addressee: string = '';

    /**
     * 收件人手机号
     */
    mobile: string = '';

    /**
     * 邮编
     */
    postCode: string = '';

    /**
     * 收件详细地址
     */
    address: string = '';

    /**
     * gps数据
     */
    points: Point[] = [];

    /**
     * 投递点ID
     */
    postSpotId: number = 0;

    /**
     * 投递点名称
     */
    spotName: string = '';

    /**
     * 投递点地址
     */
    spotAddress: string = '';

    /**
     * 是否默认送货地址
     */
    isDefault: boolean = false;

}