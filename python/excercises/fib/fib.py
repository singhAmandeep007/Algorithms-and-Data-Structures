import functools


def memoize(f):

    @functools.wraps(f)
    def wrapper_memoize(*args, **kwargs):
        cache_key = args + tuple(kwargs.items())
        if cache_key not in wrapper_memoize.memo:
            wrapper_memoize.memo[cache_key] = f(*args, **kwargs)
        return wrapper_memoize.memo[cache_key]

    wrapper_memoize.memo = {}
    return wrapper_memoize


@memoize
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
