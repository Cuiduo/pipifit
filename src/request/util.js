export function debounce(func, delay) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
export function SplitArray (N,Q)
{
    var R = [],F;
    for (F = 0;F < Q.length;) R.push(Q.slice(F,F += N))
    return R
}
