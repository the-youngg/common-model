import BaseModel from "./BaseModel";

export default class Advertisement extends BaseModel {

    /**
     * 广告ID
     */
    advertisementId: number = 0;

    /**
     * 广告封面图片url
     */
    coverUrl: string = '';

    /**
     * 点击后打开的链接
     */
    targetUrl: string = '';

    /**
     * 广告优先级
     */
    priority: number = 0;

    /**
     * 广告枚举类
     */
    advertisementType: string = '';

}