import Commodity from "./Commodity";

export default class CartInfo {

    /**
     * 购物车ID
     */
    cartId: number = 0;

    /**
     * 购物车商品列表
     */
    commodities: Commodity[] = [];
}