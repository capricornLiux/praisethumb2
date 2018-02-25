'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = '';

var Praise = function () {
    /**
     * 构造方法
     * @param {点击的次数} num 
     * @param {点击的元素} element 
     */
    function Praise(num, element) {
        _classCallCheck(this, Praise);

        this.num = num;
        this.element = element;
    }
    // 点击事件


    _createClass(Praise, [{
        key: 'clickButton',
        value: function clickButton() {
            var _this = this;

            this.element.click(function () {
                if (f) {
                    clearTimeout(f);
                }
                f = setTimeout(function () {
                    if (_this.num < 10) {

                        // 处理大拇指的样式
                        _this.element.css('-webkit-filter', 'grayscale(0)');

                        // 点赞动画
                        $(".addOne").animate({
                            top: 50,
                            opacity: 'toggle'
                        }, 500);

                        // 处理点赞次数加加
                        _this.num = add(_this.num);

                        // 移除点赞动画
                        setTimeout(function () {
                            $(".addOne").animate({
                                top: 0,
                                opacity: 'toggle'
                            }, 500);
                        }, 1000);

                        // 调用后台接口, 修改点赞次数
                        axios.get('/index/update').then(function (res) {}).catch(function (err) {});
                    } else {
                        // 大拇指置灰
                        _this.element.css('-webkit-filter', 'grayscale(1)');

                        // 清空点击次数
                        _this.num = 0;
                    }
                    console.log(_this.num);
                }, 500);
            });
        }
    }]);

    return Praise;
}();

var Thumb = function (_Praise) {
    _inherits(Thumb, _Praise);

    function Thumb(num, element) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
    }

    return Thumb;
}(Praise);

// 导出模块


exports.default = { Thumb: Thumb };
// export default Thumb;
