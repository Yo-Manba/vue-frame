import store from '../store/store'

/**
 * 下级页面回退到本级页面时，删除当前页面的缓存
 * @param {*} to 组件前置守卫参数
 * @param {*} from 组件前置守卫参数
 * @param {*} next 组件前置守卫参数
 * @param {String} nextPagePath 下级页面的页面路径
 */
export function delComponent(to, from, next, nextPagePath) {
    if (from.path === nextPagePath) {
        next(vm => {
            // 通过 `vm` 访问组件实例
            vm.$store.commit("delComponent", to.name);
        });
    }
    next();

    // 该方法存在一定弊端，暂不用
    // if (to.meta.index < from.meta.index) {
    //     next((vm) => {
    //         vm.$store.commit("delComponent", to.name);
    //     });
    // }
    // next();
}


/**
 * 本级页面进入下级页面时，缓存当前页面
 * @param {*} to 组件后置守卫参数
 * @param {*} from 组件后置守卫参数
 * @param {*} next 组件后置守卫参数
 * @param {String} nextPagePath 下级页面的页面路径
 */
export function addComponent(to, from, next, nextPagePath) {
    if (to.path === nextPagePath) {
        store.commit("addComponent", from.name);
    }
    setTimeout(() => {
        next();
    }, 0);

    // 该方法存在一定弊端，暂不用
    // if (from.meta.index !== 1 && to.meta.index > from.meta.index) {
    //     store.commit("addComponent", from.name);
    // }
    // setTimeout(() => {
    //     next();
    // }, 0);
}