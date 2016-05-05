/**
 * User hefeng
 * Date 2016/5/5
 */
(function() {
    define(function() {
        return {
            load: function (name, req, onLoad, config) {
                var toLoad = ['i18n.origin!'+name];

                req(toLoad, function (i18nText) {
                    var toArray = Array.prototype.slice;

                    if(_.isUndefined(i18nText)) {
                        i18nText = {};
                    }

                    i18nText._ = function(key) {
                        var langVal = this[key];

                        if(!_.isUndefined(langVal)) {
                            if (_.isFunction(langVal)) {
                                var tplArgs = toArray.call(arguments, 1);
                                return langVal.apply(langVal, tplArgs);
                            } else {
                                return langVal;
                            }
                        } else {
                            console.error('i18n!'+name+': 找不到key为', key, '的国际化配置');
                            return key;
                        }
                    };

                    onLoad(i18nText);
                });
            }
        }
    });
}());
