const add =function(a,b)
{
    return a+b;
}
function useCallbackFn(callback)
{
console.log(callback(20,30));
}
useCallbackFn(add)