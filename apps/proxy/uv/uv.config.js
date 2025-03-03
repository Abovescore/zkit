self.__uv$config = {
    prefix: '/apps/proxy/go/',
    bare:'https://goto.zkit.above.gay/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/apps/proxy/uv/uv.handler.js',
    bundle: '/apps/proxy/uv/uv.bundle.js',
    config: '/apps/proxy/uv/uv.config.js',
    sw: '/apps/proxy/uv/uv.sw.js',
};
