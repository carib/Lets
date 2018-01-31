export function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), (wait || 1));
  }
}

// export const debounce = (callback, wait) => {

// export function debounce(callback, wait, context = this) {
//   let timeout;
//   let callbackArgs;
//   const later = () => callback.apply(context, callbackArgs);
//   return function() {
//     callbackArgs = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   }
// }

// export const debounce = (func, wait) => {
//   let timeout;
//   return function(...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(args), wait);
//   }
// }

// export function debounce(func, wait, immediate) {
//   let timeout;
//   return function() {
//     let context = this, args = arguments;
//     let later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };
