'use strict';
let f = '';
class Praise {
    /**
     * 构造方法
     * @param {点击的次数} num 
     * @param {点击的元素} element 
     */
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    // 点击事件
    clickButton() {
        this.element.click(() => {
            if(f){
                clearTimeout(f);
            }
            f = setTimeout(() => {
                if (this.num < 10) {

                    // 处理大拇指的样式
                    this.element.css('-webkit-filter', 'grayscale(0)');
    
                    // 点赞动画
                    $("#addOne").animate({
                        top: 50,
                        opacity: 'toggle'
                    }, 500);
    
                    // 处理点赞次数加加
                    this.num = add(this.num);
    
                    // 移除点赞动画
                    setTimeout(() => {
                        $("#addOne").animate({
                            top: 0,
                            opacity: 'toggle'
                        }, 500);
                    }, 1000);
    
                    // 调用后台接口, 修改点赞次数
                    axios.get('/index/update')
                        .then(res=>{
    
                        })
                        .catch(err=>{
    
                        })
    
                } else {
                    // 大拇指置灰
                    this.element.css('-webkit-filter', 'grayscale(1)');
    
                    // 清空点击次数
                    this.num = 0;
                }
                console.log(this.num);
            }, 500);
            
        })
    }
}

class Thumb extends Praise {
    constructor(num, element) {
        super(num, element);
    }
}

// 导出模块
export default {Thumb};
// export default Thumb;