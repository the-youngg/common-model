import BaseModel from "./BaseModel";

export default class CommodityAttribute extends BaseModel {

    /**
     * 属性名
     */
    name: string = '';

    /**
     * 属性值
     */
    value: string = '';
}