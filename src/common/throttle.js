/**
 * 
 * @param {Function} fn 
 * @param {Number} delay 
 */
export function throttle(fn, delay = 100) {
    let timer = null;

    return function() {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this.arguments)
        }, delay)
    }
}