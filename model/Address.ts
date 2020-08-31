import BaseModel from "./BaseModel";
import Point from "./Point";

export default class Address extends BaseModel {

    /**
     * 地址别名:管理员设置
     */
    name: string = '';

    /**
     * 详细地址
     */

    detail: string = '';

    /**
     * 地址坐标
     */
    position: Point[] = [];


}