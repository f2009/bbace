/**
 * permission
 */
define(['app/config'], function(Conf){
    var rs = Conf.rs,
        rs2pm = Conf.rs2pm;

    var _filters = {
        //特殊菜单做拦截处理
        'org.add': function () {
            //return Ctx.getBrhLevel() < 6;
        }
    };

    return {

        //某些特殊的权限码特殊处理
        filter: function (rsId) {
            return _filters[rsId] ? _filters[rsId]() : true;
        },

        has: function (rsId, pmsMap) {
            return this.filter(rsId) && this._has(rsId, pmsMap);
        },

        _has: function(rsId, pmsMap) {

            if (pmsMap['*']) {
                return true;
            }

            // console.log('>>>permisson has rsId', rsId, 'pmsMap', pmsMap);

            if (!rsId || !pmsMap) {
                return false;
            }

            var pms = $.makeArray(rs2pm[rsId] || []);
            var refs = rs[rsId] || [];
            var i, ln;

            //TODO 如果有* 这样的超级权限，这句就出错，暂时在第一行hack一下
            if (!pms.length && !refs.length) {
                return false;
            }

            // for(i = 0, ln = pms.length; i < ln; i++) {
            //     if(pmsMap[pms[i]]) {
            //         return true;
            //     }
            // }

            //TODO rewirte it with regexp
            for (i = 0, ln = pms.length; i < ln; i++) {
                var auth = pms[i];
                var parts = auth.split(':');
                if (parts.length === 3) {
                    var bag = [
                        auth,
                        parts[0] + ':' + parts[1] + ':*',
                        parts[0] + ':*:' + parts[2],
                        parts[0] + ':*', '*'
                    ];
                    for (var j = 0, jlen = bag.length; j < jlen; j++) {
                        if (pmsMap[bag[j]]) {
                            return true;
                        }
                    }
                } else if (pmsMap[auth]) {
                    return true;
                }
            }

            //TODO dynamic add
            for (i = 0, ln = refs.length; i < ln; i++) {
                if (this.has(refs[i], pmsMap)) {
                    return true;
                }
            }

            return false;
        }
    };
});
