import BaseModel from "./BaseModel";
import CommodityAttribute from "./CommodityAttribute";
import Tag from "./Tag";

export default class Commodity extends BaseModel {

    /**
     * 购物车中商品ID
     */
    cartItemId: number = 0;

    /**
     * 商品分类
     */
    tags: Tag[] = [];

    /**
     * 商品封面图片URL
     */

    coverUrl: string = '';

    /**
     * 图片URLs
     */
    imageUrls: string[] = [];

    /**
     * 商品名
     */

    name: string = '';

    /**
     * 商品个数
     */
    count: number = 0;

    /**
     * 新增库存数
     */
    addCount: number = 0;

    /**
     * 商品属性
     */
    attributes: CommodityAttribute[] = [];

    /**
     * 商品单价
     */

    unitPrice: number = 0;

    /**
     * 商品描述
     */

    description: string = '';

    /**
     * 自定义商品序列号
     */
    serial: string = '';

    /**
     * 商品属性IDs
     */
    attributeIds: number[] = [];

    /**
     * 是否立即购买的商品
     */
    instant: boolean = false;

    /**
     * 是否勾选
     */
    checked: boolean = false;

    /**
     * true 上架， false 下架。
     */

    onSale: boolean = false;
}